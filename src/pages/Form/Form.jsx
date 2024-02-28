import './Form.css'
import { useForm } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom'
import { createSculptures, editSculptures, getSculptureById } from '../../services/sculptures-services';

const Form = ({ method }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  if (method === "put") {

    const sculptureId = useParams().id;

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

  }

  return (
    <>
      <h1 className="form-title">{method === "post" ? "AÑADE UNA NUEVA OBRA" : "EDITAR OBRA"}</h1>
      <form onSubmit={handleSubmit(data => {if(method==="put"){editSculptures(sculptureId, data).then(() => navigate("/"))}else if(method==="post"){createSculptures(data).then(()=>navigate("/"))}})} className="container-form">
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
          <button type="submit" className="button" style={{ backgroundColor: "#43766C" }}>{method === "post" ? "Añadir" : "Actualizar"}</button>
          <button onClick={() => navigate("/")} className="button" style={{ backgroundColor: "#43766C" }}>Cancelar</button>
        </div>

      </form>
    </>
  )
};

export default Form