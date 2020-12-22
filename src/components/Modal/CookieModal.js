import styled from "styled-components";
import { useState } from "react";

const CookieModal = () => {
  const [showOK, setShowOK] = useState(true);
  const OKClick = () => {
    setShowOK(false);
  };
  return (
    <Div>
      {showOK && (
        <OKModal>
          <p>
            By continuing to use our website, you acknowledge the use of
            cookies.
          </p>
          <Back onClick={OKClick}>OK</Back>
        </OKModal>
      )}
    </Div>
  );
};

const Div = styled.div``;
const OKModal = styled.div`
  background-color: #ff2a17;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 12px;
  color: #ffffff;
  font-weight: 600px;
  ${({ theme }) => theme.flexCenter};
  cursor: pointer;
  padding: 7px 12px;
`;
const Back = styled.div`
  width: 50px;
  height: 30px;
  border-radius: 20px;
  margin-left: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  font-size: 13px;
  font-weight: 400;
  ${({ theme }) => theme.flexCenter};
  cursor: pointer;
`;

export default CookieModal;
