import React from 'react'
import './Form.css'
import { useForm } from 'react-hook-form'

const FormEdit = () => {
  return (
    <>
      <form className="container-form">
        <label>Obra:</label>
        <input type="text" name="obra" placeholder='Escribe el nombre de la obra' />

        <label>Autor:</label>
        <input type="text" name="autor" placeholder="Escribe el nombre de Autor" />

        <label>Año:</label>
        <input type="text" name="año" placeholder="Escribe el año de creación" />

        <label>Material:</label>
        <input type="text" name="material" placeholder="Escribe el tipo de material" />

        <label>Ubicación:</label>
        <input type="text" name="ubicacion" placeholder="Escribe la ubicación" />

        <label>Imagen de la Escultura:</label>
        {/* <input className="img-file" type="file" name="imagen" accept="image/*"/> */}
        <input placeholder="Escribe el link de tu imagen" type="link" name="imagen" accept="image/*" />

        <button type="submit">Guardar</button>

      </form>
    </>
  )
}

export default FormEdit