import { useState } from "react";
import styled from "styled-components";
import Item from "./components/Item";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, lightblue, lightsalmon);
  box-sizing: border-box;
`;

const Frame = styled.div`
  width: 600px;
  height: 800px;
  border-radius: 10px;
  background-color: white;
  box-sizing: border-box;
`;

const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const Main = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: nowrap;
`;

const Footer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  width: 80%;
  height: 100%;
  font-size: 30px;
  border: none;
  background-color: lightgray;
  box-sizing: border-box;
  text-align: center;
`;

const StyledBtn = styled.button`
  width: 20%;
  height: 100%;
  font-size: 60px;
  border: none;
  background-color: salmon;
  box-sizing: border-box;
  cursor: pointer;
`;

const App = () => {
  const [item, setItem] = useState("");
  const [Todo, setTodo] = useState([]);

  const itemTextChange = (e) => {
    setItem(e.target.value);
  }

  const handleAddItem = (e) => {
    setTodo([...Todo, item]);
  };

  return (
    <Container>
      <Frame>
        <Header>
          <h1>To Do List</h1>
        </Header>
        <Main>
          {Todo.map((todo, index) => (
            <Item 
              key={index} 
              item={todo} 
            />
          ))}
        </Main>
        <Footer>
          <StyledInput onChange={itemTextChange}/>
          <StyledBtn onClick={handleAddItem}>+</StyledBtn>
        </Footer>
      </Frame>
    </Container>
  );
};

export default App;
