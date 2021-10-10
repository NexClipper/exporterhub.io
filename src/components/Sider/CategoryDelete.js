import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { FiArrowDown } from "react-icons/fi";
import { CATEGORIES_API, EXPORTERS_API } from "../../config";
import DeleteModal from "../Modal/DeleteModal";
import { useDispatch } from "react-redux";
import {
  loadCategoriesData,
  allData,
} from "../../store/actions/exporterActions";

const CategoryDelete = ({
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
  const remainCategories = categoriesList.filter(
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
    } else if (answer === "move category") {
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
    } else if (answer === "just delete") {
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
        <DeleteModal
          handleDelete={handleDelete}
          content="Do you want to delete it?"
        />
      ) : (
        <DeleteModal
          handleDelete={handleDelete}
          content="If you want to move exporters before deleting, select the category
              you want to move."
          button1="just delete"
        >
          <SelectCategory>{deletecategoryName + " Category"}</SelectCategory>
          <FiArrowDown color={"#b2b2b2"} />
          <SelectOption
            className="inputDiv"
            onChange={({ target }) => {
              setSelectCategory(target.value);
              target.value === "Select category"
                ? setIsSelected(false)
                : setIsSelected(true);
            }}
          >
            <option>Select category</option>
            {remainCategories &&
              remainCategories.map((category) => {
                return <option>{category.category_name}</option>;
              })}
          </SelectOption>
          {!isSelected && <SeleteAlert>Please select</SeleteAlert>}
          <button onClick={() => handleDelete("move category")}>
            move category
          </button>
        </DeleteModal>
      )}
    </>
  );
};

export default CategoryDelete;

const SeleteAlert = styled.p`
  margin-top: 8px;
  font-size: 13px;
  color: red;
`;

const SelectCategory = styled.h5`
  margin: 5px;
  font-size: 13px;
  color: #b2b2b2;
  margin-top: 15px;
`;

const SelectOption = styled.select`
  ${({ theme }) => theme.ModalButton};
  border: 1px solid rgba(0, 0, 0, 0.3);
`;
