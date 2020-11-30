import React from "react";
import styled from "styled-components";

const HEADER_MENUS = ["About", "Blog", "Company", "My account"];

const HeaderMenu = () => {
  return (
    <Div>
      {HEADER_MENUS.map(menu => (
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

export default HeaderMenu;
