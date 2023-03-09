import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editUser } from '../../api/users/editUser.api';
import { useGetUserData } from '../useGetUserData/useGetUserData.hook';

export function useEditUser() {
  const { userData, fetchUserData } = useGetUserData();
  useEffect(() => {
    fetchUserData();
  }, []);

  const [editInputs, setEditInputs] = useState({});

  useEffect(() => {
    setEditInputs({
      nome: userData.nome,
      telefone: userData.telefone,
      foto: userData.foto,
    });
  }, [userData]);

  async function handleRegisterSubmit(event) {
    event.preventDefault();

    try {
      if (editInputs.nome === '') {
        toast.error('Nome deve ser preenchido');
      } else if (editInputs.telefone === '') {
        toast.error('Telefone deve ser preenchido');
      } else {
        await editUser(editInputs);
        setTimeout(() => {
          window.location.reload(true);
        }, 1500);
        toast.success('Usuário editado com sucesso');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function handleEditChange(event) {
    const { name, value } = event.target;

    setEditInputs((oldRegisterInputs) => ({
      ...oldRegisterInputs,
      [name]: value,
    }));
  }

  return {
    editInputs,
    handleEditChange,
    handleRegisterSubmit,
  };
}
