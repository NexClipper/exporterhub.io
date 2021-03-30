import React from "react";
import styled from "styled-components";

const UsersContent = ({ user, addAdmin }) => {
  return (
    <>
      <UserCard
        onClick={() => addAdmin(user.username, user.usertype)}
        type={user.usertype === "user"}
      >
        {user.usertype !== "user" && <Disabled />}
        <ProfileImg src={user.profileImageUrl} />
        <Info>
          <h4>{user.username}</h4>
          <span>{user.usertype}</span>
        </Info>
      </UserCard>
    </>
  );
};

export default UsersContent;

const UserCard = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #f7f9fc;
  padding: 10px 0px 10px 10px;
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
