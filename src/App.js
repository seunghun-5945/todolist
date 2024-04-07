import { useEffect, useState } from "react";
import styled from "styled-components";
import Item from "./components/Item";
import Calander from "./components/Calander";
import LifeQuotes from "./json/LifeQuotes.json"

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

const TitleArea = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BodyArea = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Frame = styled.div`
  width: 600px;
  height: 800px;
  border: 3px solid gray;
  border-radius: 0px 20px 20px 0px;
  background-color: white;
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
  border-top: 3px solid gray;
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
  border-radius: 0px 0px 15px 0px;
  box-sizing: border-box;
  cursor: pointer;
`;

const App = () => {

  const maxTodo = 6;
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);
  const [count, setCount] = useState(0);

  const itemTextChange = (e) => {
    setItem(e.target.value);
  }

  const handleAddItem = (e) => {
    if (todo.length < maxTodo) {
      setTodo([...todo, item]);
      console.log(count)
    }
    else {
      setTodo([...todo]);
    }
  };

  const handleDeleteItem = (todoId) => {
      const newTodo = [...todo];
      newTodo.splice(todoId, 1);
      setTodo(newTodo);
  };

  const nextLifeQuotes = () => {
    if (count < LifeQuotes.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextLifeQuotes();
    }, 8000);

    return () => clearInterval(interval);
  }, [count])

  return (
    <Container>
      <TitleArea>
        <h1>{LifeQuotes[count].sentence}</h1>
        <h2>{LifeQuotes[count].translate}</h2>
        <h3>{LifeQuotes[count].person}</h3>
      </TitleArea>
      <BodyArea>
        <Calander />
        <Frame>
          <Header>
            <h1>To Do List</h1>
          </Header>
          <Main>
            {todo.map((todo, todoId) => (
              <Item 
                key={todoId} 
                item={todo} 
                index={todoId}
                onDelete={handleDeleteItem}
              />
            ))}
          </Main>
          <Footer>
            <StyledInput onChange={itemTextChange}/>
            <StyledBtn onClick={handleAddItem}>+</StyledBtn>
          </Footer>
        </Frame>
      </BodyArea>

    </Container>
  );
};

export default App;
