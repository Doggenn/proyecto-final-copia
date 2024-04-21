// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './FormularioAdopcion.css'

export default function FormularioAdopcion() {

    const [page, setPage] = useState(1);

    return (
        <div className='formulario'>
            <div className="">
                <form className='form col-12' action="" method="post">
                    {page === 1 && (
                        <fieldset className='form__group'>
                            <h2>Tus datos</h2>
                            <div className="form ">
                                <p><input className='col-12' type="text" placeholder='Nombre y apellidos' /></p>
                                <p><input className='col-12' type="email" name="" id="" placeholder='Email' /></p>
                                <p><input className='col-12' type="number" name="" id="" placeholder='Teléfono' /></p>
                                <input className='col-12' type="text" placeholder='DNI' />
                            </div>
                            <h2>Dirección</h2>
                            <div className="">
                                <p><input className='col-12' type="text" placeholder='Calle, número y piso' /></p>
                                <p><input className='col-12' type="number" name="" id="" placeholder='Código postal' /></p>
                                <p><input className='col-12' type="text" placeholder='Ciudad' /></p>
                                <div>
                                    <input className='col-12' type="checkbox" name="" id="condiciones" />
                                    <label htmlFor="condiciones">Acepto los términos y condiciones de la adopcion</label>
                                </div>

                            </div>
                        </fieldset>
                    )}
                    {page === 2 && (
                        <fieldset>
                            <h2>Sobre las mascotas</h2>
                            <div className='formAnimales'>
                                <div className='formAnimales_int'>
                                    <h3>¿Tienes otros animales?</h3>
                                </div>
                                <div className='formAnimales_int'>
                                    <div className="formAnimales_int_b">
                                        <input type="radio" name="mascotas" id="siMascotas" />
                                        <label htmlFor="siMascotas">Sí</label>
                                    </div>
                                    <div className="formAnimales_int_b">
                                        <input type="radio" name="mascotas" id="noMascotas" />
                                        <label htmlFor="noMascotas">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p><input className='col-12' type="text" placeholder='¿Cuales?' /></p>
                                <p><input className='col-12' type="text" placeholder='¿Se lleva bien con otros animales?' /></p>
                            </div>
                            <p className='formPregunta'>¿Por qué has elegido adoptar?</p>
                            <input className='col-12' id="eleccion" type="text" />
                            <p className='formPregunta'>¿Conoces las necesidades del animal?</p>
                            <input className='col-12' id="eleccion" type="text" />
                            <p className='formPregunta'>¿Conoces sus gastos?</p>
                            <input className='col-12' id="eleccion" type="text" />
                            <p className='formPregunta'>¿Conoces su alimentación?</p>
                            <input className='col-12' id="eleccion" type="text" />
                        </fieldset>
                    )}
                    {page === 3 && (
                        <fieldset>
                            <p className='formPregunta'>¿Dónde vives?</p>
                            <input className='col-12' id="eleccion" type="text" placeholder='Piso, casa, chalet...' />
                            <div className='formAnimales'>
                                <div className='formAnimales_int'>
                                    <p className='formPregunta'>¿Vives de alquiler?</p>
                                </div>
                                <div className='formAnimales_int'>
                                    <div className="formAnimales_int_b">
                                        <input type="radio" name="alquiler" id="siAlquiler" />
                                        <label htmlFor="siAlquiler">Sí</label>
                                    </div>
                                    <div className="formAnimales_int_b">
                                        <input type="radio" name="alquiler" id="noAlquiler" />
                                        <label htmlFor="noAlquiler">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className='formAnimales'>
                                <div className='formAnimales_int'>
                                    <p className='formPregunta'>¿Tu casero permite animales?</p>
                                </div>
                                <div className='formAnimales_int'>
                                    <div className="formAnimales_int_b">
                                        <input type="radio" name="casero" id="siCasero" />
                                        <label htmlFor="siCasero">Sí</label>
                                    </div>
                                    <div className="formAnimales_int_b">
                                        <input type="radio" name="casero" id="noCasero" />
                                        <label htmlFor="noCasero">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className='formAnimales'>
                                <div className='formAnimales_int'>
                                    <p className='formPregunta'>¿Crees que podrías mudarte pronto?</p>
                                </div>
                                <div className='formAnimales_int'>
                                    <div className="formAnimales_int_b">
                                        <input type="radio" name="mudanza" id="siMudanza" />
                                        <label htmlFor="siMudanza">Sí</label>
                                    </div>
                                    <div className="formAnimales_int_b">
                                        <input type="radio" name="mudanza" id="noMudanza" />
                                        <label htmlFor="noMudanza">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className='formAnimales'>
                                <div className='formAnimales_int'>
                                    <p className='formPregunta'>¿Tiene jardín?</p>
                                </div>
                                <div className='formAnimales_int'>
                                    <div className="formAnimales_int_b">
                                        <input type="radio" name="casero" id="siJardin" />
                                        <label htmlFor="siJardin">Sí</label>
                                    </div>
                                    <div className="formAnimales_int_b">
                                        <input type="radio" name="casero" id="noCasero" />
                                        <label htmlFor="noCasero">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className='formAnimales'>
                                <div className='formAnimales_int'>
                                    <p className='formPregunta'>¿Vives con otras personas?</p>
                                </div>
                                <div className='formAnimales_int'>
                                    <div className="formAnimales_int_b">
                                        <input type="radio" name="personas" id="siPersonas" />
                                        <label htmlFor="siPersonas">Sí</label>
                                    </div>
                                    <div className="formAnimales_int_b">
                                        <input type="radio" name="personas" id="noPersonas" />
                                        <label htmlFor="noPersonas">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className='formAnimales'>
                                <div className='formAnimales_int'>
                                    <p className='formPregunta'>¿Están todos de acuerdo con la adopción?</p>
                                </div>
                                <div className='formAnimales_int'>
                                    <div className="formAnimales_int_b">
                                        <input type="radio" name="adopcion" id="siAdopcion" />
                                        <label htmlFor="siAdopcion">Sí</label>
                                    </div>
                                    <div className="formAnimales_int_b">
                                        <input type="radio" name="adopcion" id="noAdopcion" />
                                        <label htmlFor="noAdopcion">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className='formAnimales'>
                                <div className='formAnimales_int'>
                                    <p className='formPregunta'>¿Estás de acuerdo que visitemos tu casa?</p>
                                </div>
                                <div className='formAnimales_int'>
                                    <div className="formAnimales_int_b">
                                        <input type="radio" name="visita" id="siVisita" />
                                        <label htmlFor="siVisita">Sí</label>
                                    </div>
                                    <div className="formAnimales_int_b">
                                        <input type="radio" name="visita" id="noVisita" />
                                        <label htmlFor="noVisita">No</label>
                                    </div>
                                </div>
                            </div>

                        </fieldset>)}
                    {page > 1 && (
                        <button className="button" type="button" onClick={() => setPage(page - 1)}>Retroceder</button>
                    )}
                    {page < 3 && <button className="button" type="button" onClick={() => setPage(page + 1)}>Siguiente</button>}
                    {page === 3 && <button className="button" type="submit">Enviar</button>}

                </form>
            </div>
        </div>
    )
}
