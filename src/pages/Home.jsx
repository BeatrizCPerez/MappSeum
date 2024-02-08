import React, { useState, useEffect } from 'react';
import Card from "../components/Card"
import "../index.css"


const Home = () => { 


  return (
    <div className="container-center">
    <h1 className="primer-titulo">Esculturas</h1><h1 className="regular-titulo">que Inspiran</h1>
    <h1>Explorando la Belleza </h1>
    <Card/>
    <Card/>
    </div>
  )
}

export default Home