import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { adminAdd, adminTypeAdd } from "../../store/actions/exporterActions";

const UsersContent = ({ user, handleAdminAdd, handlePending }) => {
  return (
    <>
      <UserCard
        onClick={(e) => handleAdminAdd(e)}
        name={user.username}
        id={user.usertype}
        type={user.usertype === "user"}
      >
        {user.usertype !== "user" && <Disabled />}
        <UserInfo>
          <ProfileImg src={user.profileImageUrl} />
          <Info>
            <h4>{user.username}</h4>
            <span>{user.usertype}</span>
          </Info>
        </UserInfo>
        {user.usertype === "admin pending" && (
          <UserInvitationCancel
            name={user.username}
            id={user.usertype}
            onClick={handlePending}
          >
            Cancel
          </UserInvitationCancel>
        )}
      </UserCard>
    </>
  );
};

export default UsersContent;

const UserCard = styled.button`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  background-color: #f7f9fc;
  padding: 10px;
  cursor: ${(props) => (props.type ? "pointer" : "default")};

  &:hover {
    border: ${(props) => props.type && "1px solid #808080"};
    border-radius: 4px;
  }
`;

const Disabled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.6;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  border-radius: 50%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
`;

const UserInvitationCancel = styled.button`
  text-align: center;
  width: 65px;
  height: 25px;
  border-radius: 24px;
  padding: 5px;
  font-size: 13px;
  color: #c6474e;
  background-color: #fafbfc;
  border: 1px solid #d9dbdb;
  cursor: pointer;
  user-select: none;
  z-index: 50;
  opacity: 0.6;
  &:hover {
    opacity: 1;
    background-color: #f1f1f1;
  }
`;
