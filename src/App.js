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

  span {
    font-family: 'continuous';
    font-size: 40px;
  }

  h3 {
    font-family: 'continuous';
  }
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
  width: 30%;
  height: 90%;
  border: 3px solid gray;
  border-radius: 0px 20px 20px 0px;
  background-color: white;
`;

const Header = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  span {
    font-family: 'continuous';
    font-size: 40px;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: nowrap;
`;

const Footer = styled.div`
  width: 100%;
  height: 15%;
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
  // const color1 = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple']
  // const color2 = ['purple', 'blue', 'lightblue', 'green', 'yellow', 'orange', 'red']

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

  const backgroundChange = () => {
    return (
      <>
      </>
    );
  }

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextLifeQuotes();
    }, 8000);

    return () => clearInterval(interval);
  }, [count])

  useEffect(() => {
    const interval = setInterval(() => {
      backgroundChange();
    }, 1000);
  }, []);

  return (
    <Container>
      <TitleArea>
        <span>{LifeQuotes[count].sentence}</span>
        <h2 style={{color:"gray"}}>{LifeQuotes[count].translate}</h2>
        <h3>{LifeQuotes[count].person}</h3>
      </TitleArea>
      <BodyArea>
        <Calander handleBackground={backgroundChange} />
        <Frame>
          <Header>
            <span>To Do List</span>
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
