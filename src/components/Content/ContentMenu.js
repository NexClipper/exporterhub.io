import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { sortByPopularity } from "../../store/actions/exporterActions";

const ContentMenu = ({ totalCount }) => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const optionSelector = e => {
    console.log(e);
    const payload = e.target.value;
    dispatch(sortByPopularity(payload));
  };
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
              <option key={category.category_id}>
                {category.category_name}
              </option>
            ))}
        </Select>

        <select onChange={optionSelector}>
          <option value="All">All</option>
          <option value="Most popular">Most popular</option>
          <option value="Recently registered">Recently registered</option>
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
