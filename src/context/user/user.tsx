import React, { createContext, useState } from 'react';
import {
  IUserProviderProps,
  IAuthContextData,
  IAuthProviderProps,
} from './index.d';

const UserContext = createContext({} as IAuthContextData);

const UserProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUserProviderProps>({
    name: 'Weverson',
  } as IUserProviderProps);

  const signIn = async () => {};

  const signOut = async () => {};

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
