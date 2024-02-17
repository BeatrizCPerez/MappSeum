// Card.js
import React from "react";
import styled from "styled-components";
import { deleteSculptures } from "../services/sculptures-services";
import { Link } from "react-router-dom";

const Button = ({ onClick, text, variant }) => {
  return (
    <button className={`button`} onClick={onClick} style={{backgroundColor: variant === "delete" ? '#500707': 'black'}}>
      {variant === "delete" ? "Eliminar" : variant === "modify" ? "Modificar" : text}
    </button>
  );
}

const StyledCard = styled.div`
  display: flex;
  border: 1px solid #B19470;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0px lightgray;  
  padding: 10px;
  margin: 10px;
  gap: 10px;
  width: 80vw;
  box-sizing: content-box;
  max-width: 550px;
  @media screen and (max-width: 768px) {
    width: 420px;
  }
  @media screen and (max-width: 480px) {
    gap: 5px;
    max-width: 320px;
  }
`

const Image = styled.img`
  min-width: 260px;
  height: 320px;
  object-fit: cover;
  border-radius: 10px;
  margin: 0;

  @media screen and (max-width: 768px) {
    min-width: 200px;
    height: 250px;
  }

  @media screen and (max-width: 480px) {
    min-width: 160px;
    height: 220px;
  }
`

const MoreDetails = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Card = ({ data }) => {
  const { id, imageUrl, title, author,material, year, location } = data;

  return (
    <StyledCard key={id}>

        <Image src={imageUrl} alt={title}/>
{/*     <img src={'src/assets/Cuadro.png'} className="sculpture-frame"></img> */}

      
      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%"}}>
        <section style={{padding: "10px"}}>
          <h3>{title}</h3>
          <h4>Autor: {author}</h4>          
        <MoreDetails>
          <p>Año: {year}</p>
          <p>Material: {material}</p>
          <p>Localización: {location}</p>
        </MoreDetails>
        </section>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", margin: "10px", gap: "5px"}}>
          <Link to="/edit-sculpture">
            <Button variant="modify"/>
          </Link>
          <Button variant="delete" onClick={() => deleteSculptures(id)}/> 
        </div>
      </div>

    </StyledCard>
  );
};

export default Card;
