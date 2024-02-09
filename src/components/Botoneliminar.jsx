// BotonEliminar.js
import React from 'react';
import './BotonEliminar.css'; // Asegúrate de tener un archivo CSS para estilos

const BotonEliminar = ({ onClick, style, texto, className }) => {
  return (
    <button className={`boton-eliminar ${className || ''}`} onClick={onClick} style={style}>
      {texto || 'Eliminar'}
    </button>
  );
}

export default BotonEliminar;
