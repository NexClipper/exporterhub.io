import React from "react";
import styled from "styled-components";

const LoadingModal = ({ cancleModal }) => {
  return (
    <ModalContainer>
      <Div>
        <img src="assets/image.png" alt="modal" />
        <Container>
          <img src="assets/image 5.png" />
        </Container>
        <Back onClick={cancleModal}>
          <button>Back</button>
        </Back>
      </Div>
    </ModalContainer>
  );
};
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
`;

const Div = styled.div`
  width: 300px;
  height: 500px;
  background-color: #ffffff;
  ${({ theme }) => theme.positionCenter};
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 50px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  margin-bottom: 50px;
  img {
    margin-top: 40px;
    width: 220px;
  }
`;
const Back = styled.div`
  width: 230px;
  height: 35px;
  margin-top: 60px;
  border-radius: 20px;
  background-color: #85dbc3;
  color: #ffffff;
  font-size: 13px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export default LoadingModal;
