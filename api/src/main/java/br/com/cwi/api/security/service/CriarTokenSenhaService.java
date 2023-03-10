package br.com.cwi.api.security.service;

import br.com.cwi.api.security.domain.PasswordResetToken;
import br.com.cwi.api.security.domain.Usuario;
import br.com.cwi.api.security.repository.PasswordResetTokenRepository;
import br.com.cwi.api.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.time.LocalDateTime;
import java.util.UUID;
import static org.springframework.http.HttpStatus.OK;

@Service
public class CriarTokenSenhaService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private Environment env;

    @Autowired
    private MessageSource messages;

    @Autowired
    private PasswordResetTokenRepository passwordResetTokenRepository;

    private static final LocalDateTime EXPIRACAO = LocalDateTime.now().plusMinutes(30);

    @Transactional
    public ResponseEntity<Object> criar(String emailUsuario) throws MessagingException {
        Usuario usuario = usuarioRepository.findByEmail(emailUsuario);
        System.out.println(emailUsuario);
        try{
            String token = UUID.randomUUID().toString();

            String htmlBody = "<html><head><style>"
                    + "body { font-family: Arial, sans-serif; }"
                    + "h2 { color: black; }"
                    + "</style></head>"
                    + "<body><h1>Redefinição de senha</h1>" +
                    "<a href=\"http://localhost:3000/usuarios/alterar-senha/" + usuario.getId() + "/" + token + "\">" +
                    "Clique aqui para redefinir a sua senha!</a></body></html>";

            PasswordResetToken myToken = new PasswordResetToken();
            myToken.setToken(token);
            myToken.setUsuario(usuario);
            myToken.setDataExpiracao(EXPIRACAO);
            passwordResetTokenRepository.save(myToken);

            enviarEmail(usuario.getEmail(), "Alterar senha", htmlBody);
        }catch (Exception e) {
            return new ResponseEntity<>(OK);
        }
        return new ResponseEntity<>(OK);
    }

    public void enviarEmail(String toEmail, String assunto, String body) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
        helper.setFrom("testetestandolabcrescer@gmail.com");
        helper.setTo(toEmail);
        helper.setSubject(assunto);
        helper.setText(body, true);
        mailSender.send(message);
    }
}
