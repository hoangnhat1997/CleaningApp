import axios from 'axios';
import {API_URL} from './config';
import useStore from '../store/useStore';

export const Login = async (data: {username: string; password: string}) => {
  const res = await axios.post(`${API_URL}/auth/signin`, data);
  if (res.status !== 200) {
    throw new Error('Error during the login process');
  }
  useStore.setState({accessToken: res.data.token});
  return res.data;
};
