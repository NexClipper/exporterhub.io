import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import {
  filterBySort,
  filterByCate,
} from "../../store/actions/exporterActions";
import { CATEGORIES_API } from "../../config";
import RegisterModal from "../Modal/RegisterModal";
import Search from "../Header/Search";

const ContentMenu = ({ totaCount }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const isAdmin = useSelector((store) => store.adminReducer);
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  const cancleModal = () => {
    setIsModalActive(false);
  };
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const optionSelector = (e) => {
    if (e.target.value === "Most popular") {
      const payload = "popular";
      dispatch(filterBySort(payload));
    } else {
      const payload = e.target.value;
      dispatch(filterBySort(payload.toLowerCase()));
    }
  };
  const callDispatch = (e) => {
    if (e.target.value === "All") {
      const payload = "";
      dispatch(filterByCate(payload));
    } else {
      const payload = e.target.value;
      dispatch(filterByCate(payload));
    }
  };
  useEffect(() => {
    axios.get(CATEGORIES_API).then((res) => {
      setCategories(res.data.categories);
    });
  }, []);
  return (
    <>
      <Div>
        {/* <span>{totalCount} items</span> */}
        <SelectBox>
          <Select dark={changeTheme} onChange={callDispatch}>
            <option>All</option>
            {categories &&
              categories.map((category) => (
                <option key={category.category_id}>
                  {category.category_name}
                </option>
              ))}
          </Select>
          <Sort dark={changeTheme}>
            <select onChange={optionSelector}>
              <option>Most popular</option>
              <option>Recent</option>
              <option>Trending</option>
            </select>
          </Sort>
        </SelectBox>
        <SearchBox>
          <Search />
        </SearchBox>
        {isAdmin && (
          <Button dark={changeTheme} onClick={() => setIsModalActive(true)}>
            <span>REGISTER</span>
          </Button>
        )}
        {isModalActive && <RegisterModal cancleModal={cancleModal} />}
      </Div>
      <SearchMoileBox>
        <Search />
      </SearchMoileBox>
    </>
  );
};

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 16px;
  @media ${({ theme }) => theme.media.mobile} {
    font-size: 13px;
    margin-bottom: 10px;
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
  flex-direction: column;
  align-items: ${(props) => (props.delete ? "center" : "")};
  font-size: 16px;
  @media ${({ theme }) => theme.media.mobile} {
    font-size: 13px;
  }
  .alert {
    margin-top: 5px;
    font-size: 13px;
    color: red;
  }
`;

const Select = styled.select`
  display: none;
  margin-right: 10px;
  @media ${({ theme }) => theme.media.mobile} {
    display: block;
    font-size: 13px;
    color: ${(props) => (props.dark ? "#ffffff" : "black")};
  }
  option {
    color: ${(props) => (props.dark ? "#ffffff" : "black")};
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 7px 10px;
  background: ${(props) => (props.dark ? "#eeeeee" : "#ffffff")};
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 12px;
  font-weight: 300;
`;

const Sort = styled.div`
  select {
    color: ${(props) => (props.dark ? "#ffffff" : "black")};
    option {
      background-color: #ffffff;
      color: black;
      color: ${(props) => (props.dark ? "#ffffff" : "black")};
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    position: relative;
  }
`;

const SearchMoileBox = styled.div`
  display: none;
  @media ${({ theme }) => theme.media.mobile} {
    display: block;
    margin-bottom: 10px;
  }
`;

const SearchBox = styled.div`
  display: block;
  padding-right: 83px;
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;
export default ContentMenu;
