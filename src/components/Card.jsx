import React from "react";
import styled from "styled-components";

// Utilizar un nombre diferente para la constante que define el estilo
const StyledCard = styled.div`
  margin-top: 5vw;
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


const Card = () => {
  return <StyledCard><img src="src\assets\margo.png" alt="" /><h1 className="texto">Obra: David</h1><h1 className="texto2">Autor: Miguel Angel</h1></StyledCard>;
};

export default Card; 
