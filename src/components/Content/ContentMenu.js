import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { sortByPopularity } from "../../store/actions/exporterActions";
import { filterByValue } from "../../store/actions/exporterActions";
import { CATEGORIES_API } from "../../config";
import RegisterModal from "../Modal/RegisterModal";
const ContentMenu = ({ totalCount }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const userType = useSelector((store) => store.userReducer);
  console.log("그래서 뭐야 너? >>", userType);
  const cancleModal = () => {
    setIsModalActive(false);
  };

  // console.log(CATEGORIES_API);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const optionSelector = (e) => {
    const payload = e.target.value;
    dispatch(sortByPopularity(payload));
  };
  const callDispatch = (e) => {
    console.log(e.target.value);
    const payload = { filterType: "category", data: e.target.value };
    dispatch(filterByValue(payload));
  };
  useEffect(() => {
    axios.get(CATEGORIES_API).then((res) => {
      setCategories(res.data.categories);
    });
  }, []);
  return (
    <Div>
      {/* <span>{totalCount} items</span> */}
      <SelectBox>
        <Select onChange={callDispatch}>
          <option>All</option>
          {categories.length &&
            categories.map((category) => (
              <option key={category.category_id}>
                {category.category_name}
              </option>
            ))}
        </Select>
        <select onChange={optionSelector}>
          {/* <option>Sort by</option> */}
          <option>Most popular</option>
          <option>Recent</option>
        </select>
      </SelectBox>
      {userType === "admin" && (
        <Button onClick={() => setIsModalActive(true)}>
          <span>RESISTER</span>
        </Button>
      )}

      {isModalActive && <RegisterModal cancleModal={cancleModal} />}
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

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 7px 10px;
  background: #ffffff;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
`;

export default ContentMenu;
