import styled from "styled-components";

const Footer = () => {
  return (
    <Div>
      <GetSupport>
        <Contact>
          <a href="https://www.nexclipper.io/" target="_blank">
            <Company />
            <p>nexclipper.io</p>
          </a>
        </Contact>
        <Contact>
          <a href="https://nexclipper.github.io/blog/" target="_blank">
            <Blog />
            <p>nexclipper.github.io/blog</p>
          </a>
        </Contact>
      </GetSupport>
      <Copyright> © 2020 NexClipper.</Copyright>
    </Div>
  );
};
const Div = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 80px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;
const GetSupport = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  p {
    fonst-size: 14px;
  }
`;
const Contact = styled.div`
  display: flex;
  a {
    display: flex;
  }
  img {
    width: 35px;
    margin-right: 8px;
    cursor: pointer;
  }
  p {
    color: black;
    margin-top: 8px;
  }
`;
const Company = styled.div`
  width: 50px;
  height: 50px;
  background: url(/assets/Company.png) no-repeat center;
  background-size: 30px;
  margin-top: -10px;
`;
const Blog = styled.div`
  width: 50px;
  height: 50px;
  background: url(/assets/blog.png) no-repeat center;
  background-size: 30px;
  margin-top: -10px;
`;
const Copyright = styled.div`
  font-size: 14px;
`;
export default Footer;
