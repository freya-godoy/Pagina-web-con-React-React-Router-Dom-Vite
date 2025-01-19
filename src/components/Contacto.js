import React from "react";

const Contacto = () => {
  return (
    <div className="page">
      <h1 className="heading">Contacto:</h1>
      <form className="contact" action="mail:GatitoeEspacial@web.com">
        <input type="text" placeholder="Nombre"></input>
        <input type="text" placeholder="Apellido"></input>
        <input type="text" placeholder="Email"></input>
        <textarea placeholder="Motivo de contacto"></textarea>
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
};

export default Contacto;
