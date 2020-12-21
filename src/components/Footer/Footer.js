import styled from "styled-components";

const Footer = () => {
  return (
    <Div>
      <GetSupport>
        <Top>
          <a href="https://www.nexclipper.io/">
            <img src="assets/NexClipper_Icon.png" alt="company" />
          </a>
          <p>support@nexclipper.io</p>
        </Top>
        <Bottom>
          <a href="https://nexclipper.github.io/blog/">
            <img src="assets/blog.png" alt="blog" />
          </a>
          <p>nexclipper.github.io/blog</p>
        </Bottom>
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
const Top = styled.div`
  display: flex;
  img {
    width: 35px;
    height: 30px;
    margin-right: 7px;
    cursor: pointer;
  }
`;
const Bottom = styled.div`
  display: flex;
  img {
    width: 35px;
    height: 30px;
    margin-right: 7px;
    cursor: pointer;
  }
`;

const Copyright = styled.div`
  font-size: 14px;
`;
export default Footer;
