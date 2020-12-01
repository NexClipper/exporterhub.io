import React from "react";
import styled from "styled-components";

const ADMIN_MENUS = ["Register"];

const AdminMenu = () => {
  return (
    <Div>
      {ADMIN_MENUS.map(menu => (
        <span>{menu}</span>
      ))}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
  span {
    margin-left: 30px;
  }
`;

export default AdminMenu;
