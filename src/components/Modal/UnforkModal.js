import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { SERVER } from "../../config";

const UnforkModal = ({ cancleModal }) => {
  const selectedRepo = useSelector((store) => store.unforkReducer);

  const handleUnfork = (option) => {
    let UNFORK_API;

    if (option === 0) {
      console.log("Unfork from mybucket only");
      console.log(selectedRepo);
      UNFORK_API = `${SERVER}/user/bucket?exporter-id=${selectedRepo}`;
    } else if (option === 1) {
      console.log("Unfork from GitHub");
      console.log(selectedRepo);
      UNFORK_API = `${SERVER}/user/bucket?exporter-id=${selectedRepo}&deleteall=yes`;
    }

    axios({
      method: "DELETE",
      url: `${UNFORK_API}`,
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
    })
      .then((res) => {
        cancleModal();
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ModalContainer>
      <Div>
        <img src="assets/image.png" alt="modal" />
        <Container>
          <button onClick={() => handleUnfork(0)}>Remove from my bucket</button>
          <button onClick={() => handleUnfork(1)}>Unfork with GitHub</button>
        </Container>
        <Back onClick={cancleModal}>Back</Back>
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
  height: fit-content;
  background-color: white;
  padding: 50px 0;
  ${({ theme }) => theme.positionCenter};
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;

  button {
    width: 250px;
    margin-bottom: 10px;
    background-color: #eef0f1;
    padding: 10px 0;
    text-align: center;
    border-radius: 3px;
    color: #9e9e9e;

    &:hover {
      color: #c6474e;
    }
  }
`;

const Back = styled.div`
  width: 230px;
  height: 35px;
  border-radius: 20px;
  background-color: #85dbc3;
  color: #ffffff;
  font-size: 13px;
  font-weight: 400;
  ${({ theme }) => theme.flexCenter};
  cursor: pointer;
`;

export default UnforkModal;
