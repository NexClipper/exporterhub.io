import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { EXPORTER_ADMIN_API } from "../../config";

const RegisterModal = ({ cancleModal }) => {
  const categories = useSelector((store) => store.categoryReducer);
  const [exporterTitle, setExporterTitle] = useState("");
  const [repoUrl, setRepoUrl] = useState("Default");
  const [category, setCategory] = useState("Default");
  const [failMessage, setFailMessage] = useState("");

  const registerExporter = () => {
    if (exporterTitle.length === 0) {
      setFailMessage("WRONG_EXPORTER_TITLE");
      return;
    }

    axios({
      method: "POST",
      url: `${EXPORTER_ADMIN_API}`,
      data: {
        title: exporterTitle,
        repo_url: repoUrl,
        category: category,
      },
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
    })
      .then(() => {
        console.log("regist success");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        setFailMessage(error.response?.data.message);
      });
  };

  const inputExporterTitle = (e) => {
    setExporterTitle(e.target.value);
  };

  const inputRepoUrl = (e) => {
    setRepoUrl(e.target.value);
  };

  const selectCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <ModalContainer>
      <Div>
        <img src="assets/image.png" alt="modal" />
        <Container>
          <div>{failMessage}</div>
          <input
            className="inputDiv"
            onChange={inputExporterTitle}
            placeholder="exporter title"
          ></input>
          <input
            className="inputDiv"
            onChange={inputRepoUrl}
            placeholder="repository url"
          ></input>
          <select className="inputDiv" onChange={selectCategory}>
            <option>Select category</option>
            {categories.map((category) => {
              return <option>{category.category_name}</option>;
            })}
          </select>
          <button className="inputDiv" onClick={registerExporter}>
            Register
          </button>
        </Container>
        <Back onClick={cancleModal}>Back</Back>
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
  height: fit-content;
  padding: 50px 0;
  background-color: white;
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
  margin: 20px 0 40px 0;
  div {
    height: 20px;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 13px;
    color: #ff0000;
  }
  input {
    ${({ theme }) => theme.ModalButton}
    margin-bottom : 10px
  }
  select {
    ${({ theme }) => theme.ModalButton}
  }
  button {
    ${({ theme }) => theme.ModalButton}
    background-color: #efeeee;
    margin-top: 20px;
  }
`;

const Back = styled.div`
  width: 230px;
  height: 35px;
  border-radius: 20px;
  background-color: #85dbc3;
  color: #ffffff;
  font-size: 13px;
  font-weight: 400;
  ${({ theme }) => theme.flexCenter};
  cursor: pointer;
`;

export default RegisterModal;
