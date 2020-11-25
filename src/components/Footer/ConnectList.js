import React from "react";
import styled from "styled-components";
import {
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled
} from "@ant-design/icons";

const ConnectList = () => {
  return (
    <Div>
      <ul>
        <li className="title">Contacts</li>
        <li>Github</li>
        <li>Issues</li>
        <li>Slack</li>
      </ul>
      <Icons>
        <FacebookFilled className="first_icon" />
        <TwitterSquareFilled className="second_icon" />
        <LinkedinFilled className="last_icon" />
      </Icons>
    </Div>
  );
};
const Div = styled.div`
  li {
    margin-bottom: 10px;
    text-align: center;
  }
  li.title {
    font-size: 18px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.7);
  }
`;
const Icons = styled.div`
  text-align: center;
  margin-top: 30px;
  .first_icon {
    font-size: 25px;
    margin-right: 10px;
  }
  .second_icon {
    font-size: 25px;
    margin-right: 10px;
  }
  .last_icon {
    font-size: 25px;
  }
`;
export default ConnectList;
