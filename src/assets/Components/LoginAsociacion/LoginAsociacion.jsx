// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function LoginAsociacion() {

    const [asociaciones, setasociaciones] = useState([])
    const urlBbdd = "https://servidor-protectora.vercel.app/api/asociacion"

    const getAsociaciones = () => {
        axios.get(urlBbdd).then(data => setasociaciones(data.data))
    }

    useEffect(() => {
        getAsociaciones()
    }, [])

    console.log(asociaciones);

    return (
        <div className="container">
            <div className="row">
                <div>
                    {asociaciones.map((aso, index) => (
                        <tr key={index}>
                            <td><h1>{aso.id}</h1></td>
                            <td><h1>{aso.nombre}</h1></td>
                            <td><h1>{aso.ubicacion}</h1></td>
                        </tr>
                    ))}
                </div>
            </div>
        </div>
    )
}
