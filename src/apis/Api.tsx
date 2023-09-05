import axios from 'axios';
import {API_URL} from './config';
import useStore from '../store/useStore';
import {StoreApi, UseBoundStore} from 'zustand';
import createContext from 'zustand/context';

export const Login = async (data: {username: string; password: string}) => {
  const res = await axios.post(`${API_URL}/auth/signin`, data);
  if (res.status !== 200) {
    throw new Error('Error during the login process');
  }
  useStore.setState({accessToken: res.data.token});
  return res.data;
};

export const getTasks = async () => {
  const token = useStore.getState().accessToken;

  console.log('home ', token);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const res = await axios.get(`${API_URL}/tasks`, config);
  // if (res.status != 200) {
  //   throw new Error('Error during the login process');
  // }
  return res.data;
};
