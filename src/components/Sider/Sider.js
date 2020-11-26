import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Sider = () => {
  const [categories, setCategories] = useState([]);
  const [categoryAct, setcategoryAct] = useState(1);

  const handleClickCategoryAct = id => {
    setcategoryAct(id);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/data/categories.json").then(res => {
      setCategories(res.data.categories);
      setcategoryAct(res.data.categories[0].category_id);
      console.log(res);
    });
  }, []);

  return (
    <CategoryList>
      <Title>CATEGORIES</Title>
      {categories &&
        categories.map(category => (
          <Category
            key={category.category_id}
            active={category.category_id === categoryAct}
            onClick={() => {
              handleClickCategoryAct(category.category_id);
            }}
          >
            {category.category_name}
          </Category>
        ))}
    </CategoryList>
  );
};

const CategoryList = styled.dl`
  max-width: 270px;
  line-height: 1.5;
`;

const Title = styled.dt`
  padding: 10px;
  color: #999;
`;

const Category = styled.dd`
  position: relative;
  padding: 3px 10px;
  background: ${({ active }) => active && "#eee"};
  cursor: pointer;

  &:hover {
    background: #eee;
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
