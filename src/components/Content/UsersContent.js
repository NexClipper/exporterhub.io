import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { adminAdd, adminTypeAdd } from "../../store/actions/exporterActions";
import AdminAddModal from "../Modal/AdminAddModal";

const UsersContent = ({
  user,
  addAdmin,
  isAdminAddModalActive,
  cancleAdminAddModal,
  setIsAdminAddModalActive,
  setSearchUser,
}) => {
  const [userName, setUserName] = useState();
  const [userType, setUserType] = useState();

  const handleAdminAdd = (e) => {
    if (e.target.name === "admin" || e.target.name === "admin pending") {
      setIsAdminAddModalActive(false);
    } else if (e.target.name === "user") {
      setUserName(e.target.id);
      setUserType(e.target.name);
      setIsAdminAddModalActive(true);
    }
  };
  return (
    <>
      <UserCard
        id={user.username}
        name={user.usertype}
        onClick={(e) => handleAdminAdd(e)}
        type={user.usertype === "user"}
      >
        {user.usertype !== "user" && <Disabled />}
        <ProfileImg src={user.profileImageUrl} />
        <Info>
          <h4>{user.username}</h4>
          <span>{user.usertype}</span>
        </Info>
        {isAdminAddModalActive && (
          <AdminAddModal
            userName={userName}
            userType={userType}
            // user={user}
            addAdmin={addAdmin}
            cancleAdminAddModal={cancleAdminAddModal}
            setSearchUser={setSearchUser}
          />
        )}
      </UserCard>
    </>
  );
};

export default UsersContent;

const UserCard = styled.button`
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
