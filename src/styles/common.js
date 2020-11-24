import { css } from "styled-components";

const color = {
  pryColor: "#DF691A",
  sedColor: "#85DBC3",
  pryColorHover: "#CA5303",
  sedColorHover: "#66C3A9"
};

const container = css`
  width: 1170px;
  margin: 0 auto;
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

const theme = {
  color,
  container,
  positionCenter,
  flexCenter
};

export default theme;
