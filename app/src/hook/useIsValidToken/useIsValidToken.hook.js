import { useNavigate } from 'react-router-dom';
import { isValidToken } from '../../api/token/isValidToken.api';

export function useIsValidToken() {
  const navigate = useNavigate();

  async function verifyToken(id, token) {
    try {
      await isValidToken(id, token);
    } catch (error) {
      navigate('/');
      console.log(error);
    }
  }

  return { verifyToken };
}
