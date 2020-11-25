import React from "react";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  return (
    <Div>
      <SearchOutlined className="search_icon" />
      <input type="text" placeholder="Search for content" />
      <img
        src="https://exporterhub.io/assets/img/github.png"
        alt="go to exporterhub github"
      />
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  align-items: center;
  .search_icon {
    position: relative;
    left: 30px;
  }
  input {
    width: 300px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding-left: 35px;
    }
  }
  img {
    margin-left: 30px;
    width: 30px;
  }
`;
export default Search;
