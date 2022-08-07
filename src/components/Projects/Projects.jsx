import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./projects.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projectOne");

  return (
    <div className="projects" id="proyectos">
      <div className="container">
        <h2>Nuestros Proyectos</h2>
        <p>Conoce los proyectos de innovación más populares y recién salidos del mercado relevados al público <span className="blue">por tiempo limitado</span>. Realiza las inversiones del futuro por medio de la minería de criptomonedas y obtén rendimientos desde <span className="blue">10% E.A</span></p>
        <hr />
        <div className="tabs-container">
          <button
            className={activeTab === "projectOne" ? "btn" : "btn outline"}
            onClick={() => setActiveTab("projectOne")}
          >
            Project BTC-ETH
          </button>
          <button
            className={activeTab === "projectTwo" ? "btn" : "btn outline"}
            onClick={() => setActiveTab("projectTwo")}
          >
            Project Minado
          </button>

          <button
            className={activeTab === "projectThree" ? "btn" : "btn outline"}
            onClick={() => setActiveTab("projectThree")}
          >
            Proyecto Migrado
          </button>
        </div>
        {activeTab === "projectOne" && (
          <div id="projectOne" className="projects-container">
            <ProjectCard
              heading="Proyecto BTC-ETH"
              description="Proyecto de inversiones en criptomonedas para comprar bienes raíces"
              regulator="Super financiera"
              time="15 meses"
              profit="17% E.A"
              users="233"
              img="https://cdn.pixabay.com/photo/2019/12/09/06/20/web-4682708_960_720.jpg"
            />
          </div>
        )}

        {activeTab === "projectTwo" && (
          <div id="projectTwo" className="projects-container">
            <ProjectCard
              heading="Proyecto Minado"
              description="Proyecto de minado de criptomonedad para iniciar una nueva granja"
              regulator="Super Intendencia"
              time="18 meses"
              profit="19% E.A"
              users="357"
              img="https://cdn.pixabay.com/photo/2019/12/09/06/20/web-4682708_960_720.jpg"
            />
          </div>
        )}

        {activeTab === "projectThree" && (
          <div id="projectThree" className="projects-container">
            <ProjectCard
              heading="Proyecto Binario"
              description="Proyecto de inversión en computadoras cuánticas que procesan datos binarios"
              regulator="Ministerio TIC"
              time="12 meses"
              profit="12% E.A"
              users="173"
              img="https://cdn.pixabay.com/photo/2019/12/09/06/20/web-4682708_960_720.jpg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects