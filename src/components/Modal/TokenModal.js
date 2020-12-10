import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { TOKEN_API } from "../../config";
import { getTokenState } from "../../store/actions/exporterActions";

const TokenModal = () => {
  const [tokenKey, setTokenKey] = useState("");
  const [failMessage, setFailMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const forwardToken = () => {
    setIsLoading(true);
    axios
      .post(TOKEN_API, {
        token: tokenKey
      })
      .then(res => {
        setIsLoading(false);
        dispatch(getTokenState(true));
        window.location.reload();
      })
      .catch(error => {
        setIsLoading(false);
        setFailMessage("Please make sure the Token key 1st");
      });
  };

  const inputTokenKey = e => {
    setTokenKey(e.target.value);
  };

  return (
    <ModalContainer>
      <Div>
        <img src="assets/image.png" alt="modal" />
        {isLoading ? (
          <Loader>
            <div></div>
            <span>Please wait few minutes</span>
          </Loader>
        ) : (
          <Container>
            <FailMessage>{failMessage}</FailMessage>
            <input
              className="inputDiv"
              onChange={inputTokenKey}
              placeholder="Github Personal Access Token"
            ></input>
            <span
              onClick={() =>
                window.open("https://github.com/settings/tokens/new", "_blank")
              }
            >
              Get token here!!!
            </span>
          </Container>
        )}
        <button onClick={forwardToken}>Submit</button>
      </Div>
    </ModalContainer>
  );
};
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const Div = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  background-color: white;
  ${({ theme }) => theme.positionCenter};
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 50px;
  }
  button {
    position: absolute;
    bottom: 50px;
    width: 230px;
    height: 35px;
    border-radius: 20px;
    background-color: #85dbc3;
    color: #ffffff;
    font-size: 13px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  input {
    ${({ theme }) => theme.ModalButton}
    margin-bottom : 10px
  }
  span {
    cursor: pointer;
    font-weight: bold;
    color: #55aac1;
  }
`;

const FailMessage = styled.p`
  height: 10px;
  margin-bottom: 15px;
  text-align: center;
  font-size: 13px;
  color: red;
`;

const Spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  margin: 20px 0;
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  div {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #85dbc3;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    animation: ${Spin} 2s linear infinite;
    margin-bottom: 10px;
  }
  span {
    color: #55aac1;
  }
`;

export default TokenModal;
