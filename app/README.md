# TCC de Java

## Front End

- Executar: `npm install` para baixar todas as dependências
- Após baixar todas as dependências, executar `npm start`

### Dependências utilizadas

- `toastify` para criação de toastr personalizados
- `axios` para realizar se comunicar com `api`
- `react router` para criação de rotas personalizadas
- `create global state` para salvar os dados do usuário no LocalStorage

## Problema de Cors

- Para resolver o problema de `cors`, no arquivo `package.json` foi adicionado o atributo `proxy` apontando para a url da `api`
- E ao realizar as requests, foi utilizado o próprio `localhost 3000`
