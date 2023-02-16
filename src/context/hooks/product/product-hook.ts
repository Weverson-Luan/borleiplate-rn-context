import React from 'react';

// context of product
import { ProductContext } from '../../product/product';

// typings
import { IProductProps } from './types-hooks';

const useProduct = () =>
  React.useContext(ProductContext) as unknown as IProductProps;

export { useProduct };
