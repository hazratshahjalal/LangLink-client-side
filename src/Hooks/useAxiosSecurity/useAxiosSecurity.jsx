import { useEffect } from 'react';
import useAuth from '../useAuth/useAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const axiosSecurity = axios.create({
  baseURL: 'https://lang-link-server-side.vercel.app/',
});

const useAxiosSecurity = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecurity.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecurity.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [axiosSecurity];
};

export default useAxiosSecurity;