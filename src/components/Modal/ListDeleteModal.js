import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { FiArrowDown } from "react-icons/fi";
import { CATEGORIES_API } from "../../config";
import DeleteModal from "./DeleteModal";

const ListDeleteModal = ({
  deletecategoryName,
  deletecategoryId,
  categoriesList,
  setDeletecategory,
}) => {
  const [sureDelete, setSureDelete] = useState(false);
  const [selectCategory, setSelectCategory] = useState("Select category");
  const [isSelected, setIsSelected] = useState(true);
  const cata = categoriesList.filter(
    (ele) => ele.category_id !== deletecategoryId
  );
  const handleDelete = (answer) => {
    if (answer === "Yes") {
      setSureDelete(true);
    } else if (answer === "Cancel") {
      setDeletecategory(false);
    } else if (answer === "move") {
      if (selectCategory === "Select category") {
        setIsSelected(false);
        return;
      }

      const selectCategoryId = categoriesList.filter(
        (ele) => ele.category_name === selectCategory
      );

      axios({
        method: "patch",
        url: `${CATEGORIES_API}`,
        data: {
          category_id: deletecategoryId,
          feature_category_id: selectCategoryId[0].category_id,
        },
        headers: {
          Authorization: sessionStorage.getItem("access_token"),
        },
      })
        .then(() => {
          window.location.reload();
          setDeletecategory(false);
        })
        .catch((error) => {});
    } else if (answer === "delete") {
      axios({
        method: "delete",
        url: `${CATEGORIES_API}/${deletecategoryId}`,
        headers: {
          Authorization: sessionStorage.getItem("access_token"),
        },
      })
        .then(() => {
          window.location.reload();
          setDeletecategory(false);
        })
        .catch((error) => {});
    }
  };

  return (
    <>
      {!sureDelete ? (
        <DeleteModal handleDelete={handleDelete} content="Delete?" />
      ) : (
        <DeleteListContainer>
          <Div>
            <h4>삭제 전, 카드들을 옮길 카테고리를 선택해주세요</h4>
            <h5>{deletecategoryName + " Category"}</h5>
            <FiArrowDown color={"#b2b2b2"} />
            <select
              className="inputDiv"
              onChange={({ target }) => {
                setSelectCategory(target.value);
                target.value === "Select category"
                  ? setIsSelected(false)
                  : setIsSelected(true);
              }}
            >
              <option>Select category</option>
              {cata &&
                cata.map((category) => {
                  return <option>{category.category_name}</option>;
                })}
            </select>
            {!isSelected && <p>선택해주세요</p>}
            <Container>
              <button onClick={() => handleDelete("move")}>
                move category
              </button>
              <button onClick={() => handleDelete("delete")}>
                just delete
              </button>
              <button onClick={() => handleDelete("Cancel")}>Cancel</button>
            </Container>
          </Div>
        </DeleteListContainer>
      )}
    </>
  );
};

export default ListDeleteModal;

const DeleteListContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const Div = styled.div`
  width: 310px;
  height: fit-content;
  background-color: white;
  padding: 20px;
  ${({ theme }) => theme.positionCenter};
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;

  select {
    ${({ theme }) => theme.ModalButton}
  }
  h5 {
    margin-top: 5px;
    font-size: 13px;
    color: #b2b2b2;
  }
  p {
    margin-top: 5px;
    font-size: 13px;
    color: red;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 230px;
    height: 35px;
    margin-top: 20px;
    border-radius: 20px;
    background-color: #85dbc3;
    color: #ffffff;
    font-size: 13px;
    font-weight: 400;
    ${({ theme }) => theme.flexCenter};
    cursor: pointer;

    &:hover {
      color: #c6474e;
    }
  }
`;
