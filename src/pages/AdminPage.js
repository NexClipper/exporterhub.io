import React from "react";
import styled from "styled-components";
import Content from "../components/Content/Content";
import Nav from "../components/Nav/Nav";
import Sider from "../components/Sider/Sider";
import RegisterModal from "../components/Modal/RegisterModal";

const AdminPage = () => {
  return (
    <Main>
      <Nav />
      <Container>
        <Sider />
        <Content />
      </Container>
      <RegisterModal />
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

export default AdminPage;
