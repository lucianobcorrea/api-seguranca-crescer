package br.com.cwi.api.security.service;

import br.com.cwi.api.security.controller.request.UsuarioRequest;
import br.com.cwi.api.security.controller.response.UsuarioResponse;
import br.com.cwi.api.security.domain.Permissao;
import br.com.cwi.api.security.domain.Usuario;
import br.com.cwi.api.security.repository.UsuarioRepository;
import br.com.cwi.api.security.validator.ExtensaoFotoValidator;
import br.com.cwi.api.security.validator.TamanhoTelefoneValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static br.com.cwi.api.security.mapper.UsuarioMapper.toEntity;
import static br.com.cwi.api.security.mapper.UsuarioMapper.toResponse;
import static java.time.LocalDateTime.now;

@Service
public class IncluirUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TamanhoTelefoneValidator tamanhoTelefoneValidator;

    @Autowired
    private ExtensaoFotoValidator extensaoFotoValidator;

    @Transactional
    public UsuarioResponse incluir(UsuarioRequest request) {
        tamanhoTelefoneValidator.validar(request.getTelefone());
        extensaoFotoValidator.validar(request.getFoto().split("\\."));

        Usuario usuario = toEntity(request);

        usuario.setSenha(passwordEncoder.encode(request.getSenha()));
        usuario.setAtivo(true);
        usuario.setCriadoEm(now());

        usuario.adicionarPermissao(Permissao.builder().nome("USUARIO").build());

        usuarioRepository.save(usuario);

        return toResponse(usuario);
    }
}
