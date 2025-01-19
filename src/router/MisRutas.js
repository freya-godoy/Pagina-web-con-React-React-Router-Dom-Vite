import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Inicio from "../components/Inicio";
import Servicios from "../components/Servicios";
import Portafolio from "../components/Portafolio";
import Curriculum from "../components/Curriculum";
import Contacto from "../components/Contacto";
import HeaderNav from "../layout/HeaderNav";
import Footer from "../layout/Footer";
import Proyecto from "../layout/Proyecto";

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* Header y Navegacion */}
      <HeaderNav />
      {/* Contenido central */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/proyecto/:id" element={<Proyecto />} />
          <Route
            path="*"
            element={
              <div className="page">
                <h1 className="heading">Error 404</h1>
              </div>
            }
          />
        </Routes>
      </section>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
};
