import React from "react";
import { Link } from "react-router-dom";
import ListadoTrabajos from "../layout/ListadoTrabajos"

const inicio = () => {
  return (
    <div className="home">
      <h1>
        Hola, soy <strong>Freya Godoy</strong> Este es mi portafolio de presentacion como <strong> programadora. </strong>
      </h1>
      <h2 className="title">
        Aca subire mis proyectos como programadora si te gusto alguno
        <Link to="/contacto"> contactate conmigo. </Link>
      </h2>

      <section className="last-works">
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos como desarrollo web.</p>
        <ListadoTrabajos limite="2"/>
      </section>

    </div>
  );
};

export default inicio;
