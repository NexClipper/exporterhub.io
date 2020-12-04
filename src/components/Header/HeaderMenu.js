import { useHistory } from "react-router-dom";
import styled from "styled-components";

const HEADER_MENUS = [
  { title: "company", link: "https://www.nexclipper.io/" },
  { title: "blog", link: "https://nexclipper.github.io/blog/" }
];

const HeaderMenu = () => {
  const { push } = useHistory();
  return (
    <Div>
      {HEADER_MENUS.map(menu => (
        <a href={menu.link}>{menu.title}</a>
      ))}
      <span
        onClick={() => {
          push("/admin");
          window.location.reload();
        }}
      >
        Admin
      </span>
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
    cursor: pointer;
  }
  span {
    margin-left: 30px;
    color: tomato;
    cursor: pointer;
  }
`;

export default HeaderMenu;
