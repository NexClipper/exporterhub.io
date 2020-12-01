import React from "react";
import styled from "styled-components";
import Content from "../components/Content/Content";
import Nav from "../components/Nav/Nav";
import Sider from "../components/Sider/Sider";

const AdminPage = () => {
  return (
    <Main>
      <Nav />
      <Container>
        <Sider />
        <Content />
      </Container>
      <RegisterModal>
        <p>X</p>
        <input></input>
        <select>
          <option>1</option>
          <option>2</option>
        </select>
        <button>등록</button>
      </RegisterModal>
    </Main>
  );
};

const Main = styled.main`
  background-color: #fafafa;
  width: 100%;
`;

const Container = styled.div`
  ${({ theme }) => theme.container};
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;

const RegisterModal = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  ${({ theme }) => theme.positionCenter};
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    width: 100%;
    margin-bottom: 100px;
    text-align: end;
  }
  input {
    width: 100px;
  }
  select {
    width: 100px;
  }
`;

export default AdminPage;
