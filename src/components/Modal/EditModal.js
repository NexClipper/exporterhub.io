import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styled, { css } from "styled-components";

const EditModal = ({ cancleModal, exporterId }) => {
  const categories = useSelector(store => store.categoryReducer);
  const [category, setCategory] = useState("Default");

  const deleteExporter = () => {
    axios
      .delete(
        `http://10.153.5.73:8000/exporter?exporter_id=${exporterId}`
        //`${EXPORTER_ADMIN_API}?exporter_id=${exporterId}`
      )
      .then(res => {
        console.log(res.data.message);
        //성공을 알리는 모달
      })
      .catch(error => {
        console.log(error.response.data.message);
        //실패를 알리는 모달
      });
  };
  const editExporter = () => {
    axios
      .PATCH(
        `http://10.153.5.73:8000/exporter?exporter_id=${exporterId}`,
        //`${EXPORTER_ADMIN_API}?exporter_id=${exporterId}`,
        { category: "category_name" }
      )
      .then(res => {
        console.log(res.data.message);
        window.alert("Success");
        cancleModal();
        window.location.reload();
      })
      .catch(error => {
        console.log(error.response.data.message);
        window.alert("Try again");
      });
  };

  const selectCategory = e => {
    setCategory(e.target.value);
  };

  return (
    <ModalContainer onClick={cancleModal}>
      <Div>
        <img src="assets/image.png" alt="modal" />
        <Container>
          <select onChange={selectCategory}>
            <option>Select category</option>
            {categories.map(category => {
              return <option>{category.category_name}</option>;
            })}
          </select>
          <ButtonContainer>
            <button onClick={editExporter}>Edit</button>
            <button onClick={deleteExporter}>Remove</button>
          </ButtonContainer>
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
  select {
    ${({ theme }) => theme.ModalButton}
  }
`;
const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    ${({ theme }) => theme.ModalButton}
    background-color: #efeeee;
    margin-bottom: 10px;
  }
`;
const Back = styled.div`
  width: 230px;
  height: 35px;
  margin-top: -20px;
  border-radius: 20px;
  background-color: #85dbc3;
  color: #ffffff;
  font-size: 13px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export default EditModal;
