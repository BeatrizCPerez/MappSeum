import React from 'react'
import './Form.css'
import { createSculptures } from '../services/sculptures-services'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'

const Form = () => {
  const { register, handleSubmit, reset, formState: {errors} } = useForm()

  const [goToHome, setGoToHome] = React.useState(false);

  if (goToHome) {
    return <Navigate to="/" />
  }

return (
  <>
  
      <form onSubmit = {handleSubmit(newSculpture => {createSculptures(newSculpture); reset(); {setGoToHome(true);}})} className="container-form">
        <label>Obra:</label>
        <input {...register("title", {required: "El campo obra esta vacio"})} type="text" placeholder='Escribe el nombre de la obra' />
        {errors.title && <div className="text-error">{errors.title.message}</div>}

        <label>Autor:</label>
        <input {...register("author", {required: true})} type="text" placeholder="Escribe el nombre de Autor" />

        <label>Año:</label>
        <input {...register("year", {required:"campo requerido", pattern: {value:/^[0-9]+$/, message:"Sólo es válido formato númerico"}})} type="text" placeholder="Escribe el año de creación" />
        {errors.year && <div className="text-error">{errors.year.message}</div>}

        <label>Material:</label>
        <input {...register("material")} type="text" placeholder="Escribe el tipo de material" />

        <label>Ubicación:</label>
        <input {...register("location")} type="text" placeholder="Escribe la ubicación" />

        <label>Imagen de la Escultura:</label>
        <input {...register("imageUrl", {required:"Hace falta un link", pattern: {value:/^(ftp|http|https):\/\/[^ "]+$/, message:"Sólo es válido formato http"}})} placeholder="Escribe el link de tu imagen" type="link"/>
        {errors.imageUrl && <div className="text-error">{errors.imageUrl.message}</div>}
        {/* <input className="img-file" type="file" name="imagen" accept="image/*"/> */}

        <button type="submit">Guardar</button>

      </form>
    </>
)};

export default Form