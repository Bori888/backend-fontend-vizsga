import React, { createContext } from 'react';
import { axiosInstance } from './AxiosInstance';

export const ApiContext = createContext({ axios: axiosInstance });

export const ApiProvider = ({ children }) => {
  return (
    <ApiContext.Provider value={{ axios: axiosInstance }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
