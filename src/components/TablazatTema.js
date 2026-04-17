import React, { useEffect, useState, useContext } from 'react';
import SorTema from './SorTema';
import ApiContext from '../contexts/ApiContext';

const TablazatTema = () => {
  const { axios } = useContext(ApiContext);
  const [temak, setTemak] = useState([]);

  useEffect(() => {
    axios.get('/tema')
      .then(res => setTemak(res.data))
      .catch(err => console.error(err));
  }, [axios]);

  return (
    <div className="tablazat-container">
      {temak.map(t => (
        <SorTema key={t.id} tema={t} />
      ))}
    </div>
  );
};

export default TablazatTema;
