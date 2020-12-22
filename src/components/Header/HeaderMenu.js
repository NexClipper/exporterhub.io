import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { PUBLIC_SERVICE, API_SURVER } from "../../config";

require("dotenv").config();

// const HEADER_MENUS = [
//   { title: "Company", link: "https://www.nexclipper.io/" },
//   { title: "Blog", link: "https://nexclipper.github.io/blog/" },
// ];

const HeaderMenu = () => {
  console.log(API_SURVER);
  const {
    push,
    location: { pathname },
  } = useHistory();
  // console.log(PUBLIC_SERVICE);
  return (
    <Div>
      {/* {HEADER_MENUS.map((menu, idx) => (
        <a href={menu.link} key={idx}>
          {menu.title}
        </a>
      ))} */}
      {/* <a href="https://github.com/NexClipper/exporterhub.io" target="_blank">
        <img src="assets/GitHub-Mark.png" alt="github" />
      </a> */}

      {PUBLIC_SERVICE === "n" && (
        <span
          onClick={() => {
            push("/admin");
            window.location.reload();
          }}
        >
          Admin
        </span>
      )}
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
  img {
    width: 38px;
    cursor: pointer;
  }
  span {
    margin-left: 30px;
    color: tomato;
    cursor: pointer;
  }
`;

export default HeaderMenu;
