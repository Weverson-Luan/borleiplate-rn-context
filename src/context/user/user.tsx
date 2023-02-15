import React, { createContext, useState } from 'react';
import {
  IUserProviderProps,
  AuthContextData,
  AuthProviderProps,
  IProductProps,
} from './index.d';

const UserContext = createContext({} as AuthContextData);

const UserProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IUserProviderProps>({
    name: 'Weverson',
  } as IUserProviderProps);

  const [products, setProducts] = useState<IProductProps>({} as IProductProps);

  const [loading, setLoading] = useState(false);

  const signIn = async () => {};

  const signOut = async () => {};

  return (
    <UserContext.Provider value={{ user, loading, signIn, signOut, products }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
