/**
 * IMPORTS
 */
import React, { ReactNode } from 'react';

type IUserProviderProps = {
  name: string;
  email: string;
  password: string;
  access_token?: string;
  token?: string;
};

type IAuthContextData = {
  /** date user  */
  user: IUserProviderProps;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

type IAuthProviderProps = {
  children: ReactNode;
};

/**
 * EXPORTS
 */
export { IUserProviderProps, IAuthContextData, IAuthProviderProps };
