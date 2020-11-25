import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <Div>
      <img
        src="https://exporterhub.io/assets/img/exporterhub_logo.png"
        alt="exporterhub logo"
      />
      <p>
        ExporterHub.io is a front-end application for the Prometheus Exporters
        community. ExporterHub.io is not just a curated list, but also provides
        exporter installation guide, alert rule configuration, and dashboard
        configuration.
      </p>
    </Div>
  );
};
const Div = styled.div`
  width: 300px;
  img {
    width: 150px;
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
  }
`;
export default Logo;
