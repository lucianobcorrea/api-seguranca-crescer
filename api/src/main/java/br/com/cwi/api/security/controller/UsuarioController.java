package br.com.cwi.api.security.controller;

import br.com.cwi.api.security.controller.request.EditarContaRequest;
import br.com.cwi.api.security.controller.request.UsuarioRequest;
import br.com.cwi.api.security.controller.response.UsuarioResponse;
import br.com.cwi.api.security.service.BuscarUsuarioService;
import br.com.cwi.api.security.service.EditarContaUsuarioService;
import br.com.cwi.api.security.service.IncluirUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private IncluirUsuarioService incluirUsuarioService;

    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    @Autowired
    private EditarContaUsuarioService editarContaUsuarioService;

    @PostMapping
    @ResponseStatus(OK)
    public UsuarioResponse incluir(@Valid @RequestBody UsuarioRequest request) {
        return incluirUsuarioService.incluir(request);
    }

    @GetMapping("/me")
    @ResponseStatus(OK)
    public UsuarioResponse buscar() {
        return buscarUsuarioService.buscar();
    }

    @PutMapping("/me/editar-conta")
    @ResponseStatus(NO_CONTENT)
    public void editarConta(@Valid @RequestBody EditarContaRequest request) {
        editarContaUsuarioService.editar(request);
    }
}
