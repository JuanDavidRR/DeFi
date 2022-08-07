import React from "react";
import "./about.css";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="about" id="nosotros">
      <div className="container">
        <h2>Nuestro revolucionario modelo</h2>
        <p>
          Trabajamos con la tecnología de más alta calidad en el mercado para
          proteger tu capital. Todos nuestros procesos están respalados con la
          tecnología blockchain
        </p>
        <div className="card-container">
          <div className="card-item">
            <AboutCard icon={<SiHiveBlockchain className="icon"/>} heading='Blockchain' text='Mediante el blockchain todas tus transacciones quedan protegidas y a tu nombre' />
          </div>
          <div className="card-item">
          <AboutCard icon={<SiStrapi className="icon"/>} heading='Blockchain' text='Mediante el blockchain todas tus transacciones quedan protegidas y a tu nombre' />
          </div>
          <div className="card-item">
          <AboutCard icon={<SiFsecure className="icon"/>} heading='Blockchain' text='Mediante el blockchain todas tus transacciones quedan protegidas y a tu nombre' />
          </div>
          <div className="card-item">
          <AboutCard icon={<VscServerProcess className="icon"/>} heading='Blockchain' text='Mediante el blockchain todas tus transacciones quedan protegidas y a tu nombre' />
          </div>
        </div>

        <a href="/" className="btn">Inicia Ahora</a>
      </div>
    </div>
  );
};

export default About;
