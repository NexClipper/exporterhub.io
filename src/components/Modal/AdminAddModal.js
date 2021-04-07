import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const AdminAddModal = ({
  user,
  userName,
  userType,
  addAdmin,
  cancleAdminAddModal,
  setSearchUser,
}) => {
  const handleModal = () => {
    cancleAdminAddModal();
    setSearchUser("");
  };
  console.log("a", userName);
  console.log("b", userType);
  return (
    <ModalContainer>
      <Div>
        <h4>Are you sure to invite "this user" as an admin ?</h4>
        <Container>
          <button onClick={() => addAdmin(userName, userType)}>Yes</button>
          <button onClick={handleModal}>Cancle</button>
        </Container>
      </Div>
    </ModalContainer>
  );
};

export default AdminAddModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const Div = styled.div`
  width: 400px;
  height: fit-content;
  background-color: white;
  padding: 20px;
  ${({ theme }) => theme.positionCenter};
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 250px;
    margin-top: 20px;
    background-color: #eef0f1;
    padding: 10px 0;
    text-align: center;
    border-radius: 3px;
    color: #000000;
    font-weight: 500;

    &:hover {
      color: #c6474e;
    }
  }
`;
