import React, { createContext, useEffect, useState } from 'react';
import { IAuthContextData, IAuthProviderProps, IProductProps } from './index.d';

const ProductContext = createContext({} as IAuthContextData);

const ProductProvider = ({ children }: IAuthProviderProps) => {
  const [products, setProducts] = useState<IProductProps>({} as IProductProps);

  useEffect(() => {
    const response = {
      products: [
        { name: 'Pizza', quantity: 1, value: '1' },
        { name: 'Habumguer', quantity: 1, value: '1' },
      ],
    };

    setProducts({ product: response.products });
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
