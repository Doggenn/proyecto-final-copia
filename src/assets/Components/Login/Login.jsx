// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import './Login.css'; 
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

const handleIniciarSesionClick = () => {
    // señores click del botón de Usuario
    console.log('Botón de iniciar sesión clickeado');
    };
    
    const handleCrearCuentaClick = () => {
    // señores click del botón de Usuario
    console.log('Botón de Crear Cuenta clickeado');
  };

const handleOlvidoContraseñaClick = () => {
    // señores click del botón de Usuario
    console.log('Botón de Olvido Contraseña clickeado');
  };

    return (
    <div className='totalBorder'>
        <div className='total'>
            <div className='titulo-im'>

                    <img src="images\Inicio\group29@2x.png" alt="logo" width={50} />
                    <img src="images\Inicio\group@2x.png" alt="icono" width={60} />
                 <div className='lasP'>
                  <p>¡Hola! para continuar,inicia sesión <br />o crea una cuenta</p>
                 </div>
                <div className='form-1'>

                    <form className='formulario'>
                        <div className='correo'>
                            <input className='input_L' type="text" placeholder='aei@gmail.com' />
                        </div>
                        
                        <br />
                        
                        <div className="password">
                            <input
                                className="input_L"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="*********"
                            />
                            <button type="button" onClick={togglePasswordVisibility} className="password-toggle-btn">
                                    <div className="icon-container">
                                        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                    </div> 

                            </button>
                            </div>
                        <div>
                            <Link to="/">
                            <p onClick={handleOlvidoContraseñaClick}>¿Has olvidado tu contraseña?</p>
                            </Link>
                        </div>  
                    </form>

                    <div className='botones'>
                        <button onClick={handleIniciarSesionClick} className="btn btn-primary">Inicia sesión</button>
                        <button onClick={handleCrearCuentaClick} className="btn btn-outline-primary">Crear cuenta</button>
                    </div>
                    
                </div>
            </div>
        </div>
     </div>
    )
}