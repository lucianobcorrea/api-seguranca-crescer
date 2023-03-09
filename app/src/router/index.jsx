import { createBrowserRouter } from 'react-router-dom';
import { HomeScreen, UserLoginScreen } from '../ui/index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLoginScreen />,
  },
  {
    path: '/home',
    element: <HomeScreen />,
  },
]);
