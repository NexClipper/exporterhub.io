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
    <Div>
      <input onChange={inputRepoUrl} placeholder="카테고리 url"></input>
      <select onChange={selectCategory}>
        <option>Select</option>
        {categories.map(category => {
          return <option>{category.category_name}</option>;
        })}
      </select>
      <button onClick={registerExporter}>등록</button>
      <button onClick={cancleModal}>cancle</button>
    </Div>
  );
};

const Div = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  ${({ theme }) => theme.positionCenter};
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 100px;
  }
  select {
    width: 100px;
  }
`;
export default RegisterModal;
