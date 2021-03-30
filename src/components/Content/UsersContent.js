import React from "react";
import styled from "styled-components";

const UsersContent = ({ user, addAdmin }) => {
  return (
    <UserCard onClick={() => addAdmin(user.username)}>
      <ProfileImg src={user.profileImageUrl} />
      <Info>
        <h4>{user.username}</h4>
        <span>{user.usertype}</span>
      </Info>
    </UserCard>
  );
};

export default UsersContent;

const UserCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #f7f9fc;
  padding: 10px 0px 10px 10px;
  /* margin-bottom: 10px; */
  cursor: pointer;

  &:hover {
    border: 1px solid #808080;
    border-radius: 4px;
    /* transform: translate(2px); */
  }
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
