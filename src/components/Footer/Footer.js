import styled from "styled-components";
import { useSelector } from "react-redux";
const Footer = () => {
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  return (
    <Div dark={changeTheme}>
      <Container dark={changeTheme}>
        <ul>
          <h3>PROJECT</h3>
          <li>
            <a
              href="https://www.nexclipper.io/"
              target="_blank"
              rel="noreferrer"
            >
              nexclipper.io
            </a>
          </li>
          <li>
            <a
              href="https://nexclipper.github.io/blog/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
        </ul>
        <ul>
          <h3>COMMUNITY</h3>
          <li>
            <a
              href="https://github.com/NexClipper"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://nexclipper.slack.com/messages/C01QMS57AJG"
              target="_blank"
              rel="noreferrer"
            >
              Slack
            </a>
          </li>
        </ul>
        <ul>
          <h3>ABOUT</h3>
          <li>ExporterHub is an</li>
          <li>Open Source</li>
          <li>project licensed under the MIT</li>
        </ul>
        <Copyright dark={changeTheme}>
          <p>© 2021 NexClipper.</p>
          <Company />
        </Copyright>
      </Container>
    </Div>
  );
};
const Div = styled.div`
  position: relative;
  bottom: 0;
  padding: 40px 0 60px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.dark && "#242526"};
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;
const Container = styled.div`
  ${({ theme }) => theme.container}
  position: relative;
  display: flex;
  ul {
    width: 130px;
    margin-right: 50px;
    font-size: 12px;
    &:nth-child(3) {
      width: fit-content;
    }
    h3 {
      color: ${(props) => (props.dark ? "#f5f6f7" : "#575757")};
      margin-bottom: 13px;
    }
    li {
      color: #8a8a8a;
      margin-bottom: 7px;
      a {
        color: inherit;
        &:hover {
          border-bottom: 0.5px solid #8a8a8a;
        }
      }
    }
  }
`;
const Copyright = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  p {
    font-size: 14px;
    margin-bottom: 12px;
    color: ${(props) => props.dark && "#f5f6f7"};
  }
`;
const Company = styled.div`
  width: 50px;
  height: 50px;
  background: url(/assets/Company.png) no-repeat center;
  background-size: 30px;
  margin: 0 auto;
`;
export default Footer;
