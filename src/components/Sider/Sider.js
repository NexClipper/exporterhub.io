import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterByCate,
  loadCategoriesData,
} from "../../store/actions/exporterActions";
import styled from "styled-components";
import { AiFillSetting } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { CATEGORIES_API } from "../../config";
import axios from "axios";
import CategoryDeleteModal from "../Modal/CategoryDeleteModal";
import { Fragment } from "react";

const Sider = () => {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.categoryReducer);
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  const isAdmin = useSelector((store) => store.adminReducer);
  const filterCategory = useSelector((store) => store.cateFilterReducer);
  const [edit, setEdit] = useState(false);
  const [addCategoryName, setAddCategoryName] = useState("");
  const [deletecategory, setDeletecategory] = useState(false);
  const [categoryAct, setCategoryAct] = useState(0);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (filterCategory !== "") {
      const cate = categories.filter(
        (category) => category.category_name === filterCategory
      );
      setCategoryAct(cate[0].category_id);
    } else {
      setCategoryAct(0);
    }
  }, [filterCategory]);

  const New = (createDate) => {
    let today = new Date();
    let todayDate = today.toLocaleDateString();
    let isNew =
      todayDate.slice(0, todayDate.indexOf(".")) -
        createDate.slice(0, createDate.indexOf("-")) ===
        0 &&
      todayDate.slice(
        todayDate.indexOf(".") + 1,
        todayDate.indexOf(".", todayDate.indexOf(".") + 1)
      ) -
        createDate.slice(
          createDate.indexOf("-") + 1,
          createDate.indexOf("-", createDate.indexOf("-") + 1)
        ) ===
        0 &&
      todayDate.slice(
        todayDate.indexOf(".", todayDate.indexOf(".") + 1) + 1,
        todayDate.lastIndexOf(".")
      ) -
        createDate.slice(
          createDate.indexOf("-", createDate.indexOf("-") + 1) + 1
        ) <=
        3;
    return isNew;
  };

  const handleClickCategoryAct = (id) => {
    setCategoryAct(id);
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

  const addCategory = (editType) => {
    if (editType === "add" && !addCategoryName) {
      setAlert(1);
    } else if (editType === "add" && addCategoryName) {
      const isSame = categories.filter(
        (category) =>
          category.category_name.toLowerCase() === addCategoryName.toLowerCase()
      );
      if (isSame.length === 0) {
        let today = new Date();
        let todayDate = today.toLocaleDateString();
        axios({
          method: "post",
          url: `${CATEGORIES_API}`,
          data: {
            category: addCategoryName,
            date: todayDate,
          },
          headers: {
            Authorization: sessionStorage.getItem("access_token"),
          },
        })
          .then(() => {
            // window.location.reload();
            getCategory();
            setEdit(false);
            setAddCategoryName("");
          })
          .catch((error) => {});
      } else {
        setAlert(2);
      }
    } else if (typeof editType === "object") {
      setDeletecategory(editType);
    }
  };

  const callDispatch = (category) => {
    if (category === "All") {
      const payload = "";
      dispatch(filterByCate(payload));
    } else {
      const payload = category;
      dispatch(filterByCate(payload));
    }
  };

  return (
    <div>
      <CategoryList dark={changeTheme}>
        <Title dark={changeTheme}>
          CATEGORIES
          {isAdmin && (
            <AiFillSetting
              className="edit"
              onClick={() => {
                setEdit((prev) => !prev);
                setAlert(false);
              }}
            />
          )}
        </Title>

        {edit && (
          <Fragment>
            <Title>
              <Category
                as="input"
                onChange={({ target }) => {
                  setAddCategoryName(target.value);
                  setAlert(false);
                }}
              ></Category>
              <FiPlus className="edit" onClick={() => addCategory("add")} />
            </Title>

            <Title alert="alert">
              {alert === 1 && "Please enter the category name"}
              {alert === 2 && "This name already exists."}
            </Title>
          </Fragment>
        )}
        {deletecategory && (
          <CategoryDeleteModal
            setCategoryAct={setCategoryAct}
            categoriesList={categories}
            deletecategoryId={deletecategory.category_id}
            deletecategoryName={deletecategory.category_name}
            setDeletecategory={setDeletecategory}
          />
        )}

        <Category
          default="All"
          dark={changeTheme}
          edit={edit}
          active={0 === categoryAct}
          onClick={(e) => {
            handleClickCategoryAct(0);
            callDispatch("All");
            alert !== false && setAlert(false);
          }}
        >
          All
        </Category>
        {categories &&
          categories.map((category) => {
            const isNew = New(category.create_at);
            return (
              <Category
                key={category.category_id}
                edit={edit}
                dark={changeTheme}
                active={category.category_id === categoryAct}
              >
                <Div
                  select={categoryAct === category.category_id}
                  title={category.category_name}
                  onClick={(e) => {
                    handleClickCategoryAct(category.category_id);
                    callDispatch(category.category_name);
                    alert !== false && setAlert(false);
                  }}
                >
                  <span className="categoryName">{category.category_name}</span>
                  {isNew && <span className="new">New</span>}
                </Div>

                {edit && categoryAct === category.category_id && (
                  <DeleteButton
                    className="deleteIcon"
                    onClick={() => addCategory(category)}
                  >
                    <RiDeleteBinLine size="17px" />
                  </DeleteButton>
                )}
              </Category>
            );
          })}
      </CategoryList>
    </div>
  );
};

const CategoryList = styled.ul`
  width: 200px;
  min-height: 450px;
  padding: 10px 0px;
  line-height: 1.5;
  background-color: ${(props) => (props.dark ? "#242526" : "#ffffff")};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Title = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${(props) => (props.alert ? "15px" : "large")};
  padding: 5px 5px 5px 10px;
  color: ${(props) => (props.alert ? "red" : props.dark ? "#f5f6f7" : "#999")};
  .edit {
    cursor: pointer;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: 100%;
  min-width: 160px;
  width: ${({ select }) => select && "160px"};
  .new {
    font-size: 13px;
    color: #44c8a3;
    padding-left: 7px;
  }

  .categoryName {
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const DeleteButton = styled.div`
  padding: 0px 10px;
  width: 40px;
`;

const Category = styled.li`
  display: ${({ edit }) => edit && "flex"};
  align-items: ${({ edit }) => edit && "center"};
  justify-content: ${({ edit }) => edit && "space-between"};
  position: relative;
  padding: ${(props) => (props.default === "All" ? "0px 13px" : "3px")};
  background: ${({ active }) => active && "#eee"};
  cursor: pointer;
  color: ${(props) => (props.dark ? "#f5f6f7" : "black")};
  color: ${({ active }) => active && "black"};
  &:hover {
    background: #eee;
    color: black;
  }
  &:after {
    content: "";
    display: ${({ active }) => (active ? "block" : "none")};
    width: 13px;
    height: 10px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background: ${({ active, edit }) =>
      !edit && active
        ? "url(/images/category_arrow.png) no-repeat center;"
        : ""};
    background-size: 13px 10px;
  }
`;
export default Sider;
