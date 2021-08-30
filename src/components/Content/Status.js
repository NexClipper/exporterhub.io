import React from "react";

import styled from "styled-components";

const StatusExporter = ({ dark, contents }) => {
  const { E, I, helm, A, alert, G, dashboard } = contents;
  return (
    <Wrapper dark={dark}>
      <Status title="Exporter(Hands on)" name="E" isActive={E}>
        E
      </Status>
      <Status title="Exporter(IaC)" name="I" isActive={I || helm}>
        I
      </Status>
      <Status title="Alert rule" name="A" isActive={A || alert}>
        A
      </Status>
      <Status title="Grafana or Dashboard" name="G" isActive={G || dashboard}>
        G
      </Status>
    </Wrapper>
  );
};

const palette = {
  E: "#FA26A0",
  I: "#0000FF",
  A: "#F51720",
  G: "#F8D210",
};

const Wrapper = styled.ul`
  float: left;
  display: flex;
  width: 50px;
  color: ${(props) => (props.dark ? "#9a9a9a" : "#c0c0c0")};
  font-size: 14.5px;
  justify-content: space-around;
`;
const Status = styled.li`
  width: 14px;
  text-align: center;
  color: ${(props) => props.isActive && palette[props.name]};
  font-weight: ${(props) => props.isActive && "bold"};
`;

export default StatusExporter;
