import styled from "styled-components";

const InfoModal = ({ cancleModal }) => {
  return (
    <ModalContainer>
      <Div>
        <Container>
          <h1>Exporterhub</h1>
          <button onClick={cancleModal}>X</button>
          <p>
            Front-end application for the Prometheus Exporters community.
            ExporterHub.io is not just a curated list, but also provides
            exporter installation guide, alert rule configuration, and dashboard
            configuration.
          </p>
          <a href="https://github.com/NexClipper/exporterhub.io">
            More details
          </a>
        </Container>
      </Div>
    </ModalContainer>
  );
};
const ModalContainer = styled.div`
  position: absolute;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  background-color: #ffffff;
  width: 350px;
  height: 250px;
  h1 {
    color: navy;
  }
`;

export default InfoModal;
