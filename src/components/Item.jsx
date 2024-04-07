import React from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";

const ItemFrame = styled.div`
  width: 90%;
  height: 80px;
  display: flex;
  border: 3px solid gray;
  margin-top: 10px;
  background-color: white;
`;

const TextArea = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  box-sizing: border-box;
`;

const BtnArea = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-left: 3px solid gray;
  background-color: white;
  box-sizing: border-box;
`;

const StyledCheckBox = styled.input`
  width: 10%;
  height: 50%;
  background-color: green;
`;

const IconStyle = {
  width: "30px",
  height: "30px",
  cursor: "pointer"
}

const Item = ({ item, onDelete, index }) => {

  const handleDeleteItem = () => {
    return (
      onDelete(index)
    );
  }

  const handleChecked = () => {
    return (
      <>
      </>
    );
  }

  return (
    <ItemFrame>
      <TextArea><StyledCheckBox type="checkBox"/><h1>{item}</h1></TextArea>
      <BtnArea><MdDelete style={IconStyle} onClick={handleDeleteItem} /></BtnArea>
    </ItemFrame>
  );
}

export default Item;