import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { FiArrowDown } from "react-icons/fi";
import { CATEGORIES_API, EXPORTERS_API } from "../../config";
import DeleteModal from "./DeleteModal";
import { useDispatch } from "react-redux";
import {
  loadCategoriesData,
  allData,
} from "../../store/actions/exporterActions";

const CategoryDeleteModal = ({
  setCategoryAct,
  deletecategoryName,
  deletecategoryId,
  categoriesList,
  setDeletecategory,
  ismobile = false,
}) => {
  const dispatch = useDispatch();
  const [sureDelete, setSureDelete] = useState(false);
  const [selectCategory, setSelectCategory] = useState("Select category");
  const [isSelected, setIsSelected] = useState(true);
  const cata = categoriesList.filter(
    (ele) => ele.category_id !== deletecategoryId
  );

  const getCategory = () => {
    axios({
      method: "GET",
      url: `${CATEGORIES_API}`,
    })
      .then((res) => {
        dispatch(loadCategoriesData(res.data.categories));
      })
      .catch((err) => console.log(err));
  };

  const mainFilter = () => {
    axios({
      method: "GET",
      url: `${EXPORTERS_API}`,
      params: { type: "", category: "", sort: "popular" },
    })
      .then((res) => {
        dispatch(allData(res.data.exporters));
      })
      .catch((err) => console.log(err));
  };

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
        .then((res) => {
          mainFilter();
          getCategory();
          setCategoryAct(0);
          setDeletecategory(false);
        })
        .catch((error) => console.log(error));
    } else if (answer === "delete") {
      axios({
        method: "delete",
        url: `${CATEGORIES_API}/${deletecategoryId}`,
        headers: {
          Authorization: sessionStorage.getItem("access_token"),
        },
      })
        .then((res) => {
          // window.location.reload();
          mainFilter();
          getCategory();
          setCategoryAct(0);
          setDeletecategory(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      {!sureDelete && !ismobile ? (
        <DeleteModal handleDelete={handleDelete} content="Delete?" />
      ) : (
        <DeleteListContainer>
          <Div>
            <h4>
              If you want to move exporters before deleting, select the category
              you want to move.
            </h4>
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

export default CategoryDeleteModal;

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
  h4 {
    margin-bottom: 15px;
    text-align: center;
  }
  h5 {
    margin: 5px;
    font-size: 13px;
    color: #b2b2b2;
  }
  p {
    margin-top: 8px;
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
    margin-top: 15px;
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
