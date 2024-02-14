import React from 'react'
import './Form.css'
import { createSculptures } from '../services/sculptures-services'
import { useForm } from 'react-hook-form'

const Form = () => {
  const { register, handleSubmit } = useForm()

return (
  <>
  
      <form onSubmit = {handleSubmit(newSculpture => createSculptures(newSculpture))} className="container-form">
        <label>Obra:</label>
        <input {...register("title")} type="text" placeholder='Escribe el nombre de la obra' />

        <label>Autor:</label>
        <input {...register("author")} type="text" placeholder="Escribe el nombre de Autor" />

        <label>Año:</label>
        <input {...register("year")} type="text" placeholder="Escribe el año de creación" />

        <label>Material:</label>
        <input {...register("material")} type="text" placeholder="Escribe el tipo de material" />

        <label>Ubicación:</label>
        <input {...register("location")} type="text" placeholder="Escribe la ubicación" />

        <label>Imagen de la Escultura:</label>
        <input {...register("imageUrl")} placeholder="Escribe el link de tu imagen" type="link" name="imagen" accept="image/*" />
        {/* <input className="img-file" type="file" name="imagen" accept="image/*"/> */}

        <button type="submit">Guardar</button>

      </form>
    </>
)};

export default Form