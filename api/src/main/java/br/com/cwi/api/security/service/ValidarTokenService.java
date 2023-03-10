package br.com.cwi.api.security.service;

import br.com.cwi.api.security.domain.PasswordResetToken;
import br.com.cwi.api.security.repository.PasswordResetTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static java.time.LocalDateTime.now;

@Service
public class ValidarTokenService {

    @Autowired
    private PasswordResetTokenRepository passwordResetTokenRepository;

    public String validar(String token) {

        final PasswordResetToken passToken = passwordResetTokenRepository.findByToken(token);

        return !isTokenFound(passToken) ? "tokenInvalido"
                : isTokenExpired(passToken) ? "Expirado"
                : null;
    }

    private boolean isTokenFound(PasswordResetToken passToken) {
        return passToken != null;
    }

    private boolean isTokenExpired(PasswordResetToken passToken) {
        return passToken.getDataExpiracao().isBefore(now());
    }
}
