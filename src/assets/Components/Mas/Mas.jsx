// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import './Mas.css'
import Buscar from '../Buscar/Buscar'

export default function Mas() {
    return (
        <div className='container contenedor-p contenedor-p-ul col-12 d-flex flex-column'>
            <Buscar className="buscador_mapa"></Buscar>
            <Link to='/mas'></Link>
            <div className='contenedor col-12 d-flex justify-content-between'>
                <div className='c-h d-flex align-items-center'>
                    <img src="public/images/Icons/icons-blue/protectora@3x.png" alt="" />
                    <h4>Asociaciones protectoras</h4>
                </div>
                <div className='i-arrow d-flex align-items-center'>
                    <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                </div>
            </div>
            <div className='contenedor col-12 d-flex justify-content-between'>
                <div className='c-h d-flex align-items-center'>
                    <img src="public/images/Icons/icons-blue/eventos@3x.png" alt="" />
                    <h4>Eventos</h4>
                </div>
                <div className='i-arrow d-flex align-items-center'>
                    <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                </div>
            </div>

            <div className='contenedor col-12 d-flex justify-content-between'>
                <div className='c-h d-flex align-items-center'>
                    <img src="public/images/Icons/icons-blue/blogCopy@3x.png" alt="" />
                    <h4>Curiosidades</h4>
                </div>
                <div className='i-arrow d-flex align-items-center'>
                    <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                </div>
            </div>
            <div className='contenedor col-12 d-flex justify-content-between'>
                <div className='c-h d-flex align-items-center'>
                    <img src="public/images/Icons/icons-blue/ayuda@3x.png" alt="" />
                    <h4>Ayuda</h4>
                </div>
                <div className='i-arrow d-flex align-items-center'>
                    <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                </div>
            </div>
            <div className='contenedor col-12 d-flex justify-content-between'>
                <div className='c-h d-flex align-items-center'>
                    <img src="public/images/Icons/icons-blue/configuay@3x.png" alt="" />
                    <h4>Configuración</h4>
                </div>
                <div className='i-arrow d-flex align-items-center'>
                    <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                </div>
            </div>
            <div className='contenedor contenedor-ul col-12 d-flex justify-content-between'>
                <div className='c-h d-flex align-items-center'>
                    <img src="public/images/Icons/icons-blue/salir@3x.png" alt="" />
                    <h4>Cerrar sesión</h4>
                </div>
                <div className='i-arrow d-flex align-items-center'>
                    <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                </div>

            </div>
        </div>
    )
}

