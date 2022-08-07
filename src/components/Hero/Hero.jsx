import React from "react";
import HeroVideo from "../../assets/video.mp4";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero" id="inicio">
      <video autoPlay muted id="video" loop>
        <source src={HeroVideo} type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>
          <span className="blue">Protocolo</span> descentralizado de trading
        </h1>
        <p>
          Ingresos liquidos garantizados demostrables por miles de clientes
          alrededor del mundo
        </p>
        <div className="btn-group">
          <a href="#contacto" className="btn">Empieza YA</a>
          <a href="#nosotros" className="btn outline">¿Cómo lo hacemos?</a>
          <a href="#clientes" className="btn outline">Clientes felices</a>
        </div>
      </div>
      <div className="bottom-text">
        <hr />
        <h2>Dinero generado: $34,245,345,432 COP</h2>
      </div>
    </div>
  );
};

export default Hero;
