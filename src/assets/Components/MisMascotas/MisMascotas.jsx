// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './MisMascotas.css';
import { Link } from 'react-router-dom';

export default function MisMascotas() {
    const [mascotas, setMascotas] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const urlBbdd = "https://servidor-protectora.vercel.app/api/mascotas";

    const getMascotas = async () => {
        const res = await axios.get(urlBbdd);
        setMascotas(res.data);
    };

    useEffect(() => {
        getMascotas();
    }, []);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className='c-masc'>
            <h2>Mis mascotas</h2>
            <p>Accede al perfil de tus mascotas</p>
            <div className='misMascotas2'>
                {mascotas.map((mascota, index) => (
                    <Link to={`/mascotas/${mascota.id}`}
                        key={index}
                        onClick={() => handleClick(index)}
                        className='content-mascotas'
                        
                    >
                        <div>
                            <img src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/7B4D144C-5CB3-47D5-A0C7-52D112F2BB67.png" alt="mascota" />
                        </div>
                        <p>{mascota.nombre}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
