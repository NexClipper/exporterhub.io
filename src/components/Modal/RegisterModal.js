import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const RegisterModal = ({ cancleModal }) => {
  const [categories, setCategories] = useState([]);
  const [repoUrl, setRepoUrl] = useState("Default");
  const [category, setCategory] = useState("Default");

  const registerExporter = () => {
    axios
      .post("http://10.153.1.241:8000/exporter", {
        repo_url: repoUrl,
        category: category
      })
      .then(res => {
        console.log(res.data.message);
      })
      //성공을 알리는 모달
      .catch(error => {
        console.log(error.response.data.message);
        //실패를 알리는 모달
      });
  };

  const inputRepoUrl = e => {
    setRepoUrl(e.target.value);
  };

  const selectCategory = e => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/data/categories.json").then(res => {
      setCategories(res.data.categories);
    });
  }, []);

  return (
    <ModalContainer>
      <Div>
        <img src="assets/image.png" />
        <Container>
          <input
            className="inputDiv"
            onChange={inputRepoUrl}
            placeholder="repository url"
          ></input>
          <select className="inputDiv" onChange={selectCategory}>
            <option>Select category</option>
            {categories.map(category => {
              return <option>{category.category_name}</option>;
            })}
          </select>
          <button className="inputDiv" onClick={registerExporter}>
            Register
          </button>
        </Container>
        <Back onClick={cancleModal}>
          <button>Back</button>
        </Back>
      </Div>
    </ModalContainer>
  );
};
const ModalContainer = styled.div`
  position: absolute;
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
  height: 500px;
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
  .inputDiv {
    width: 200px;
    height: 35px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.3);
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    :hover {
      cursor: pointer;
    }
  }
  button {
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
  display: flex;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;

export default RegisterModal;
