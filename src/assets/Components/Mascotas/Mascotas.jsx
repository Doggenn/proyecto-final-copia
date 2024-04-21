// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Mascotas.css';
import Buscar from '../Buscar/Buscar';
import { Link } from 'react-router-dom';
import MisMascotas from '../MisMascotas/MisMascotas';

export default function Mascotas() {
    const [mascotas, setMascotas] = useState([]);
    const [mascotasFiltradas, setMascotasFiltradas] = useState([]);
    const urlBbdd = "https://servidor-protectora.vercel.app/api/mascotas";

    const getMascotas = async () => {
        const res = await axios.get(urlBbdd);
        setMascotas(res.data);
        setMascotasFiltradas(res.data);
    };

    const handleSearch = (busqueda) => {
        const mascotasFiltradas = mascotas.filter(mascota =>
            mascota.nombre.toLowerCase().includes(busqueda.toLowerCase())
        );
        setMascotasFiltradas(mascotasFiltradas);
    };

    useEffect(() => {
        getMascotas();
    }, []);

    return (
        <div className='container col-md-4 offset-md-4'>
            <Buscar onSearch={handleSearch} />
            <MisMascotas />
            <Link to={"/estados"}>
                <div className='b-border col-12 d-flex justify-content-between align-items-center'>
                    <div className='b-border-text'>
                        <h3>Estado de la adopcion</h3>
                    </div>
                    <div className='a-rrow'>
                        <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                    </div>
                </div>
            </Link>
            <div className='cards'>
                <div className='c-max d-flex justify-content-between align-items-center'>
                    <h2>Animales en adopción</h2>
                    <img src="public/images/Icons/icons-pink/filtros@3x.png" alt="" />
                </div>
                <div className='carta'>
                    {mascotasFiltradas.map((mascota, index) =>
                        <Link key={index} to={`/mascotas/${mascota.id}`}>
                            <div className='card-animal' >
                                <div className='image-container' >
                                    <img className='mascotasLike' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/A33187F6-3639-4EE6-BCF2-DC4989BFE3EA.png" alt="Favorito" />
                                    <img className='t-max img-fluid mascotasImg' src={mascota.imagen} alt={mascota.nombre} />
                                </div>
                                <div className='text-span d-flex justify-content-between align-items-center'>
                                    <h2 className='text-mas'> {mascota.nombre}</h2>
                                    <span>{mascota.ubicacion}</span>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
