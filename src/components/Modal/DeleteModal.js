import React from "react";
import styled from "styled-components";

const DeleteModal = ({
  handleDelete,
  content = "",
  button1 = "Yes",
  button2 = "Cancel",
  deletebutton1 = true,
  children,
}) => {
  return (
    <DeleteContainer>
      <Div>
        <h4>{content}</h4>
        <Container>
          {children}
          {deletebutton1 && (
            <button onClick={() => handleDelete(button1)}>{button1}</button>
          )}
          <button onClick={() => handleDelete(button2)}>{button2}</button>
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
  z-index: 3;
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
  select {
    background: white;
    ${({ theme }) => theme.ModalButton}
    font-weight: 500;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.7);
  }
  input {
    ${({ theme }) => theme.ModalButton}
    margin-bottom : 10px
  }
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
