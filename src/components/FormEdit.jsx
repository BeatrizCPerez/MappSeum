import React from 'react'
import './Form.css'
import { useForm } from 'react-hook-form'
import { Navigate, Link, useParams } from 'react-router-dom'

// FUNCIONES
import { editSculptures, getSculptureById } from '../services/sculptures-services';

const FormEdit = () => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const sculptureId = useParams().id

  const getOneSculpture = async () => {
    const sculpture = await getSculptureById(sculptureId);
    setValue("title", sculpture.title)
    setValue("author", sculpture.author)
    setValue("year", sculpture.year)
    setValue("material", sculpture.material)
    setValue("location", sculpture.location)
    setValue("imageUrl", sculpture.imageUrl)
  }

  getOneSculpture();



  const [goToHome, setGoToHome] = React.useState(false);

  if (goToHome) {
    return <Navigate to="/" />
  }

  
  return (
    <>

      <form onSubmit={handleSubmit(editedSculpture => { editSculptures(sculptureId, editedSculpture).then(()=>setGoToHome(true))})} className="container-form">
      <label>Obra:
          <input {...register("title", { required: "El campo obra esta vacio" })} type="text" placeholder='Escribe el nombre de la obra' />
          {errors.title && <div className="text-error">{errors.title.message}</div>}
        </label>

        <label>Autor:
          <input {...register("author", { required: "campo requerido" })} type="text" placeholder="Escribe el nombre de Autor" />
          {errors.year && <div className="text-error">{errors.year.message}</div>}
        </label>

        <label>Año:
          <input {...register("year", { required: "campo requerido", pattern: { value: /^[0-9]+$/, message: "Sólo es válido formato númerico" } })} type="text" placeholder="Escribe el año de creación" />
          {errors.year && <div className="text-error">{errors.year.message}</div>}
        </label>

        <label>Material:
          <input {...register("material", { required: "campo requerido" })} type="text" placeholder="Escribe el tipo de material" />
          {errors.year && <div className="text-error">{errors.year.message}</div>}
        </label>

        <label>Ubicación:
          <input {...register("location", { required: "campo requerido" })} type="text" placeholder="Escribe la ubicación" />
          {errors.year && <div className="text-error">{errors.year.message}</div>}
        </label>

        <label>Imagen de la Escultura:
          <input {...register("imageUrl", { required: "Hace falta un link", pattern: { value: /^(ftp|http|https):\/\/[^ "]+$/, message: "Sólo es válido formato http" } })} placeholder="Escribe el link de tu imagen" type="link" />
          {errors.imageUrl && <div className="text-error">{errors.imageUrl.message}</div>}
          {/* <input className="img-file" type="file" name="imagen" accept="image/*"/> */}
        </label>

        <div className="buttons-container">
          <button type="submit" className="button" style={{ backgroundColor: "#43766C"}}>Guardar</button>
          <Link to="/">
            <button type="submit" className="button" style={{ backgroundColor: "#43766C"}}>Cancelar</button>
          </Link>
        </div>

      </form>
    </>
  )
};

export default FormEdit