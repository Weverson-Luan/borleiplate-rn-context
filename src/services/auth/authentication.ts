import AxiosService from '../http/api';

const Login = async (email: string, password: string) => {
  const Instance = AxiosService.createAxiosInstance();
  const response = await Instance.post('auth/login', {
    email,
    password,
  });
  return response.data;
};

export default {
  Login,
};
