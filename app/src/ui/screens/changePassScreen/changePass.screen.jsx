import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useChangePass } from '../../../hook/useChangePass/useChangePass.hook';
import { useIsValidToken } from '../../../hook/useIsValidToken/useIsValidToken.hook';
import { Button } from '../../components/button/button.component';
import { FormContainer } from '../../components/formContainer/formContainer.component';
import { PasswordInput } from '../../components/passwordInput/passwordInput.component';

export function ChangePassScreen() {
  const { verifyToken } = useIsValidToken();
  const { id, token } = useParams();
  const { input, handleRegisterChange, onChangePassClick } = useChangePass();

  useEffect(() => {
    verifyToken(id, token);
  }, []);

  return (
    <>
      <ToastContainer />
      <FormContainer>
        <PasswordInput
          labelText="Nova senha"
          inputName="senha"
          inputType="senha"
          forPassword="senha"
          inputValue={input.senha}
          onChange={handleRegisterChange}
        />
        <Button
          onClick={() => onChangePassClick(id, token)}
          className="button-green-style"
        >
          Alterar senha
        </Button>
      </FormContainer>
    </>
  );
}
