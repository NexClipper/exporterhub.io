import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { EXPORTER_ADMIN_API } from "../../config";

const APIInputModal = () => {
  const categories = useSelector(store => store.categoryReducer);
  const [repoUrl, setRepoUrl] = useState("Default");
  const [category, setCategory] = useState("Default");
  const [successModal, setSuccessModal] = useState(false);
  const [failMessage, setFailMessage] = useState("");
  const registerExporter = () => {
    axios
      .post(EXPORTER_ADMIN_API, {
        repo_url: repoUrl,
        category: category
      })
      .then(res => {
        setSuccessModal(true);
        window.location.reload();
      })
      .catch(error => {
        setSuccessModal(false);
        setFailMessage(error.response?.data.message);
      });
  };

  const inputRepoUrl = e => {
    setRepoUrl(e.target.value);
  };

  const selectCategory = e => {
    setCategory(e.target.value);
  };

  return (
    <ModalContainer>
      <Div>
        <img src="assets/image.png" alt="modal" />
        {successModal ? (
          <ResultModal successModal={successModal}>
            <img alt="success" src="assets/image 1.png" />
          </ResultModal>
        ) : (
          <Container successModal={successModal}>
            <span>{failMessage}</span>
            <input
              className="inputDiv"
              onChange={inputRepoUrl}
              placeholder="Token key"
            ></input>
          </Container>
        )}
        <Back>
          <button onClick={registerExporter}>Submit</button>
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
  button {
    ${({ theme }) => theme.ModalButton}
    background-color: #efeeee;
    margin-top: 20px;
  }
`;
const ResultModal = styled.div``;
const Back = styled.div`
  width: 230px;
  height: 35px;
  border-radius: 20px;
  background-color: #85dbc3;
  color: #ffffff;
  font-size: 13px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export default APIInputModal;
