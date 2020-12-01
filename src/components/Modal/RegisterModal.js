import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const RegisterModal = () => {
  const [categories, setCategories] = useState([]);
  const [repoUrl, setRepoUrl] = useState();
  const [catefory, setCategory] = useState();

  const registerExporter = () => {
    console.log("click");
  };

  const inputChange = e => {
    console.log(e.target.value);
    setRepoUrl(e.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/data/categories.json").then(res => {
      setCategories(res.data.categories);
    });
  }, []);

  return (
    <Div>
      <p>X</p>
      <input onChange={inputChange} placeholder="카테고리 url"></input>
      <select>
        {categories.map(category => {
          return <option>{category.category_name}</option>;
        })}
      </select>
      <button onClick={registerExporter}>등록</button>
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
  p {
    width: 100%;
    margin-bottom: 100px;
    text-align: end;
  }
  input {
    width: 100px;
  }
  select {
    width: 100px;
  }
`;
export default RegisterModal;
