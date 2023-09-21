import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../Pages/Authentication/useAuth/useAuth';


const useAxiosSecure = () => {
  const { logoutUser } = useAuth(); 
  const navigate = useNavigate(); 

  // base url
  const axiosSecure = axios.create({
  baseURL: 'https://ars-restaurant-db.vercel.app', 
});

  // interceptors from axios
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403 )) {
          await logoutUser();
          navigate('/login');
          // return
        }
        return Promise.reject(error);
      }
    );
  }, [logoutUser, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;