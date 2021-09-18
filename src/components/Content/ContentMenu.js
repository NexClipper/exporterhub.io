import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { AiFillSetting } from "react-icons/ai";
import DeleteModal from "../Modal/DeleteModal";
import {
  filterBySort,
  filterByCate,
  loadCategoriesData,
} from "../../store/actions/exporterActions";
import { CATEGORIES_API } from "../../config";
import Search from "../Header/Search";
import RegisterModal from "../Modal/RegisterModal";
import CategoryDeleteModal from "../Modal/CategoryDeleteModal";

const ContentMenu = ({ totaCount }) => {
  const dispatch = useDispatch();
  const [isModalActive, setIsModalActive] = useState(false);
  const [editCategoryModal, setEditCategoryModal] = useState(false);
  const [deletecategory, setDeletecategory] = useState(false);
  const [alert, setAlert] = useState(false);
  const [plusOrDelete, setPlusOrDelete] = useState("");
  const [editSelectCategory, setEditSelectCategory] = useState(0);
  const [addCategoryName, setAddCategoryName] = useState("");
  const isAdmin = useSelector((store) => store.adminReducer);
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  const categories = useSelector((store) => store.categoryReducer);

  const cancleModal = () => {
    setIsModalActive(false);
  };

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

  const handleAddCategory = () => {
    if (plusOrDelete === "Plus category") {
      if (!addCategoryName) {
        setAlert(0);
      } else {
        const isSame = categories.filter(
          (category) =>
            category.category_name.toLowerCase() ===
            addCategoryName.toLowerCase()
        );
        if (isSame.length === 0) {
          axios({
            method: "post",
            url: `${CATEGORIES_API}`,
            data: {
              category: addCategoryName,
            },
            headers: {
              Authorization: sessionStorage.getItem("access_token"),
            },
          })
            .then(() => {
              getCategory();
              setAddCategoryName("");
              setPlusOrDelete("");
              setEditCategoryModal(false);
            })
            .catch((error) => {});
        } else {
          setAlert(1);
        }
      }
    } else {
      setAlert(false);
      setPlusOrDelete("Plus category");
    }
  };

  const handleCategory = (answer) => {
    if (answer === "Delete") {
      if (plusOrDelete === "Delete") {
        if (
          editSelectCategory === 0 ||
          editSelectCategory === "Select category"
        ) {
          setEditSelectCategory("Select category");
          return;
        } else {
          setDeletecategory(true);
          setEditCategoryModal(false);
          setPlusOrDelete("");
        }
      } else {
        setPlusOrDelete("Delete");
        setEditSelectCategory(0);
      }
    } else if (answer === "Back") {
      setPlusOrDelete("");
    } else {
      setEditCategoryModal(false);
      setPlusOrDelete("");
    }
  };

  const selectCategory = ({ target }) => {
    if (target.value === "Select category") {
      setEditSelectCategory("Select category");
    } else {
      const deleteCategory = categories.find(
        (item) => item.category_name === target.value
      );
      setEditSelectCategory(deleteCategory);
    }
  };

  const optionSelector = (e) => {
    if (e.target.value === "Most popular") {
      const payload = "popular";
      dispatch(filterBySort(payload));
    } else {
      const payload = e.target.value;
      dispatch(filterBySort(payload.toLowerCase()));
    }
  };

  const callDispatch = (e) => {
    if (e.target.value === "All") {
      const payload = "";
      dispatch(filterByCate(payload));
    } else {
      const payload = e.target.value;
      dispatch(filterByCate(payload));
    }
  };

  return (
    <>
      <Div>
        {/* <span>{totalCount} items</span> */}
        <SelectBox>
          <Categories dark={changeTheme}>
            <p>Categories :</p>
            <Select dark={changeTheme} onChange={callDispatch}>
              <option>All</option>
              {categories &&
                categories.map((category) => (
                  <option key={category.category_id}>
                    {category.category_name}
                  </option>
                ))}
            </Select>
            {isAdmin && (
              <AiFillSetting
                className="edit"
                onClick={() => setEditCategoryModal(true)}
              />
            )}
          </Categories>
          <Sort dark={changeTheme}>
            <select dark={changeTheme} onChange={optionSelector}>
              <option>Most popular</option>
              <option>Recent</option>
              <option>Trending</option>
            </select>
          </Sort>
        </SelectBox>
        <SearchBox>
          <Search />
        </SearchBox>
        {isAdmin && (
          <Button dark={changeTheme} onClick={() => setIsModalActive(true)}>
            <span>REGISTER</span>
          </Button>
        )}
        {isModalActive && <RegisterModal cancleModal={cancleModal} />}

        {editCategoryModal && (
          <DeleteModal
            handleDelete={handleCategory}
            content={plusOrDelete === "" ? "Edit Category" : ""}
            button1="Delete"
            deletebutton1={plusOrDelete === "Delete" || plusOrDelete === ""}
            button2={plusOrDelete !== "" ? "Back" : "Cancel"}
          >
            {plusOrDelete === "Delete" && (
              <SelectBox dark={changeTheme} delete={true}>
                <Select dark={changeTheme} onChange={selectCategory}>
                  <option>Select category</option>
                  {categories.map((category) => {
                    return (
                      <option key={category.category_id}>
                        {category.category_name}
                      </option>
                    );
                  })}
                </Select>
                {editSelectCategory === "Select category" && (
                  <p className="alert">Select the category to delete.</p>
                )}
              </SelectBox>
            )}

            {plusOrDelete === "Plus category" && (
              <SelectBox>
                <input
                  className="inputDiv"
                  onChange={({ target }) => {
                    setAddCategoryName(target.value);
                    setAlert(false);
                  }}
                  placeholder="New categoryName"
                ></input>

                {alert === 0 && (
                  <p className="alert">
                    {alert === 0 && "Please enter the category name."}
                  </p>
                )}
                {alert === 1 && (
                  <p className="alert">
                    {alert && "This name already exists."}
                  </p>
                )}
              </SelectBox>
            )}

            {(plusOrDelete === "Plus category" || plusOrDelete === "") && (
              <button onClick={handleAddCategory}>Plus category</button>
            )}
          </DeleteModal>
        )}
        {deletecategory && (
          <CategoryDeleteModal
            setCategoryAct={setEditSelectCategory}
            deletecategoryName={editSelectCategory.category_name}
            deletecategoryId={editSelectCategory.category_id}
            categoriesList={categories}
            setDeletecategory={setDeletecategory}
            ismobile={true}
          />
        )}
      </Div>
      <SearchMoileBox>
        <Search />
      </SearchMoileBox>
    </>
  );
};

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 16px;
  @media ${({ theme }) => theme.media.mobile} {
    font-size: 13px;
    margin-bottom: 10px;
  }
  select {
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 16px;
    cursor: pointer;
  }
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.delete ? "center" : "")};
  font-size: 16px;
  @media ${({ theme }) => theme.media.mobile} {
    font-size: 13px;
  }
  .alert {
    margin-top: 5px;
    font-size: 13px;
    color: red;
  }
`;
const Categories = styled.div`
  display: none;
  margin-right: 10px;
  @media ${({ theme }) => theme.media.mobile} {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 600;
    color: ${(props) => (props.dark ? "#ffffff" : "black")};
    .edit {
      font-size: large;
    }
  }
`;

const Select = styled.select`
  display: none;
  margin-right: 10px;
  @media ${({ theme }) => theme.media.mobile} {
    display: block;
    font-size: 13px;
    color: ${(props) => (props.dark ? "#ffffff" : "black")};
  }
  option {
    color: ${(props) => (props.dark ? "#ffffff" : "black")};
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 7px 10px;
  background: ${(props) => (props.dark ? "#eeeeee" : "#ffffff")};
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 12px;
  font-weight: 300;
`;

const Sort = styled.div`
  select {
    color: ${(props) => (props.dark ? "#ffffff" : "black")};
    option {
      background-color: #ffffff;
      color: black;
      color: ${(props) => (props.dark ? "#ffffff" : "black")};
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    position: relative;
  }
`;

const SearchMoileBox = styled.div`
  display: none;
  @media ${({ theme }) => theme.media.mobile} {
    display: block;
    margin-bottom: 10px;
  }
`;

const SearchBox = styled.div`
  display: block;
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;
export default ContentMenu;
