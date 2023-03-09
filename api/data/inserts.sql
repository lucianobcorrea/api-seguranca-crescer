insert into usuario (telefone, email, nome, senha, ativo, criado_em) values ('(51)12345-1222', 'admin@cwi.com.br', 'admin', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true, now());
insert into usuario (telefone, email, nome, senha, ativo, criado_em) values ('(51)12645-1232', 'usuario@cwi.com.br', 'usuario', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true, now());

insert into permissao (nome, usuario_id) values ('ADMIN', 1);
insert into permissao (nome, usuario_id) values ('USUARIO', 1);
insert into permissao (nome, usuario_id) values ('USUARIO', 2);
