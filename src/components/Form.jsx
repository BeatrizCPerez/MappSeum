import React from 'react'
import './Form.css'
import { createSculptures } from '../services/sculptures-services'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Form = () => {
  const { register, handleSubmit, reset, formState: {errors} } = useForm()

  const [goToHome, setGoToHome] = React.useState(false);

  if (goToHome) {
    return <Navigate to="/" />
  }


return (
  <>
  
      <form onSubmit = {handleSubmit(newSculpture => {createSculptures(newSculpture); reset(); {setGoToHome(true);}})} className="container-form">
        
        <label>Obra:
        <input {...register("title", {required: "El campo obra esta vacio"})} type="text" placeholder='Escribe el nombre de la obra' />
        {errors.title && <div className="text-error">{errors.title.message}</div>}
        </label>

        <label>Autor:
        <input {...register("author", {required: true})} type="text" placeholder="Escribe el nombre de Autor" />
        </label>

        <label>Año:
        <input {...register("year", {required:"campo requerido", pattern: {value:/^[0-9]+$/, message:"Sólo es válido formato númerico"}})} type="text" placeholder="Escribe el año de creación" />
        {errors.year && <div className="text-error">{errors.year.message}</div>}
        </label>

        <label>Material:
        <input {...register("material")} type="text" placeholder="Escribe el tipo de material" />
        </label>

        <label>Ubicación:
        <input {...register("location")} type="text" placeholder="Escribe la ubicación" />
        </label>

        <label>Imagen de la Escultura:
        <input {...register("imageUrl", {required:"Hace falta un link", pattern: {value:/^(ftp|http|https):\/\/[^ "]+$/, message:"Sólo es válido formato http"}})} placeholder="Escribe el link de tu imagen" type="link"/>
        {errors.imageUrl && <div className="text-error">{errors.imageUrl.message}</div>}
        {/* <input className="img-file" type="file" name="imagen" accept="image/*"/> */}
        </label>

        <div className="buttons-container">
          <button type="submit">Guardar</button>
          <Link to="/">
          <button type="submit">Cancelar</button>
          </Link>
        </div>

      </form>
    </>
)};

export default Form