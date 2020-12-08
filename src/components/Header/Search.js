import React from "react";
import { useDispatch } from "react-redux";
import { filterByValue } from "../../store/actions/exporterActions";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  const dispatch = useDispatch();
  const inputHandler = e => {
    const payload = { filterType: "value", data: e.target.value };
    dispatch(filterByValue(payload));
  };
  return (
    <Div>
      <SearchOutlined className="search_icon" />
      <input onChange={inputHandler} type="text" placeholder="Search" />
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-right: auto;
  @media ${({ theme }) => theme.media.mobile} {
    position: relative;
    display: block;
    margin: 15px 0 0;
  }

  .search_icon {
    position: relative;
    left: 30px;

    @media ${({ theme }) => theme.media.mobile} {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  input {
    @media ${({ theme }) => theme.media.mobile} {
      width: 100%;
      margin: 0;
    }
    width: 300px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding-left: 35px;
  }
`;
export default Search;
