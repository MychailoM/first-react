import React from "react";  
import styled from "styled-components";

const Container = styled.div`
  background-color: lightcyan;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 20px;
`;

const StyledButton = styled.button`
  background-color: rgb(54, 113, 93);
  color: white;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 18px;

  &:hover{
  background-color: rgb(40, 66, 59);
  }
`;

function StyledBtn() {
  return (
    <Container>
      <h2>first project</h2>
      <StyledButton>click</StyledButton>
    </Container>
  )
}

export default StyledBtn;