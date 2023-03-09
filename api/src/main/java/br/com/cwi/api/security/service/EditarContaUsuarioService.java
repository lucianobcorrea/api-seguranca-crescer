package br.com.cwi.api.security.service;

import br.com.cwi.api.security.controller.request.EditarContaRequest;
import br.com.cwi.api.security.domain.Usuario;
import br.com.cwi.api.security.repository.UsuarioRepository;
import br.com.cwi.api.security.validator.ExtensaoFotoValidator;
import br.com.cwi.api.security.validator.TamanhoTelefoneValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static java.time.LocalDateTime.now;

@Service
public class EditarContaUsuarioService {

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ExtensaoFotoValidator extensaoFotoValidator;

    @Autowired
    private TamanhoTelefoneValidator tamanhoTelefoneValidator;

    @Transactional
    public void editar(EditarContaRequest request) {
        tamanhoTelefoneValidator.validar(request.getTelefone());
        extensaoFotoValidator.validar(request.getFoto().split("\\."));

        Usuario usuario = usuarioAutenticadoService.get();
        usuario.setAtualizadoEm(now());
        usuario.setFoto(request.getFoto());
        usuario.setNome(request.getNome());
        usuario.setTelefone(request.getTelefone());

        usuarioRepository.save(usuario);
    }
}
