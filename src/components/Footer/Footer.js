import styled from "styled-components";
import { PhoneTwoTone } from "@ant-design/icons";

const Footer = () => {
  return (
    <Div>
      <GetSupport>
        <h3>GET SUPPORT</h3>
        <p>nexclipper@nexclipper.io</p>
      </GetSupport>
      <Contacts>
        <div>
          <PhoneTwoTone />
          <span>+82(02) 533-8622</span>
        </div>
        <Icons>
          <a href="https://nexclipper.github.io/blog/">
            <img src="assets/blog.png" alt="blog" />
          </a>
          <a href="https://www.nexclipper.io/">
            <img src="assets/NexClipper_Icon.png" alt="company" />
          </a>
        </Icons>
      </Contacts>
      <Address>
        <h3>ADDRESS</h3>
        <p>11F, 428 Seolleung-ro, Gangnam-gu, Seoul, 06192 South Korea</p>
      </Address>
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
  justify-content: space-between;
  height: 50px;
`;
const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Icons = styled.div`
  margin-top: 10px;
  img {
    width: 35px;
    height: 30px;
    margin-right: 5px;
    cursor: pointer;
  }
`;
const Address = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
`;
const Copyright = styled.div`
  font-size: 14px;
`;
export default Footer;
