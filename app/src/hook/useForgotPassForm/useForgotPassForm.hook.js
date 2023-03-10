import { useState } from 'react';
import { toast } from 'react-toastify';
import { sendEmail } from '../../api/auth/sendEmail.api';

export function useForgostPassForm() {
  const [emailInput, setEmailInput] = useState({ email: '' });

  async function handleSendEmailSubmit(event) {
    event.preventDefault();

    try {
      if (emailInput.email === '') {
        toast.error('Email precisa ser preenchido');
        console.log(emailInput.email);
      } else {
        await sendEmail(emailInput);
        setTimeout(() => {
          window.location.reload(true);
        }, 1500);
        toast.success('Verifique o seu email cadastrado!');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function handleEmailChange(event) {
    const { name, value } = event.target;

    setEmailInput((oldFormInputs) => ({
      ...oldFormInputs,
      [name]: value,
    }));
  }

  return {
    emailInput,
    handleEmailChange,
    handleSendEmailSubmit,
  };
}
