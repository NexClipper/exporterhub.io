import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByCate } from "../../store/actions/exporterActions";
import styled from "styled-components";
const Sider = () => {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.categoryReducer);
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  const [categoryAct, setcategoryAct] = useState(0);
  const handleClickCategoryAct = (id) => {
    setcategoryAct(id);
  };
  const callDispatch = (e) => {
    if (e.target.innerText === "All") {
      const payload = "";
      dispatch(filterByCate(payload));
    } else {
      const payload = e.target.innerText;
      dispatch(filterByCate(payload));
    }
  };
  return (
    <CategoryList dark={changeTheme}>
      <Title dark={changeTheme}>CATEGORIES</Title>
      <Category
        dark={changeTheme}
        active={0 === categoryAct}
        onClick={(e) => {
          handleClickCategoryAct(0);
          callDispatch(e);
        }}
      >
        All
      </Category>
      {categories &&
        categories.map((category) => (
          <Category
            dark={changeTheme}
            key={category.category_id}
            active={category.category_id === categoryAct}
            onClick={(e) => {
              handleClickCategoryAct(category.category_id);
              callDispatch(e);
            }}
          >
            {category.category_name}
          </Category>
        ))}
    </CategoryList>
  );
};
const CategoryList = styled.ul`
  width: 200px;
  height: 450px;
  margin-bottom: 270px;
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
  padding: 10px;
  color: ${(props) => (props.dark ? "#f5f6f7" : "#999")};
`;
const Category = styled.li`
  position: relative;
  padding: 3px 10px;
  background: ${({ active }) => active && "#eee"};
  /* background: ${(props) => props.dark && "#303132"}; */
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
    background: url(/images/category_arrow.png) no-repeat center;
    background-size: 13px 10px;
  }
`;
export default Sider;
