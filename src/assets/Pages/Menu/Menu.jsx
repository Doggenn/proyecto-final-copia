// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Menu.css";
import { Link } from 'react-router-dom'


export default function Menu() {
    return (
        <>
            <nav className='menuEstilo'>
                <Link className='estiloNav' to="/"><img className='menuImg' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/822CEE02-3030-4F56-B83C-7A00230E7B53.png" alt="home" /></Link>
                <Link className='estiloNav' to="/mapa"><img className='menuImg' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/D21EBE42-B6B4-4803-BB48-75B12973E88D.png" alt="mapa" /></Link>
                <Link className='estiloNav' to="/mascotas"><img className='menuImg' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/943FB336-E780-4E97-AA1F-08BAA8838D0A.png" alt="mascotas" /></Link>
                <Link className='estiloNav' to="/usuario"><img className='menuImg' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/ADBEBB4B-3278-4F63-B6B6-DA381FFC095C.png" alt="perfil" /></Link>
                <Link className='estiloNav' to="/mas"><img className='menuImg' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/34F54B25-FFEC-4581-BAE3-0F812F5BF64D.png" alt="mas" /></Link>
            </nav>
        </>
    )
}