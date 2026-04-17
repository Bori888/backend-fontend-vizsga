import React, { useContext } from 'react';
import { ApiContext } from '../contexts/ApiContext';
import SorRecept from './SorTema';
const TablazatTema = () => {
    const {temaLista} = useContext(ApiContext);


    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ANGOL</th>
                        <th>MAGYAR</th>
                        <th>viszajelzés</th>
                    </tr>
                </thead>
                <tbody>
                    {receptLista.map((item) => (
                        <SorRecept
                            key={item.id}
                            recept={item}
                        />
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default TablazatTema;