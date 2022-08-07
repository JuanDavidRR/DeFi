import React, { useState } from 'react'
import './Navbar.css'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [active, setActive] = useState(false)
    const handleClick = () =>{
        setActive(!active)
    }
  return (
    <div className='navbar'>
        <div className="container">
            <h1 className='navbar-title'>
                <a href="#inicio">Defi</a>
            </h1>
            <ul className={active ? "nav-wrap-items active" : "nav-wrap-items"}>
                <li className="nav-item">
                    <a href="#inicio">Inicio</a>
                </li>
                <li className="nav-item">
                    <a href="#nosotros">Nosotros</a>
                </li>
                <li className="nav-item">
                    <a href="#proyectos">Proyectos</a>
                </li>
                <li className="nav-item">
                    <a href="#clientes">Usuarios</a>
                </li>
                <li className="nav-item">
                    <a className='btn' href="#contacto">Unirme</a>
                </li>
            </ul>
            <div onClick={handleClick} className="hamburger">
                {active 
                ? <AiOutlineClose className="icon"/>
                : <AiOutlineMenu className='icon'/>}
                
            </div>
        </div>
    </div>
  )
}

export default Navbar