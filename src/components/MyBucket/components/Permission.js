import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import AdminContent from "../../Content/AdminContent";

//필터변경
import { filterByUser } from "../../../store/actions/exporterActions";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import { ADMIN_API } from "../../../config";

const Permission = () => {
  const [adminArr, setAdminArr] = useState([]);
  const token = sessionStorage.getItem("access_token");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    // const payload = { filterType: "value", data: e.target.value.toLowerCase() };
    // dispatch(filterByUser(payload));
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `${ADMIN_API}`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setAdminArr(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <PermissionHeader>
        <PermissionTitle>Permission</PermissionTitle>
        <Div>
          <SearchOutlined className="search_icon" />
          <input onChange={inputHandler} type="text" placeholder="Search" />
        </Div>
      </PermissionHeader>
      <AdminContainer>
        {adminArr.map((admin, index) => {
          return <AdminContent admin={admin} key={index} />;
        })}
      </AdminContainer>
    </Container>
  );
};

export default Permission;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  ${({ theme }) => theme.container}

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
    /* @media ${({ theme }) => theme.media.mobile} {
      width: 100%;
      margin: 0;
    } */
    width: 300px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding-left: 35px;
  }
`;

const PermissionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 45px;
`;

const PermissionTitle = styled.h4`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.08rem;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-right: auto;
  /* @media ${({ theme }) => theme.media.mobile} {
      position: relative;
      display: block;
      margin: 15px 0 0;
    } */
`;

const AdminContainer = styled.div`
  ${({ theme }) => theme.container}
  height: 400px;
  overflow-y: auto;
`;
