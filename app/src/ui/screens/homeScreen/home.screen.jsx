import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import defaultAvatar from '../../../assets/default_avatar.jpg';
import { useEditUser } from '../../../hook/useChangeUserData/useChangeUserData.hook';
import { useGetUserData } from '../../../hook/useGetUserData/useGetUserData.hook';
import { Button, Header, Modal, TextInput } from '../../index';
import './home.style.css';

export function HomeScreen() {
  const { userData, fetchUserData } = useGetUserData();
  const [editUserModal, setEditUserModal] = useState(false);
  const { editInputs, handleEditChange, handleRegisterSubmit } = useEditUser();

  const toggleModal = () => {
    setEditUserModal(!editUserModal);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <ToastContainer />
      <Header />

      <section className="home-section">
        <div className="logged-user-data">
          <img src={userData.foto || defaultAvatar} alt={userData.nome} />
          <div className="logged-user-data-content">
            <h3>{userData.nome}</h3>
            <p>Email: {userData.email}</p>
            <p>Telefone: {userData.telefone}</p>
          </div>
          <Button onClick={toggleModal}>Editar perfil</Button>
        </div>
      </section>

      <form onSubmit={handleRegisterSubmit}>
        {editUserModal && (
          <Modal toggleModal={toggleModal}>
            <h1>Alterar dados do usuário</h1>
            <p>Preencha os campos.</p>
            <TextInput
              placeholder={userData.nome}
              labelText="Nome"
              inputName="nome"
              forId="nome"
              defaultValue={editInputs.nome}
              onChange={handleEditChange}
            />

            <TextInput
              placeholder={userData.telefone}
              labelText="Telefone"
              inputName="telefone"
              forId="telefone"
              defaultValue={editInputs.telefone}
              onChange={handleEditChange}
            />

            <TextInput
              placeholder={userData.foto}
              labelText="Foto de perfil"
              inputName="foto"
              defaultValue={editInputs.foto}
              forId="foto"
              onChange={handleEditChange}
            />

            <Button className="button-green-style">Alterar Dados</Button>
          </Modal>
        )}
      </form>
    </>
  );
}
