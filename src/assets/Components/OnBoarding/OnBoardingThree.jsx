// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import './OnBoarding.css'

export default function OnBoardingThree() {
    return (
        <div className='row'>
            <div className='med col-12 d-flex justify-content-end align-items-start'>
                {/* <img src="public/images/Icons/cerrar@3x.png" alt="" /> */}
            </div>
            <div className='o-med contenedor-img col-12 d-flex flex-column'>
                <Link to='/boarding'></Link>
                <div className='w-med'>
                    <img src="public/images/Guide/img3.png" alt="" />
                </div>
                <div className='b-text b-text-ul'>
                    <h2>Si eres una asociación
                        sube a tus peludos para
                        darles más difusión
                    </h2>
                </div>
            </div>
        </div>
    )
}
