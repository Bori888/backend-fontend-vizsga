import React, { useEffect, useState, useContext } from 'react';
import ApiContext from '../contexts/ApiContext';

const TablazatTema = () => {
  const { temak, szavak, loading, fetchSzavakByTema } = useContext(ApiContext);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (temak && temak.length && !selected) {
      setSelected(temak[0].id);
      fetchSzavakByTema(temak[0].id);
    }
  }, [temak]);

  useEffect(() => {
    if (selected) fetchSzavakByTema(selected);
  }, [selected]);

  return (
    <div>
      <div className="tema-select">
        <select className="tema-select-element" value={selected} onChange={e => setSelected(e.target.value)}>
          <option value="">Válassz témát!</option>
          {temak.map(t => (
            <option key={t.id} value={t.id}>{t.temanev}</option>
          ))}
        </select>
      </div>

      <div className="word-table" role="table">
        <div className="word-row header">
          <div className="angol">ANGOL</div>
          <div className="magyar">MAGYAR</div>
          <div className="feedback">visszajelzés</div>
        </div>

        {loading && <div className="word-row empty"><div style={{ gridColumn: '1 / -1', padding: '12px 14px' }}>Betöltés...</div></div>}

        {!loading && szavak.length === 0 && (
          <div className="word-row empty">
            <div style={{ gridColumn: '1 / -1', padding: '12px 14px', color: '#666' }}>Nincs megjeleníthető szó. Válassz témát.</div>
          </div>
        )}

        {!loading && szavak.map(s => (
          <div className="word-row" key={s.id}>
            <div className="angol">{s.angol}</div>
            <div className="magyar"><input defaultValue={s.magyar || ''} /></div>
            <div className="feedback">
              <span className="ok">✔</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TablazatTema;
