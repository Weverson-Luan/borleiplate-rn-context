import React from 'react';

// context of user
import { UserContext } from '../user/user';

// typings
import { UserProps } from './types-hooks';

const useAuth = () => React.useContext(UserContext) as UserProps;

export { useAuth };
