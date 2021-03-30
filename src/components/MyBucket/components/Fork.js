import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BUCKET_API } from "../../../config";
import { loadMoreData } from "../../../store/actions/exporterActions";
import ContentExporters from "../../Content/ContentExporters";

const Fork = ({ setIsForkModalActive }) => {
  const [forkedExporters, setForkedExporters] = useState([]);

  const { filteredExporters, exposedExporters, totalCount } = useSelector(
    (store) => store.exporterReducer
  );

  useEffect(() => {
    getForkedExporter();
  }, []);

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

  const tokenState = useSelector((store) => store.tokenReducer);
  const dispatch = useDispatch();
  const [scrollAct, setScrollAct] = useState(false);

  const infiniteScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight * 0.95 && !scrollAct) {
      setScrollAct(true);
      dispatch(loadMoreData(filteredExporters));
      setScrollAct(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => window.removeEventListener("scroll", infiniteScroll);
  }, []);

  return (
    <Container>
      {/* <ReadmeTitle>Fork</ReadmeTitle> */}
      <ContentExporters
        // exporters={exposedExporters}
        exporters={forkedExporters}
        fork={true}
        mybucket={true}
        setIsForkModalActive={setIsForkModalActive}
      />
    </Container>
  );
};

export default Fork;

const Container = styled.div`
  ${({ theme }) => theme.container}
  position: relative;
`;

const ReadmeTitle = styled.h4`
  margin-bottom: 45px;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.08rem;
`;
