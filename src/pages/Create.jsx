import React from 'react'

const Create = () => {
  return (
    <div>
    <h1>AÑADE UNA NUEVA OBRA</h1>
    <form>
    <label>Obra:</label>
    <input type="text" name="obra" placeholder='enter name of your sculpture'/>

    <label>Autor:</label>
    <input type="text" name="autor" placeholder="enter autor's name"/>

    <label>Año:</label>
    <input type="text" name="año" placeholder="enter the year of the sculpture"/>

    <label>Material:</label>
    <input type="text" name="material" placeholder="enter the material of the sculpture"/>

    <label>Ubicación:</label>
    <input type="text" name="ubicacion" placeholder="enter the location of the sculpture"/>

    <label>Imagen de la Escultura:</label>
    <input type="file" name="imagen" accept="image/*"/>


  </form>
  </div>
  )
}

export default Create