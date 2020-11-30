import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const ContentMenu = ({ totalCount }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("/data/categories.json").then(res => {
      setCategories(res.data.categories);
    });
  }, []);
  return (
    <Div>
      <span>{totalCount} items</span>
      <SelectBox>
        <Select>
          <option>All</option>
          {categories.length &&
            categories.map(category => (
              <option>{category.category_name}</option>
            ))}
        </Select>
        <select>
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
      </SelectBox>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  select {
    outline: none;
    border: none;
    background-color: transparent;
  }
`;

const SelectBox = styled.div`
  display: flex;
`;

const Select = styled.select`
  display: none;
  margin-right: 10px;
  @media ${({ theme }) => theme.media.mobile} {
    display: block;
  }
`;
export default ContentMenu;
