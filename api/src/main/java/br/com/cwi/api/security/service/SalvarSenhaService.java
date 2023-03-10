package br.com.cwi.api.security.service;

import br.com.cwi.api.security.controller.request.senhaRequest;
import br.com.cwi.api.security.domain.PasswordResetToken;
import br.com.cwi.api.security.domain.Usuario;
import br.com.cwi.api.security.repository.PasswordResetTokenRepository;
import br.com.cwi.api.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;

import static java.time.LocalDateTime.now;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class SalvarSenhaService {

    @Autowired
    private ValidarTokenService validarTokenService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private PasswordResetTokenRepository passwordResetTokenRepository;

    @Transactional
    public void salvar(senhaRequest request) {
        String resultado = validarTokenService.validar(request.getToken());
        if(resultado != null) {
            throw new ResponseStatusException(BAD_REQUEST, "Token inválido ou expirado, tente novamente");
        }else{
            Usuario usuario = usuarioRepository.findById(request.getIdUsuario()).get();
            usuario.setSenha(passwordEncoder.encode(request.getSenha()));
            usuario.setAtualizadoEm(now());
            usuarioRepository.save(usuario);
            PasswordResetToken myToken = new PasswordResetToken();
            myToken.setToken(request.getToken());
            myToken.setUsuario(usuario);
            myToken.setDataExpiracao(now());
            passwordResetTokenRepository.save(myToken);
        }
    }
}
