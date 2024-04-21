import React, { useEffect, useState } from 'react'
import './Novedades.css'
import axios from 'axios';
import CarouselNovedades from './CarouselNovedades';

export default function Novedades() {

    const [novedades, setNovedades] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const urlBbdd = "https://servidor-protectora.vercel.app/api/novedades"
    const url = "https://servidor-protectora.vercel.app/api/usuario"


    const getNovedades = async () => {
        const res = await axios.get(urlBbdd)
        console.log(res.data);
        setNovedades(res.data)
    }

    const getUsuarios = async () => {
        const res = await axios.get(url)
        console.log(res.data);
        setUsuarios(res.data)
    }
    useEffect(() => {
        getNovedades(),
            getUsuarios()
    }, [])

    return (
        <>
            <div className="container-fluid-div">
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">

                        <div className='contenedor-novedades center '>
                            <div className='d-flex col-md-4 offset-md-4' style={{ color: '#00748E', marginTop: '20px' }}>
                                <h1>¡Hola Celia!</h1>
                            </div>
                            <CarouselNovedades />
                            <div className='titl  d-flex'>
                                <h3>Novedades</h3>
                            </div>
                            {novedades.map((novedad, index) => (
                                <div className='carta-novedades ' key={index}>
                                    <div className='img-novedades'>
                                        <img src={novedad.imagen} alt="novedades" />
                                    </div>
                                    <div className='text-novedades'>
                                        <h2>{novedad.titulo}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div> 






        </>
    )
}
