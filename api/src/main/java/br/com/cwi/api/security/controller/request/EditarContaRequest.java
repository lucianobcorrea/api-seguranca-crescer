package br.com.cwi.api.security.controller.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter @Setter
public class EditarContaRequest {

    @NotBlank
    private String nome;

    @NotBlank
    private String telefone;

    private String foto;
}
