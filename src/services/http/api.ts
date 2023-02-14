import Axios, { AxiosRequestConfig } from 'axios';

const createAxiosInstance = () => {
  let config: AxiosRequestConfig = {
    baseURL: 'localhost:3333/users',
    timeout: 10000,
  };
  const instance = Axios.create(config);

  instance.interceptors.request.use((value: AxiosRequestConfig | any) => {
    const user: any = { access_token: '' };
    if (user.access_token) {
      value.headers = { Authorization: 'Bearer ' + user.access_token };
    }
    return value;
  });

  instance.interceptors.response.use(
    (value: any) => {
      if (value.data?.errors && value.data?.errors.length) {
        throw {
          message: value.data?.errors[0],
        };
      } else {
        return value;
      }
    },
    async (error: any) => {
      if (error?.message === 'Network Error') {
        throw new Error(
          'Sem conexão com a internet, tente novamente mais tarde'
        );
      }
      if (error.code === 'ECONNABORTED') {
        throw {
          message:
            'Nosso servidor demorou muito tempo para responder, tente novamente mais tarde',
        };
      }
      if (error?.response?.status === 401) {
        //get new token method

        console.log('Not authorized');
      }
      if (error?.response?.status === 403) {
        throw new Error(error?.response?.data?.message);
      }

      if (error?.response?.status === 400) {
        throw new Error(error?.response?.data?.message);
      }
      if (error?.response?.data?.errors?.length) {
        throw {
          message: error.response.data.errors[0],
        };
      }
      return error;
    }
  );

  return instance;
};

export default {
  createAxiosInstance,
};
