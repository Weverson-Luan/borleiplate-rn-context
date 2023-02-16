/**
 * IMPORTS
 */
import React, { ReactNode } from 'react';

type IProductProps = {
  product: {
    name: string;
    value: string;
    quantity: number;
  }[];
};

type IAuthContextData = {
  /**products */
  products: IProductProps;
};

type IAuthProviderProps = {
  children: ReactNode;
};

/**
 * EXPORTS
 */
export {
  IUserProviderProps,
  IAuthContextData,
  IAuthProviderProps,
  IProductProps,
};
