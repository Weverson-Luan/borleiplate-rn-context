/**
 * IMPORTS
 */

type UserProps = {
  user: {
    name: string;
    email: string;
    password: string;
    access_token?: string;
    token?: string;
  };
  products: {
    name: string;
  };
};

/**
 * EXPORTS
 */
export { UserProps };
