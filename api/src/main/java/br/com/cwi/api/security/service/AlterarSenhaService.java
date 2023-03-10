package br.com.cwi.api.security.service;

import br.com.cwi.api.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class AlterarSenhaService {

    @Autowired
    private ValidarTokenService validarTokenService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional
    public void alterar(String token) {
        String resultado = validarTokenService.validar(token);
        if(resultado != null ) {
            throw new ResponseStatusException(BAD_REQUEST, "Token inválido ou expirado, tente novamente");
        }
    }
}
