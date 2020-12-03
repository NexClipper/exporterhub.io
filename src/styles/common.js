import { css, ThemeProvider } from "styled-components";

const color = {
  pryColor: "#DF691A",
  sedColor: "#85DBC3",
  pryColorHover: "#CA5303",
  sedColorHover: "#66C3A9"
};

const container = css`
  width: 1060px;
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

const flexCenterTop = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const width = {
  content: 700,
  card: 210,
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
  width,
  media
};

export default theme;
