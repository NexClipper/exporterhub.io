import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { sortByPopularity } from "../../store/actions/exporterActions";
import { CATEGORIES_API } from "../../config";

const ContentMenu = ({ totalCount }) => {
  console.log(CATEGORIES_API);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const optionSelector = (e) => {
    const payload = e.target.value;
    dispatch(sortByPopularity(payload));
  };
  useEffect(() => {
    axios.get(CATEGORIES_API).then((res) => {
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
            categories.map((category) => (
              <option key={category.category_id}>
                {category.category_name}
              </option>
            ))}
        </Select>

        <select onChange={optionSelector}>
          <option>Sort by</option>
          <option>Most popular</option>
          <option>Recent</option>
        </select>
      </SelectBox>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 16px;
  @media ${({ theme }) => theme.media.mobile} {
    font-size: 13px;
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
  font-size: 16px;
  @media ${({ theme }) => theme.media.mobile} {
    font-size: 13px;
  }
`;

const Select = styled.select`
  display: none;
  margin-right: 10px;

  @media ${({ theme }) => theme.media.mobile} {
    display: block;
    width: 80px;
    font-size: 13px;
  }
`;
export default ContentMenu;
