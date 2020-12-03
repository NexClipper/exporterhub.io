import React from "react";
import styled from "styled-components";

const HEADER_MENUS = [
  { title: "company", link: "https://www.nexclipper.io/" },
  { title: "blog", link: "https://nexclipper.github.io/blog/" }
];

const HeaderMenu = () => {
  return (
    <Div>
      {HEADER_MENUS.map(menu => (
        <a href={menu.link}>{menu.title}</a>
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
  a {
    margin-left: 30px;
    color: #000000;
    :hover {
      cursor: pointer;
    }
  }
`;

export default HeaderMenu;
