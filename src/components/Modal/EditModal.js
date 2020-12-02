import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const EditModal = ({ cancleModal, exporterId }) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("Default");

  console.log(exporterId);
  const removeExporter = () => {
    axios
      .delete(`http://10.153.1.241:8000/exporter/${exporterId}`, {})
      .then(res => {
        console.log(res.data.message);
      })
      //성공을 알리는 모달
      .catch(error => {
        console.log(error.response.data.message);
        //실패를 알리는 모달
      });
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
      <select onChange={selectCategory}>
        <option>Select</option>
        {categories.map(category => {
          return <option>{category.category_name}</option>;
        })}
      </select>
      {/* <button onClick={editExporter}>수정 완료</button> */}
      <button onClick={removeExporter}>삭제</button>
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
  select {
    width: 100px;
  }
`;
export default EditModal;
