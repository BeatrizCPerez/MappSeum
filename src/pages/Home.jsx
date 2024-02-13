/* import { useState, useEffect } from 'react'; */
import Card from "../components/Card";
import BotonAgregar from '../components/Boton-agregar';
/* import axios from 'axios'; */
import { useLoaderData } from 'react-router-dom';



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
      <h1 className="primer-titulo">Esculturas</h1>
      <h1 className="regular-titulo">que Inspiran</h1>
      <h1>Explorando la Belleza </h1>
      <BotonAgregar />
      
      {/* Renderizar las tarjetas con los datos de la API */}
      {sculptures.map((sculpture) => (
        <Card key={sculpture.id} data={sculpture} />
      ))}
    </div>
  );
};

export default Home;
