import { createBrowserRouter } from 'react-router-dom';
import { ChangePassScreen, HomeScreen, UserLoginScreen } from '../ui/index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLoginScreen />,
  },
  {
    path: '/home',
    element: <HomeScreen />,
  },
  {
    path: '/usuarios/alterar-senha/:id/:token',
    element: <ChangePassScreen />,
  },
]);
