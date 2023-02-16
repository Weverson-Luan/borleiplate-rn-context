/**
 * IMPORTS
 */

type IUserProps = {
  user: {
    name: string;
    email: string;
    password: string;
    access_token?: string;
    token?: string;
  };
};

/**
 * EXPORTS
 */
export { IUserProps };
