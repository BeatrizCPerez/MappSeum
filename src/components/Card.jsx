// Card.js
import React from "react";
import styled from "styled-components";
import BotonEliminar from "./BotonEliminar";

const StyledCard = styled.div`
  margin-top: 3vw;
  border: 1px solid #B19470;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 5px 5px 5px 0px lightgray;
  height: 30vw;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: right;
`;

const StyledBotonEliminar = styled(BotonEliminar)`
  &:hover {
    background-color: green;
  }
`;

const Card = () => {
  return (
    <StyledCard>
      <img src="src\assets\margo.png" className="img-obra" alt="" />
      <h1 className="texto">Obra: David</h1>
      <h1 className="texto2">Autor: Miguel Angel</h1>
      <BotonEliminar />
      <a href="/edit-sculpture">
        <StyledBotonEliminar
          style={{
            backgroundColor: 'black',
            color: 'white',
            border: '2px solid white',
            borderRadius: '20px',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            width: '20%',
            marginLeft: '50%',
            marginTop: '3%',
          }}
          texto="Modificar"
        />
      </a>
    </StyledCard>
  );
};

export default Card;
