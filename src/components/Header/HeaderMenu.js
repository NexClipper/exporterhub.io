import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { PUBLIC_SERVICE, API_SURVER } from "../../config";
import { GithubOutlined } from "@ant-design/icons";

require("dotenv").config();

// const HEADER_MENUS = [
//   { title: "Company", link: "https://www.nexclipper.io/" },
//   { title: "Blog", link: "https://nexclipper.github.io/blog/" },
// ];

const HeaderMenu = () => {
  // console.log(API_SURVER);
  const {
    push,
    location: { pathname },
  } = useHistory();
  // console.log(PUBLIC_SERVICE);
  return (
    <Div>
      <Button>ADMIN</Button>
      <Button>MY BUCKET</Button>
      <Button>SIGN OUT</Button>
      <Button>SIGN IN</Button>
      <GitHubLink
        href="https://github.com/NexClipper/exporterhub.io"
        target="_blank"
      >
        <GithubOutlined />
      </GitHubLink>

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
    cursor: pointer;
  }
`;

const Button = styled.button`
  color: #73c7aa;
  font-weight: 600;
  font-size: 14px;
  margin-left: 30px;
`;

const GitHubLink = styled.a`
  font-size: 35px;
  color: #cccccc;
`;

export default HeaderMenu;
