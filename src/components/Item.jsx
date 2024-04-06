import React from "react";
import styled from "styled-components";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const ItemFrame = styled.div`
  width: 90%;
  height: 80px;
  display: flex;
  border: 1px solid black;
  margin-top: 10px;
  background-color: white;
`;

const TextArea = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  background-color: white;
`;

const BtnArea = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  background-color: white;
`;

const StyledRadio = styled.input`
  width: 10%;
  height: 50%;
  background-color: green;
`;

const IconStyle = {
  width: "30px",
  height: "30px",
  cursor: "pointer"
}

const Item = ( {item} ) => {

  const onDelete = () => {
    return (
      console.log("삭제됨")
    );
  }

  return (
    <ItemFrame>
      <TextArea><StyledRadio type="checkBox"/><h1>{item}</h1></TextArea>
      <BtnArea><MdModeEdit style={IconStyle}/><MdDelete style={IconStyle} onClick={onDelete}/></BtnArea>
    </ItemFrame>
  );
}

export default Item;