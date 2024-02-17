/* import { useState, useEffect } from 'react'; */
/* import axios from 'axios'; */
import { Link, useLoaderData } from 'react-router-dom';
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
    <>
      <img style={{position: "absolute", marginLeft: "50%", width: "80px"}} src="src\assets\Logo-circular.png" alt="../" />
      <h2 style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "20px" }}>Esculturas
        <span style={{ fontWeight: "lighter", textAlign: "center" }}>que Inspiran</span>
        Explorando la Belleza </h2>
      <Link to="/add-sculpture"><button className="button" style={{ backgroundColor: "#43766C", marginBottom: "20px" }}>Agregar Escultura</button></Link>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {/* Renderizar las tarjetas con los datos de la API */}
        {sculptures.map((sculpture) => (
          <Card key={sculpture.id} data={sculpture} />
        ))}
      </div>
    </>
  );
};

export default Home;
