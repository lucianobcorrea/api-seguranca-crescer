import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register } from '../../api/auth/registerUser.api';

export function useRegisterFormInputs() {
  const [registerInputs, setRegisterInputs] = useState({
    nome: '',
    email: '',
    senha: '',
    telefone: '',
    foto: '',
  });

  async function handleRegisterSubmit(event) {
    event.preventDefault();

    try {
      if (registerInputs.nome === '') {
        toast.error('Nome deve ser preenchido');
      } else if (registerInputs.senha === '') {
        toast.error('Senha deve ser preenchida');
      } else if (registerInputs.email === '') {
        toast.error('Email deve ser preenchido');
      } else if (registerInputs.telefone === '') {
        toast.error('Telefone deve ser preenchido');
      } else {
        await register(registerInputs);
        setTimeout(() => {
          window.location.reload(true);
        }, 1500);
        toast.success('Cadastro realizado com sucesso');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function handleRegisterChange(event) {
    const { name, value } = event.target;

    setRegisterInputs((oldRegisterInputs) => ({
      ...oldRegisterInputs,
      [name]: value,
    }));
  }

  return {
    registerInputs,
    handleRegisterChange,
    handleRegisterSubmit,
  };
}
