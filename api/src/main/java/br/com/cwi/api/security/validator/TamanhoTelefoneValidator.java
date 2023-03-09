package br.com.cwi.api.security.validator;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

@Component
public class TamanhoTelefoneValidator {

    public void validar(String telefone) {

        if(telefone.length() < 11) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Digite o número de telefone " +
                    "completo, incluindo o DDD, por exemplo: 51");
        }

        if(telefone.length() > 14) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O número de telefone pode ter no " +
                    "máximo 14 caracteres, incluindo parenteses e traço, por exemplo: (51)12345-6789");
        }
    }
}
