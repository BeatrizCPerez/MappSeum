import React from 'react';
import './BotonModificar.css'; // Asegúrate de tener un archivo CSS para estilos
import { Link } from 'react-router-dom';

const BotonModificar = () => {
  return (
    <a href="/edit-sculpture"><button className="boton-modificar">Modificar</button></a>
  );
}

export default BotonModificar;
