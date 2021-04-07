import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBySearch } from "../../store/actions/exporterActions";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
const Search = () => {
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    const payload = e.target.value.toLowerCase();
    dispatch(filterBySearch(payload));
  };
  return (
    <Div dark={changeTheme}>
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
    /* display: block; */
    margin: 15px 0 0;
    display: none;
  }
  .search_icon {
    color: ${(props) => (props.dark ? "#ffffff" : "black")};
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
    background-color: ${(props) => (props.dark ? "#18191a" : "#ffffff")};
    color: ${(props) => (props.dark ? "#ffffff" : "#black")};
  }
`;
export default Search;
