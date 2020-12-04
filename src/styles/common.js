import { css } from "styled-components";

const color = {
  pryColor: "#DF691A",
  sedColor: "#85DBC3",
  pryColorHover: "#CA5303",
  sedColorHover: "#66C3A9"
};

const container = css`
  width: 1060px;
  margin: 0 auto;

  @media (max-width: 770px) {
    width: 100%;
  }
`;

const positionCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexCenterTop = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalButton = css`
  width: 200px;
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.3);
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
`;

const width = {
  content: 800,
  card: 250,
  contentOnM: 90
};

const media = {
  mobile: `(max-width:770px)`
};

const theme = {
  color,
  container,
  positionCenter,
  flexCenter,
  flexCenterTop,
  ModalButton,
  width,
  media
};

export default theme;
