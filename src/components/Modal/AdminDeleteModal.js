import React from "react";
import styled from "styled-components";

const AdminDeleteModal = ({
  cancleAdminDeleteModal,
  adminName,
  deleteAdmin,
}) => {
  return (
    <ModalContainer>
      <Div>
        <h4>Are you sure to resign this admin ?</h4>
        <Container>
          <button onClick={() => deleteAdmin(adminName)}>Yes</button>
          <button onClick={cancleAdminDeleteModal}>Cancle</button>
        </Container>
      </Div>
    </ModalContainer>
  );
};

export default AdminDeleteModal;

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
  width: 310px;
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
