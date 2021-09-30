import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ExporterTabDataviewer from "./ExporterTabDataviewer";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { API_SURVER } from "../../../config";
import ExporterDetailTabList from "../../Sider/ExporterDetailTabList";

const ExporterTab = ({ title, type }) => {
  const { id } = useParams();
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  const [exporterCsv, setExporterCsv] = useState("default");
  const [isEditMode, setIsEditMode] = useState(false);
  const [modify, setModify] = useState(false);
  const [select, setSelect] = useState(0);
  const [moveId, setMoveId] = useState(false);
  const [deleteFile, setDeleteFile] = useState(false);
  const [target, setTarget] = useState("");

  const handleMode = () => {
    if (isEditMode) {
      setModify(false);
    }
    getData();
  };

  useEffect(() => {
    setExporterCsv("default");
    setSelect(0);
    setIsEditMode(false);
    setModify(false);
    getData();
  }, [type]);

  const getData = () => {
    const TOKEN = sessionStorage.getItem("access_token");
    const HEADER = TOKEN && { Authorization: TOKEN };
    const fileType = type.slice(1, type.lastIndexOf("."));

    // axios({
    //   method: "GET",
    //   url: `${API_SURVER}/exporter/${id}/tab?type=${fileType}`,
    //   headers: HEADER,
    // })
    //   .then((res) => {
    //     console.log(res);
    //     setExporterCsv(
    //       res.data.message === "No_Content" ? [] : res.data.message
    //     );
    //     res.data.message !== "No_Content"
    //       ? setSelect(
    //           res.data.message[0].file_id + "/" + res.data.message[0].version
    //         )
    //       : setSelect(0);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // const fileTab = halm;
    const fileTab = file;
    setExporterCsv(fileTab);
    setTarget(fileTab[0].version);
    setSelect(fileTab[0].file_id + "/" + fileTab[0].version);
  };

  return (
    <Div>
      <div>
        <TabListbox dark={changeTheme}>
          <ExporterDetailTabList
            type={type}
            id={id}
            modify={modify}
            exporterCsv={exporterCsv}
            setSelect={setSelect}
            select={select}
            isEditMode={isEditMode}
            setModify={setModify}
            handleMode={handleMode}
            setExporterCsv={setExporterCsv}
            moveId={moveId}
            setMoveId={setMoveId}
            deleteFile={deleteFile}
            setDeleteFile={setDeleteFile}
            target={target}
            setTarget={setTarget}
          />
        </TabListbox>
      </div>
      <Container>
        <div>
          <MobileTabListbox dark={changeTheme}>
            <ExporterDetailTabList
              mobile={true}
              type={type}
              id={id}
              modify={modify}
              exporterCsv={exporterCsv}
              setSelect={setSelect}
              select={select}
              isEditMode={isEditMode}
              setModify={setModify}
              handleMode={handleMode}
              setExporterCsv={setExporterCsv}
              moveId={moveId}
              setMoveId={setMoveId}
              deleteFile={deleteFile}
              setDeleteFile={setDeleteFile}
              target={target}
              setTarget={setTarget}
            />
          </MobileTabListbox>
        </div>
        <ExporterTabDataviewer
          setExporterCsv={setExporterCsv}
          setModify={setModify}
          select={select}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          modify={modify}
          handleMode={handleMode}
          title={title}
          type={type}
          exporterCsv={exporterCsv}
        ></ExporterTabDataviewer>
      </Container>
    </Div>
  );
};
export default ExporterTab;

const Div = styled.div`
  ${({ theme }) => theme.container};
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;

const TabListbox = styled.ul`
  width: 200px;
  margin-top: 60px;
  line-height: 1.5;
  background-color: ${(props) => (props.dark ? "#242526" : "#ffffff")};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const MobileTabListbox = styled.ul`
  display: none;
  line-height: 1.5;
  @media ${({ theme }) => theme.media.mobile} {
    display: block;
  }
`;

const Container = styled.div`
  ${({ theme }) => theme.container}
  position: relative;
  width: 800px;
`;

const file = [
  {
    file_content: "testtest",
    file_sha: "4b0a21d6fc27b50db43f673b02254a9c8871c1d9",
    file_id: "01",
    csv_desc: "test",
    csv_sha: "a837dff5ef8f09cd64b9131e3b47777544f2f240",
    file_url: "./contents/JMX Exporter/nc/0.1.1/test_alert.yaml",
    version: "0.1.1",
  },
  {
    file_content: "mango",
    file_sha: "4d5e62525ad7c834de7e1acc010da4743d4affd5",
    file_id: "01",
    csv_desc: "mango",
    csv_sha: "6923eb1e412d7f0e59f9fa0108b04fb8db6efb08",
    file_url: "./contents/JMX Exporter/nc/0.2.1/mango_alert.yaml",
    version: "0.2.1",
  },
  {
    file_content: "dd",
    file_sha: "9233c1a47d531a76b514363c615dab9a92ece9bc",
    file_id: "02",
    csv_desc: "dd",
    csv_sha: "6923eb1e412d7f0e59f9fa0108b04fb8db6efb08",
    file_url: "./contents/JMX Exporter/nc/0.2.1/d_alert.yaml",
    version: "0.2.4",
  },
  {
    file_content: "sdafsadfdsf",
    file_sha: "0ca2a3bae89e10abdd20d4f27b94c108e2020ec6",
    file_id: "03",
    csv_desc: "sadfsadf",
    csv_sha: "6923eb1e412d7f0e59f9fa0108b04fb8db6efb08",
    file_url: "./contents/JMX Exporter/nc/0.2.1/sadf_alert.yaml",
    version: "0.3.1",
  },
  {
    file_content: "sdafsadfdsf",
    file_sha: "0ca2a3bae89e10abdd20d4f27b94c108e2020ec6",
    file_id: "04",
    csv_desc: "sadfsadf",
    csv_sha: "6923eb1e412d7f0e59f9fa0108b04fb8db6efb08",
    file_url: "./contents/JMX Exporter/nc/0.2.1/마마마_alert.yaml",
    version: "0.3.1",
  },
];

const halm = [
  {
    file_content: "testtest",
    file_sha: "4b0a21d6fc27b50db43f673b02254a9c8871c1d9",
    file_id: "",
    csv_desc: "",
    csv_sha: "",
    file_url: "./contents/JMX Exporter/nc/helm/0.1.1",
    version: "0.2.1",
  },
  {
    file_content: "mango",
    file_sha: "4d5e62525ad7c834de7e1acc010da4743d4affd5",
    file_id: "",
    csv_desc: "",
    csv_sha: "",
    file_url: "./contents/JMX Exporter/nc/helm/0.2.1",
    version: "0.3.1",
  },
];
