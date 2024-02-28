import './Form.css'
import { createSculptures } from '../services/sculptures-services'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate();
  return (
    <>

      <form onSubmit={handleSubmit(newSculpture => { createSculptures(newSculpture).then(()=>navigate("/"))})} className="container-form">

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
        </label>

        <div className="buttons-container">
          <button type="submit" className="button" style={{ backgroundColor: "#43766C"}}>Guardar</button>
          <button onClick={() => navigate("/")} className="button" style={{ backgroundColor: "#43766C"}}>Cancelar</button>
        </div>

      </form>
    </>
  )
};

export default Form