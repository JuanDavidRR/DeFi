import React from "react";

const ClientsCarrousel = ({ name, ocupation, quote, photo }) => {
  return (
    <div className="client-card">
      <img src={photo} alt={name} loading='lazy' />
      <div className="client-card-body">
        <h4 className="blue">{name}</h4>
        <p>Ocupación: {ocupation}</p>
        <blockquote>
          <i>"{quote}"</i>
        </blockquote>
      </div>
    </div>
  );
};

export default ClientsCarrousel;
