interface IProcessErrorProps {
  error: any;
  screenName?: string;
  default_message?: string;
}

function processError({
  error,
  screenName,
  default_message,
}: IProcessErrorProps) {
  let title = 'Erro';
  let message = default_message || 'Erro desconhecido, contate o suporte';

  if (__DEV__) {
    console.log('--------------------------------------------------------');
    console.log(
      `ERROR ${screenName ? `on screen ${screenName}` : ''}: `,
      error
    );
    console.log('--------------------------------------------------------');
  }

  // Erros de requisição api
  if (!!error?.response?.data) {
    const errorRest = error.response.data;

    return {
      title: 'Error',
      message: Array.isArray(errorRest.message)
        ? errorRest.message[0]
        : errorRest.message,
    };
  }

  return {
    title: title,
    message: error.message || message,
  };
}

export default processError;
