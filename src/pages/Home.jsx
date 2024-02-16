/* import { useState, useEffect } from 'react'; */
/* import axios from 'axios'; */
import { Link, useLoaderData } from 'react-router-dom';
import "./Home.css"
import Card from "../components/Card";

const Home = () => {

  const sculptures = useLoaderData();

  /* const [sculptures, setSculptures] = useState([]);

  useEffect(() => {
    // Función para realizar la petición a la API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/sculptures');
        setSculptures(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    };
    

    // Llamada a la función para realizar la petición cuando el componente se monta
    fetchData();
  }, []); // El segundo argumento del useEffect ([]) indica que la llamada solo se realiza una vez al montar el componente
 */

  return (
    <div className="container-center">
      <img className="logo-circular" src="src\assets\Logo-circular.png" alt="../" />
      <h2 className="primer-titulo">Esculturas</h2>
      <h2 className="regular-titulo">que Inspiran</h2>
      <h2>Explorando la Belleza </h2>
      <Link to="/add-sculpture"><button className="boton-agregar">Agregar Escultura</button></Link>
      
      {/* Renderizar las tarjetas con los datos de la API */}
      {sculptures.map((sculpture) => (
        <Card key={sculpture.id} data={sculpture} />
      ))}
    </div>
  );
};

export default Home;
