package br.com.cwi.api.security.validator;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

@Component
public class ExtensaoFotoValidator {

    public void validar(String[] extensao) {
        System.out.println(extensao[extensao.length-1]);
        if(!extensao[extensao.length - 1].equals("jpg") && !extensao[extensao.length - 1].equals("png") && !extensao[extensao.length - 1].equals("")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Imagem inválida, tente novamente com uma " +
                    "imagem com extensão png ou jpg");
        }
    }
}
