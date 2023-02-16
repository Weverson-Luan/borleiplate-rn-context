import React from 'react';

// context of user
import { UserContext } from '../../user/user';

// typings
import { IUserProps } from './types-hooks';

const useAuth = () => React.useContext(UserContext) as IUserProps;

export { useAuth };
