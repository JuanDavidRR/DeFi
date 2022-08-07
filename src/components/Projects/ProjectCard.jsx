import React from "react";

const ProjectCard = ({
  heading,
  description,
  regulator,
  time,
  profit,
  users,
  img,
}) => {
  return (
    <>
      <div className="project-info">
        <h3>{heading}</h3>
        <p>Descripción proyecto:</p>
        <p>{description}</p>
        <div className="project-secondary-info">
          <p>
            <span className="blue">Regulado por: </span> {regulator}
          </p>
          <p>
            <span className="blue">Tiempo pactado a:</span> {time}
          </p>
          <p>
            <span className="blue">Usuarios activos: </span>
            {users}
          </p>
          <p className="project-profit">{profit}</p>
          <p className="small">Conoce la ficha técnica de este proyecto junto a todos los extractos mensuales que se emiten a los inversores para que conozca el rendimiento del proyecto y la fecha en la que se repartirán todos los dividendos a los sociod</p>
          <br />
          <button className="btn">Ficha técnica</button>
        </div>
      </div>
      <div className="project-image">
        <img src={img} alt={heading} />
      </div>
    </>
  );
};

export default ProjectCard;
