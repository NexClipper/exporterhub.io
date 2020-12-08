import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingMotion = () => {
  return (
    <LoaderBack>
      <Loader>
        <h2>Exporterhub waiting for crawled data now ...!</h2>
        <div class="loader"></div>
      </Loader>
    </LoaderBack>
  );
};

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const LoaderBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Loader = styled.div`
  width: 300px;
  height: 400px;
  ${({ theme }) => theme.flexCenter}
  flex-direction:column;
  background-color: #f1f1f1;
  h2 {
    margin-bottom: 30px;
    color: black;
    text-align: center;
  }
  div {
    border: 16px solid #3498db;
    border-radius: 50%;
    border-top: 16px solid #ffffff;
    animation: ${spin} 2s linear infinite;
    width: 120px;
    height: 120px;
  }
`;
export default LoadingMotion;
