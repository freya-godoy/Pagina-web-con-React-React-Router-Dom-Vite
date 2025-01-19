import React from "react";
import { trabajos } from "../data/trabajos";
import { Link } from "react-router-dom";

const portafolio = ({limite}) => {
  return (
    <section className="works">
      {trabajos.slice(0,2).map((trabajo) => {
        return (
          <article key={trabajo.id} className="work-item">
            <div className="mask">
              <img
                src={
                  process.env.PUBLIC_URL + "/images/image" + trabajo.id + ".png"
                }
              />
            </div>
            <span>{trabajo.categoria}</span>
            <h2>
              <Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link>
            </h2>
            <h3>{trabajo.tecnologias}</h3>
          </article>
        );
      })}
    </section>
  );
};

export default portafolio;
