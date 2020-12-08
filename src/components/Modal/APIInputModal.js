import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { EXPORTER_ADMIN_API } from "../../config";

const APIInputModal = () => {
  const [tokenKey, setTokenKey] = useState("");
  const [failMessage, setFailMessage] = useState("");

  const forwardToken = () => {
    axios
      .post(EXPORTER_ADMIN_API, {
        token_Key: tokenKey
      })
      .then(res => {
        window.location.reload();
      })
      .catch(error => {
        setFailMessage("Please make sure the Token key 1st");
      });
  };

  const inputTokenKey = e => {
    setTokenKey(e.target.value);
  };

  return (
    <ModalContainer>
      <Div>
        <img src="assets/image.png" alt="modal" />
        <Container>
          <span>{failMessage}</span>
          <input
            className="inputDiv"
            onChange={inputTokenKey}
            placeholder="Github Personal Access Token"
          ></input>
        </Container>
        <button onClick={forwardToken}>Submit</button>
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
  z-index: 1;
`;

const Div = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  ${({ theme }) => theme.positionCenter};
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 50px;
  }
  button {
    width: 230px;
    height: 35px;
    border-radius: 20px;
    background-color: #85dbc3;
    color: #ffffff;
    font-size: 13px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  margin-bottom: 50px;
  input {
    ${({ theme }) => theme.ModalButton}
    margin-bottom : 10px
  }
`;

export default APIInputModal;
