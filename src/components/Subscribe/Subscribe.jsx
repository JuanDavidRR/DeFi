import React from 'react'
import './subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe' id="contacto">
      <div className="content">
        <h2>Haz parte de DeFi</h2>
        <p>La comunidad más grande de inversores de criptomonedas te está esperando para que hagas parte, no pierdas la oportunidad. <span className='blue'>Cerramos inscripciones pronto</span> </p>
        <form action="">
          <div className="form-container display-col">
            <input type="email" name="email" id="email" placeholder='Ingresa tu email' />
            <button className='btn'>Sign Up</button>
          </div>
          <div className="form-container">
            <input type="checkbox"/> <p>Estoy de acuerdo con recibir correos de DeFi</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Subscribe