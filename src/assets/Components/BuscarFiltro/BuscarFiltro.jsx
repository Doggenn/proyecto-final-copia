// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './BuscarFiltro.css';

const BuscarFiltro = ({ onFilterChange }) => {
    const [filtro, setFiltro] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setFiltro(value);
        onFilterChange(value.toLowerCase()); // Pasamos la entrada al componente padre
    };

    return (
        <div className='buscador'>
            <div className='conta-buscar-f d-flex justify-content-betwee'>
                <input type='text' className='conta-buscar_ul' placeholder='Buscar' value={filtro} onChange={handleInputChange} />
                <img src="images/Icons/icons-pink/buscarpink@3x.png" alt="" />
            </div>

            <div className='icono-filt'>
                <img className='icono-filtro' src="images/Icons/icons-pink/filtros@3x.png" alt="" />
            </div>
        </div>
    );
};

export default BuscarFiltro;
