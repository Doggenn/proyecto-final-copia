import { Link } from 'react-router-dom';
import './Usuario.css'

export default function Usuario() {
    return (
        <>
            
            <div className="container-fluid-div">
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <div className='usuario-p '>
                            <div className='perfil-img a-img col-12 d-flex align-items-center justify-content-center'>
                                <img src="public/images/foto-perfil/fotodeperfil@3x.png" alt="" />
                            </div>
                            <div className='contenedor-p col-12 '>
                                <div className='contenedor col-12 d-flex justify-content-between'>
                                    <div className='c-h d-flex align-items-center'>
                                        <img src="public/images/foto-perfil/chica@3x.png" alt="" />
                                        <h4>Mi Perfil</h4>
                                    </div>
                                    <div className=' i-arrow d-flex align-items-center'>
                                        <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                                    </div>
                                </div>
                                <Link to="/usuario"></Link>
                                <div className=' contenedor col-12 d-flex justify-content-between'>
                                    <div className='c-h d-flex align-items-center'>
                                        <img src="public/images/Icons/icons-blue/localization@3x.png" alt="" />
                                        <h4>Direcciones</h4>
                                    </div>
                                    <div className='i-arrow d-flex align-items-center'>
                                        <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                                    </div>
                                </div>
                                <div className='contenedor col-12 d-flex justify-content-between'>
                                    <div className='c-h d-flex align-items-center'>
                                        <img src="public/images/Icons/icons-blue/favoritosCopyblue@3x.png" alt="" />
                                        <h4>Favoritos</h4>
                                    </div>
                                    <div className='i-arrow d-flex align-items-center'>
                                        <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                                    </div>
                                </div>
                                <div className='contenedor contenedor-ull col-12 d-flex justify-content-between'>
                                    <div className='c-h d-flex align-items-center'>
                                        <img src="public/images/Icons/icons-blue/notificacionesblue@3x.png" alt="" />
                                        <h4>Notificaciones</h4>
                                    </div>
                                    <div className='i-arrow d-flex align-items-center'>
                                        <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                                    </div>
                                </div>
                                <div className='contenedor col-12 d-flex justify-content-between'>
                                    <div className='c-h d-flex align-items-center'>
                                        <img src="public/images/Icons/icons-blue/mascota@3x.png" alt="" />
                                        <h4>Estado de la adopción</h4>
                                    </div>
                                    <div className='i-arrow d-flex align-items-center'>
                                        <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                                    </div>
                                </div>
                                <div className=' contenedor col-12 d-flex justify-content-between'>
                                    <div className='c-h d-flex align-items-center'>
                                        <img src="public/images/Icons/icons-blue/apadrina@3x.png" alt="" />
                                        <h4>Apadrinar</h4>
                                    </div>
                                    <div className='i-arrow d-flex align-items-center'>
                                        <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                                    </div>
                                </div>
                                <div className='contenedor col-12 d-flex justify-content-between'>
                                    <div className='c-h d-flex align-items-center'>
                                        <img src="public/images/Icons/icons-blue/donar@3x.png" alt="" />
                                        <h4>Donar</h4>
                                    </div>
                                    <div className='i-arrow d-flex align-items-center'>
                                        <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            
            





        </>    )
}
