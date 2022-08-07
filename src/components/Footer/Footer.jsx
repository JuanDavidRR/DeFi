import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="col">
                <h4>Proyectos</h4>
                <p><a href="#proyectos">Blockchain</a></p>
                <p><a href="#proyectos">Minería de datos</a></p>
                <p><a href="#proyectos">Operacioens binarias</a></p>
            </div>
            <div className="col">
                <h4>Comunidad</h4>
                <p><a href="#proyectos">Twitter</a></p>
                <p><a href="#proyectos">Telegram</a></p>
                <p><a href="#proyectos">Discord</a></p>
            </div>
            <div className="col">
                <h4>Contacto</h4>
                <p>contacto@defi.com</p>
                <p>+53 434-345-3566</p>
                <p>@defiinversiones</p>
            </div>
        </div>
    </div>
  )
}

export default Footer