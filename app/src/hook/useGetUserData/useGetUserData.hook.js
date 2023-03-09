import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../../api/users/getUserData.api';

export function useGetUserData() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  async function fetchUserData() {
    try {
      const response = await getUserData();
      setUserData(response);
    } catch (error) {
      navigate('/');
      console.log(error);
    }
  }

  return { userData, fetchUserData };
}
