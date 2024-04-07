import React, { useState, useEffect } from "react";
import styled from "styled-components"

const Container = styled.div`
  width: 1000px;
  height: 800px;
  background-image: linear-gradient(to right, lightblue, lightgreen);  
  border: 3px solid gray;
  border-radius: 20px 0px 0px 20px;
`;

const Header = styled.div`
  width: 100%;
  height: 14%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const Main = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const TimeBox = styled.div`
  width: 15%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  border: 3px solid gray;
  background-color: white;
  box-sizing: border-box;
`;

const Footer = styled.div`
  width: 100%;
  height: 16%;
  box-sizing: border-box;
`;

const Calander = () => {

  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [second, setSecond] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      setHour(currentDate.getHours());
      setMinute(currentDate.getMinutes());
      setSecond(currentDate.getSeconds());
    }, 1000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <Container>
      <Header>
        <h1>Now Time</h1>
      </Header>
      <Main>
        <TimeBox style={{borderRadius:"20px 0px 0px 20px"}}><h1>{hour}</h1></TimeBox>
        <TimeBox><h1>{minute}</h1></TimeBox>
        <TimeBox style={{borderRadius:"0px 20px 20px 0px"}}><h1>{second}</h1></TimeBox>
      </Main>
      <Footer />
    </Container>
  );
}

export default Calander;