import React, { useState, useEffect } from 'react';
import Card from "../components/Card"
import "../index.css"
import BotonAgregar from '../components/Boton-agregar';

const Home = () => {

  return (
    <div className="container-center">
      <img className="logo-circular" src="src\assets\Logo-circular.png" alt="../" />
      <h1 className="primer-titulo">Esculturas</h1><h1 className="regular-titulo">que Inspiran</h1>
      <h1>Explorando la Belleza </h1>
      <BotonAgregar />
      <Card />
      <Card />
    </div>
  )
}

export default Home