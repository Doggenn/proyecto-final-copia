// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import './OnBoarding.css'

export default function OnBoardingTwo() {
    return (
        <div className='row'>
            <div className='med col-12 d-flex justify-content-end align-items-start'>
                {/* <img src="public/images/Icons/cerrar@3x.png" alt="" /> */}
            </div>
            <div className='o-med contenedor-img col-12 d-flex flex-column'>
                <Link to='/boarding'></Link>
                <div className='w-med'>
                    <img src="public/images/Guide/img1.png" alt="" />
                </div>
                <div className='b-text'>
                    <h2>
                        Adopta desde tu móvil
                    </h2>
                    <h4>
                        Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos para encontrar el que mejor se adapte a ti
                    </h4>
                </div>
            </div>
        </div>
    )
}
