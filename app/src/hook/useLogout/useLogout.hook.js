import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/auth/logout.api';

export function useLogout() {
  const navigate = useNavigate();

  async function handleLogout() {
    logout();
    navigate('/');
  }

  return { handleLogout };
}
