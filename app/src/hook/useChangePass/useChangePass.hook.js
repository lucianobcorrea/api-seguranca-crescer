import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { changePass } from '../../api/auth/changePass.api';

export function useChangePass() {
  const [input, setInput] = useState({ senha: '' });
  const navigate = useNavigate();

  async function onChangePassClick(idUsuario, token) {
    try {
      if (input.senha === '') {
        toast.error('Senha deve ser preenchida');
      } else {
        await changePass(idUsuario, token, input.senha);
        setTimeout(() => {
          navigate('/');
        }, 1500);
        toast.success('Senha alterada com sucesso');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function handleRegisterChange(event) {
    const { name, value } = event.target;

    setInput((oldRegisterInputs) => ({
      ...oldRegisterInputs,
      [name]: value,
    }));
  }

  return {
    input,
    handleRegisterChange,
    onChangePassClick,
  };
}
