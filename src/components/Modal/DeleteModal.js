import React from "react";
import styled from "styled-components";

const DeleteModal = ({ handleDelete, content }) => {
  return (
    <DeleteContainer>
      <Div>
        <h4>{content}</h4>
        <Container>
          <button onClick={() => handleDelete("Yes")}>Yes</button>
          <button onClick={() => handleDelete("Cancel")}>Cancel</button>
        </Container>
      </Div>
    </DeleteContainer>
  );
};

export default DeleteModal;

const DeleteContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const Div = styled.div`
  width: 310px;
  height: fit-content;
  background-color: white;
  padding: 20px;
  ${({ theme }) => theme.positionCenter};
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 230px;
    height: 35px;
    margin-top: 20px;
    border-radius: 20px;
    background-color: #85dbc3;
    color: #ffffff;
    font-size: 13px;
    font-weight: 400;
    ${({ theme }) => theme.flexCenter};
    cursor: pointer;

    &:hover {
      color: #c6474e;
    }
  }
`;
