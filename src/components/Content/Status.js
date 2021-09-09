import React from "react";

import styled from "styled-components";

const StatusExporter = ({ dark, contents }) => {
  const { I, helm, A, alert, G, dashboard } = contents;
  return (
    <Wrapper dark={dark}>
      <Status
        title="IaC(Infra as Code)"
        name="I"
        dark={dark}
        isActive={I || helm}
      >
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
  I: ["#00ffff", "#3300ff"],
  A: ["#F51720", "#F51720"],
  G: ["#daa520", "#ffc107"],
};

const Wrapper = styled.ul`
  display: flex;
  width: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  color: ${(props) => (props.dark ? "#9a9a9a" : "#c0c0c0")};
  font-size: 14.5px;
  justify-content: space-around;
  @media ${({ theme }) => theme.media.mobile} {
    margin: -2.5px 0 0 -5px;
    font-size: 13px;
  }
`;
const Status = styled.li`
  width: 14px;
  text-align: center;
  font-weight: ${(props) => props.isActive && "bolder"};
  color: ${(props) =>
    props.isActive &&
    (props.dark ? palette[props.name][0] : palette[props.name][1])};
`;

export default StatusExporter;
