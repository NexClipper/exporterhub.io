import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ContentExporters from "../../Content/ContentExporters";
import { BUCKET_API } from "../../../config";

const Fork = ({ setIsForkModalActive, isForkModalActive }) => {
  const [forkedExporters, setForkedExporters] = useState([]);
  const change = isForkModalActive;

  useEffect(() => {
    getForkedExporter();
  }, []);

  useEffect(() => {
    getForkedExporter();
  }, [change]);

  const getForkedExporter = () => {
    axios({
      method: "GET",
      url: `${BUCKET_API}`,
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
      },
    })
      .then((res) => {
        setForkedExporters(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(forkedExporters);

  return (
    <Container>
      <ContentExporters
        exporters={forkedExporters}
        fork={true}
        mybucket={true}
        setIsForkModalActive={setIsForkModalActive}
      />
      {forkedExporters === undefined && (
        <Notice>No exporter in your bucket now. please fork repo.</Notice>
      )}
    </Container>
  );
};

export default Fork;

const Container = styled.div`
  ${({ theme }) => theme.container}
  position: relative;
`;

const Notice = styled.h5`
  padding-top: calc((100vh - 600px) / 3);
  color: #c2c2c2;
  font-size: 14px;
  text-align: center;
`;
