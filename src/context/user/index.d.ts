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

type IProductProps = {
  name: string;
};
type AuthContextData = {
  /** date user  */
  user: IUserProviderProps;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;

  /**products */
  products: IProductProps;
};

type AuthProviderProps = {
  children: ReactNode;
};

/**
 * EXPORTS
 */
export {
  IUserProviderProps,
  AuthContextData,
  AuthProviderProps,
  IProductProps,
};
