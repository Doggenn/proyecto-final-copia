import React, { useState } from 'react';
import './Buscar.css';

const Buscar = ({ onSearch }) => {
    const [busqueda, setBusqueda] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setBusqueda(value);
        onSearch(value.toLowerCase()); // Pasamos la entrada al componente padre
    };

    return (
        <div className='buscarTamano'>
            <div className='conta-buscar d-flex justify-content-between'>
                <input type='text' className='conta-buscar_ul' placeholder='Buscar' value={busqueda} onChange={handleInputChange} />
                <img src="images/Icons/icons-pink/buscarpink@3x.png" alt="" />
            </div>
        </div>
    );
};

export default Buscar;
