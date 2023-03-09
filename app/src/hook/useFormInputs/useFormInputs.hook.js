import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../../api/auth/login.api';

export function useFormInputs() {
  const [formInputs, setFormInputs] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const loginInputs = {
    username: formInputs.username,
    password: formInputs.password,
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      if (formInputs.username === '') {
        toast.error('Usuário precisa ser preenchido');
      } else if (formInputs.password === '') {
        toast.error('Senha precisa ser preenchida');
      } else {
        await login(loginInputs);
        navigate('/home');
      }
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Verifique o seu usuário ou senha');
      }
      toast.error(error.response.data.message);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormInputs((oldFormInputs) => ({
      ...oldFormInputs,
      [name]: value,
    }));
  }

  return {
    formInputs,
    handleChange,
    handleSubmit,
  };
}
