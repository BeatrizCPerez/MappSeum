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
 font-family: Montserrat, sans-serif;
  margin-top: 3vw;
  border: 1px solid #B19470;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 5px 5px 5px 0px lightgray;
  height: 30vw;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 10px; 
  position: relative;


  &::before {
    content: '';
    position: absolute;
    top: 5%;
    left: 5%;
    width: 100%;
    height: 100%;
    background: url('src/assets/Cuadro.png') center/contain no-repeat;
    z-index: -1;
    border-radius: 50px;
    opacity: 0.8;
    height: 108%;
    width: 160%;
    margin-left: -60%;
    margin-top: -5%;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
    height: 50vw;
  }
`;

const StyledCardMobile = styled(StyledCard)`
  @media screen and (max-width: 768px) {
    .texto {
      font-size: 8px;
    }
  }
`;

const StyledBotonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -20%;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: -9%;
    margin-left: -22%;
  }
`;

const Card = ({ data }) => {
  const { id, imageUrl, title, author,material, year, location } = data;

  return (
    <StyledCardMobile key={id}>
      <img
        src={imageUrl}
        className="img-obra"
        alt={title}
        style={{ height: '75%', width: '33%', marginLeft: '8%', marginTop: "8%", borderRadius: '5%' }}
      />
      <h2 className="texto" style={{ fontSize: '22px', marginBottom: '25%', marginTop: '-50%', textDecoration: 'underline'}}>Obra: {title}</h2>
      <h2 className="texto2" style={{ fontSize: '20px', marginBottom: '27%', marginTop: '-23%', fontWeight: '400'}}>AUTOR: {author}</h2>
      <h2  style={{ fontSize: '20px', marginBottom: '27%', marginTop: '-25%', marginLeft: '50%', fontWeight: '400'}}>Año: {year}</h2>
      <h2  style={{ fontSize: '20px', marginBottom: '27%', marginTop: '-25%', marginLeft: '50%', fontWeight: '400'}}>Material: {material}</h2>
      <h2  style={{ fontSize: '20px', marginBottom: '27%', marginTop: '-25%', marginLeft: '50%', fontWeight: '400'}}>Localización: {location}</h2>
      <StyledBotonContainer>
        <Button variant="delete" onClick={() => deleteSculptures(id)}/> 
        <Link to="/edit-sculpture">
          <Button variant="modify"/>
        </Link>
      </StyledBotonContainer>
    </StyledCardMobile>
  );
};

export default Card;
