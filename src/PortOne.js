import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightsalmon;
  
  button {
    width: 250px;
    height: 50px;
  }
`;

const PortOne = () => {
  return (
    <Container>
      <h1>씨발</h1>
      <button>버튼</button>
    </Container>
  );
}

export default PortOne;