package br.com.cwi.api.security.controller;

import br.com.cwi.api.security.controller.request.EditarContaRequest;
import br.com.cwi.api.security.controller.request.UsuarioRequest;
import br.com.cwi.api.security.controller.request.senhaRequest;
import br.com.cwi.api.security.controller.response.UsuarioResponse;
import br.com.cwi.api.security.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.validation.ReportAsSingleViolation;
import javax.validation.Valid;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private IncluirUsuarioService incluirUsuarioService;

    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    @Autowired
    private EditarContaUsuarioService editarContaUsuarioService;

    @Autowired
    private CriarTokenSenhaService criarTokenSenhaService;

    @Autowired
    private AlterarSenhaService alterarSenhaService;

    @Autowired
    private SalvarSenhaService salvarSenhaService;

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

    @PostMapping("/resetar-senha")
    @ResponseStatus(NO_CONTENT)
    public void resetarSenha(@RequestParam("email") String emailUsuario) throws MessagingException {
        criarTokenSenhaService.criar(emailUsuario);
    }

    @GetMapping("/alterar-senha/{id}/{token}")
    @ResponseStatus(NO_CONTENT)
    public void alterarSenha(@PathVariable String token) {
        alterarSenhaService.alterar(token);
    }

    @PutMapping("/salvar-senha")
    @ResponseStatus(OK)
    public void salvarSenha(@Valid @RequestBody senhaRequest request) {
        salvarSenhaService.salvar(request);
    }
}
