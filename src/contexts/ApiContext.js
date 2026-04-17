import React, { createContext, useState, useEffect } from 'react';
import { axiosInstance } from './AxiosInstance';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [temak, setTemak] = useState([]);
  const [szavak, setSzavak] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTemak = async () => {
    try {
      const response = await axiosInstance.get('/tema');
      const data = Array.isArray(response.data) ? response.data : (response.data || []);
      setTemak(data);
    } catch (error) {
      console.error('Hiba a témák lekérésekor:', error);
      setTemak([]);
    }
  };

  const fetchSzavakByTema = async (id) => {
    if (!id) {
      setSzavak([]);
      return;
    }
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/szavak/tema/${id}`);
      const data = Array.isArray(response.data) ? response.data : (response.data || []);
      setSzavak(data);
    } catch (error) {
      console.error('Hiba a szavak lekérésekor:', error);
      setSzavak([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemak();
  }, []);

  return (
    <ApiContext.Provider value={{ temak, szavak, loading, fetchTemak, fetchSzavakByTema }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
