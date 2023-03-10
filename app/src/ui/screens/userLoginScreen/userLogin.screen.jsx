import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useFormInputs } from '../../../hook/index';
import { useForgostPassForm } from '../../../hook/useForgotPassForm/useForgotPassForm.hook';
import { useRegisterFormInputs } from '../../../hook/useRegisterFormInputs/useRegisterFormInputs.hook';
import '../../components/button/buttonColors.style.css';
import {
  Button,
  FormContainer,
  LinkButton,
  Modal,
  PasswordInput,
  TextInput,
} from '../../index';
import './userLoginScreen.style.css';

export function UserLoginScreen() {
  const { formInputs, handleChange, handleSubmit } = useFormInputs();
  const [registerModal, setRegisterModal] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);
  const { registerInputs, handleRegisterChange, handleRegisterSubmit } =
    useRegisterFormInputs();
  const { emailInput, handleEmailChange, handleSendEmailSubmit } =
    useForgostPassForm();

  const toggleModal = () => {
    setRegisterModal(!registerModal);
  };

  const toggleModalForgotPass = () => {
    setForgotPass(!forgotPass);
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <TextInput
            placeholder="Ex.: luciano@cwi.com.br"
            labelText="Usuário"
            inputName="username"
            inputType="email"
            forId="username"
            inputValue={formInputs.username}
            onChange={handleChange}
          />
          <PasswordInput
            labelText="Senha"
            inputName="password"
            forId="password"
            forPassword="password"
            inputValue={formInputs.password}
            onChange={handleChange}
          />
          <Button>Entrar</Button>
          <LinkButton
            link="#"
            linkButtonName="Criar nova conta"
            action={toggleModal}
          />
          <LinkButton
            link="#"
            linkButtonName="Esqueceu sua senha?"
            action={toggleModalForgotPass}
          />
        </FormContainer>
      </form>

      <form onSubmit={handleRegisterSubmit}>
        {registerModal && (
          <Modal toggleModal={toggleModal}>
            <h1>Cadastre-se</h1>
            <p>É rápido e fácil.</p>

            <TextInput
              placeholder="Ex.: Beatriz"
              labelText="Nome"
              inputName="nome"
              forId="nome"
              inputValue={registerInputs.nome}
              onChange={handleRegisterChange}
            />

            <PasswordInput
              labelText="Senha"
              inputName="senha"
              forPassword="senha"
              inputValue={registerInputs.senha}
              onChange={handleRegisterChange}
            />

            <TextInput
              placeholder="Ex.: Beatriz@cwi.com.br"
              labelText="Email"
              inputName="email"
              inputType="email"
              forId="email"
              inputValue={registerInputs.email}
              onChange={handleRegisterChange}
            />

            <TextInput
              placeholder="Ex.: (51)12345-6789"
              labelText="Telefone"
              inputName="telefone"
              forId="telefone"
              inputValue={registerInputs.telefone}
              onChange={handleRegisterChange}
            />

            <TextInput
              placeholder="Cole o url de uma imagem aqui"
              labelText="Imagem de perfil"
              inputName="foto"
              forId="foto"
              inputValue={registerInputs.foto}
              onChange={handleRegisterChange}
            />

            <Button className="button-green-style">Cadastre-se</Button>
          </Modal>
        )}
      </form>

      <form onSubmit={handleSendEmailSubmit}>
        {forgotPass && (
          <Modal toggleModal={toggleModalForgotPass}>
            <h1>Recuperação de senha</h1>
            <p>Digite um email cadastrado.</p>

            <TextInput
              placeholder="Ex.: email@provedor.com"
              labelText="Email"
              inputName="email"
              inputType="email"
              forId="email"
              inputValue={emailInput.email}
              onChange={handleEmailChange}
            />

            <Button className="button-green-style">Enviar</Button>
          </Modal>
        )}
      </form>
    </>
  );
}
