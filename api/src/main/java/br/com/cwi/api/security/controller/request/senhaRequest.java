package br.com.cwi.api.security.controller.request;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class senhaRequest {

    private Long idUsuario;
    private String token;
    private String senha;
}
