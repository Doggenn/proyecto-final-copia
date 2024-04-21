
import React, { useState } from 'react';
import './Registro.css'; 
import { Link } from 'react-router-dom';


export default function Registro() {
      // const [showRegistro, setShowRegistro] = useState(false);

  const handleUsuarioClick = () => {
    console.log('Botón de Usuario clickeado');
  };

  const handleProtectoraClick = () => {
    console.log('Botón de Asociación protectora clickeado');
  };

  const handleRegistrarseOtroMomentoClick = () => {
    console.log('Botón de Registrarse en otro momento clickeado');
  };
    return (
        <>
            <div className='background'>
                <div className='total1 col-md-4 offset-md-4'>
                    <div className='titulo-imgOne'>
                    <h4>¿Cómo quieres entrar?</h4>
                    <div className='form-1'>
                        <div>
                            <div className='botonesOne'>
                                <Link className='btn btn-info registroBoton' onClick={handleUsuarioClick} to="/login">
                                Usuario
                                </Link>
                                <Link className='btn btn-info registroBoton' onClick={handleProtectoraClick} to="/login">
                                    Asociación protectora
                                </Link>
                            </div>
                                <Link className='registroLink' onClick={handleRegistrarseOtroMomentoClick} to="/">
                                    Registrarse en otro momento
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
