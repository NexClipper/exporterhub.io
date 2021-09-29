import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import AdminDeleteModal from "../Modal/AdminDeleteModal";
import { adminDelete } from "../../store/actions/exporterActions";

const AdminContent = ({
  admin,
  isAdminDeleteModalActive,
  setIsAdminDeleteModalActive,
  setSelectedAdmiin,
}) => {
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  const handleAdminDelete = (e) => {
    setIsAdminDeleteModalActive(!isAdminDeleteModalActive);
    setSelectedAdmiin(e.target.name);
  };

  return (
    <AdminCard dark={changeTheme}>
      <AdminInfo>
        <ProfileImg src={admin.profileImageUrl} />
        <Info dark={changeTheme}>
          <h4>{admin.username}</h4>
          <span>{admin.usertype}</span>
        </Info>
      </AdminInfo>
      <AdminResign
        name={admin.username}
        adminName={admin.username}
        onClick={(e) => handleAdminDelete(e)}
      >
        Resign
      </AdminResign>
    </AdminCard>
  );
};

export default AdminContent;

const AdminCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-bottom: 40px;
  padding: 0px 20px 0px 30px;
  background-color: ${(props) => (props.dark ? "#242526" : "#ffffff")};
`;

const AdminInfo = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;
  border-radius: 50%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    color: #2767cf;
    margin-bottom: 5px;
  }

  span {
    color: ${(props) => (props.dark ? "#999999" : "#596068")};
  }
`;

const AdminResign = styled.button`
  text-align: center;
  width: 64px;
  height: 27px;
  border-radius: 27px;
  padding: 5px;
  color: #c6474e;
  background-color: #fafbfc;
  border: 1px solid #d9dbdb;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #c6474e;
  }
`;
