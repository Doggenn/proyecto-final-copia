import React from 'react'
import './Filtros.css'

export default function Filtros() {
    return (
        <div className='container'>
            <div className='display col-12 d-flex justify-content-end'>
                <h2>Filtros</h2>
                <img src="public/images/Icons/cerrar@3x.png" alt="" />
            </div>
            <div className='c-sele col-8 d-flex flex-column'>
                <h4>Ciudad</h4>
                <select>
                    <option value="madrid">Madrid </option>
                    <option value="barcelona">Barcelona </option>
                    <option value="malaga">Malaga </option>
                    <option value="valencia">Valencia </option>
                </select>
            </div>
            <div className='c-sele col-12 d-flex flex-column'>
                <h4>Especie</h4>
                <div className='col-12 d-flex flex-wrap'>
                    <div className='indiv col-3'>
                        <div className='indiv-b'>
                            <img src="public/images/Icons/icons-blue/perro.png" alt="" />
                        </div>
                        <p>Perro</p>
                    </div>
                    <div className='indiv col-3'>
                        <div className='indiv-b'>
                            <img src="public/images/Icons/icons-blue/gato.png" alt="" />
                        </div>
                        <p>Gato</p>
                    </div>
                    <div className='indiv col-3'>
                        <div className='indiv-b'>
                            <img src="public/images/Icons/icons-blue/conejo.png" alt="" />
                        </div>
                        <p>Conejo</p>
                    </div>
                    <div className='indiv col-3'>
                        <div className='indiv-b'>
                            <img src="public/images/Icons/icons-blue/roedor.png" alt="" />
                        </div>
                        <p>Cobaya</p>
                    </div>
                    <div className='indiv col-3'>
                        <div className='indiv-b'>
                            <img src="public/images/Icons/icons-blue/insecto.png" alt="" />
                        </div>
                        <p>Pequeño mamífero</p>
                    </div>
                    <div className='indiv col-3'>
                        <div className='indiv-b'>
                            <img src="public/images/Icons/icons-blue/group6@3x.png" alt="" />
                        </div>
                        <p>Hurón</p>
                    </div>
                    <div className='indiv col-3'>
                        <div className='indiv-b'>
                            <img src="public/images/Icons/icons-blue/pez.png" alt="" />
                        </div>
                        <p>Pez</p>
                    </div>
                    <div className='indiv col-3'>
                        <div className='indiv-b'>
                            <img src="public/images/Icons/icons-blue/serpiente.png" alt="" />
                        </div>
                        <p>Reptíl</p>
                    </div>
                    <div className='indiv col-3'>
                        <div className='indiv-b'>
                            <img src="public/images/Icons/icons-blue/anfibio.png" alt="" />
                        </div>
                        <p>Anfibio</p>
                    </div>
                    <div className='indiv col-3'>
                        <div className='indiv-b'>
                            <img src="public/images/Icons/icons-blue/araña.png" alt="" />
                        </div>
                        <p>Aránido o Insecto</p>
                    </div>
                    <div className='indiv col-3'>
                        <div className='indiv-b'>
                            <img src="public/images/Icons/icons-blue/ave.png" alt="" />
                        </div>
                        <p>Ave</p>
                    </div>

                </div>
            </div>
            {/* <div className='c-sele col-12'>
                <h2>Tipo de Ave</h2>
                <select >
                    <option value="agaporni">Agaporni</option>
                    <option value="gorrion">Gorrión</option>
                    <option value="canario">Canario</option>
                    <option value="loro">Loro</option>
                </select>
            </div> */}
            <div className='c-sele col-12'>
                <h2>Edad</h2>
                <select className='col-8 d-flex'>
                    <option value="joven">Joven</option>
                    <option value="adulto">Adulto</option>
                    <option value="mayor">Mayor</option>
                </select>
            </div>
            <div className='c-sele'>
                <h2>Sexo</h2>
                <img src="public/images/Icons/icons-blue/female@3x.png" alt="" />
                <img src="public/images/Icons/icons-blue/male@3x.png" alt="" />
            </div>
            <div className='c-sele'>
                <h2>Tamaño</h2>
                <div className='indiv col-3'>
                    <img src="public/images/Icons/icons-blue/group@3x.png" alt="" />
                    <h5>Pequeño</h5>
                </div>
                <div className='indiv col-3'>
                    <img src="public/images/Icons/icons-blue/group@3x.png" alt="" />
                    <h5>Mediano</h5>
                </div>
                <div className='indiv col-3'>
                    <img src="public/images/Icons/icons-blue/group@3x.png" alt="" />
                    <h5>Grande</h5>
                </div>
            </div>
            <button>Aplicar</button>
        </div>
    )
}
