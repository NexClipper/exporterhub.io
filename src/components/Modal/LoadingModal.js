import React from "react";
import styled from "styled-components";

const LoadingModal = () => {
  return (
    <ModalContainer>
      <Div>
        <img src="assets/image.png" alt="modal" />
        <Container>
          <img src="assets/image 4.png" alt="icon" />
        </Container>
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
    width: 200px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  margin-bottom: 50px;
`;

export default LoadingModal;
