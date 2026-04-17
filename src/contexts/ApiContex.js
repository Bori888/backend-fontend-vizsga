import { createContext, useState, useEffect } from 'react'; 
import { axiosInstance } from './AxiosInstance';

export const ApiContext = createContext(); 

export const ApiProvider = ({children}) => {
    const [temaLista, setTemaLista] = useState([]);

    const getAdat = async() => {
        try {
            const response = await axiosInstance.get("/temas");
            setTemaLista(response.data);
        } catch (error) {
            console.error("Hiba az adatok lekérésekor:", error.response?.status, error.message);
        }
    };

    const ujAdat = async(adat) => {
        try {
            await axiosInstance.post("/temas", adat);
            getAdat();
        } catch (error) {
            console.error("Hiba a mentéskor:", error.response?.status, error.message);
        }
    };

    const torolAdat = async(id) => {
        try {
            await axiosInstance.delete(`/temas/${id}`);
            getAdat();
        } catch (error) {
            console.error("Hiba a törléskor:", error.response?.status, error.message);
        }
    };

    useEffect(() => {
        getAdat();
    }, []);

    return (
        <ApiContext.Provider value={{ temaLista, ujAdat, torolAdat }}>
            {children}
        </ApiContext.Provider>
    );
};