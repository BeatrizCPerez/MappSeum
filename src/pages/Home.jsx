import { Link, useLoaderData } from 'react-router-dom';
import Card from "../components/Card";

const Home = () => {

  const sculptures = useLoaderData();

  return (
    <>
      <img className="circulos" src="src\assets\circulos.png" alt="cirulos" />
      <h2>Esculturas
        <span style={{ fontWeight: "lighter", textAlign: "center" }}>que Inspiran</span>
        Explorando la Belleza </h2>
      <Link to="/add-sculpture"><button className="button" style={{ backgroundColor: "#43766C", margin: '10px' }}>Agregar Escultura</button></Link>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {sculptures.map((sculpture) => (
          <Card key={sculpture.id} data={sculpture} />
        ))}
      </div>
    </>
  );
};

export default Home;
