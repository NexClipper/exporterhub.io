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
  // const [mdSha, setMdSha] = useState();
  // const [codeSha, setCodeSha] = useState();
  const [exporterCsv, setExporterCsv] = useState("default");
  const [isEditMode, setIsEditMode] = useState(false);
  const [modify, setModify] = useState(false);
  const [select, setSelect] = useState(0);

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

    axios({
      method: "GET",
      url: `${API_SURVER}/exporter/${id}/tab?type=${fileType}`,
      headers: HEADER,
    })
      .then((res) => {
        setExporterCsv(
          res.data.message === "No_Content" ? [] : res.data.message
        );
        res.data.message !== "No_Content"
          ? setSelect(data.message[0].file_id)
          : setSelect(0);
      })
      .catch((err) => {
        console.log(err);
      });

    // setExporterCsv(data.message === [] ? [] : data.message);
    // data.message.length !== 0
    //   ? setSelect(data.message[0].file_id)
    //   : setSelect(0);
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

const data = {
  message: [
    {
      file_content: "mango_is_happy",
      file_url:
        "https://api.github.com/repos/Exporterhubv4/exporterhub.io/contents/contents/OpenStack/OpenStack_alert/Openstack_test1_alert.yaml",
      file_sha: "47b22a2a469a4fe164c2ae62c2413c09586a21b0",
      csv_sha: "c3f35177c14478c99dcc005dba8ae4900ac04991",
      file_id: "01",
      csv_desc: "teasdfasdfasdfsdafdfsadf",
    },
    {
      file_content: "need change",
      file_url:
        "https://api.github.com/repos/Exporterhubv4/exporterhub.io/contents/contents/OpenStack/OpenStack_alert/Openstack_test_alert.yaml",
      file_sha: "5335d5f2a06b228a8ec89b52f5e7981d8eb3d3f2",
      csv_sha: "c3f35177c14478c99dcc005dba8ae4900ac04991",
      file_id: "02",
      csv_desc: "mango",
    },
    {
      file_content: `expr: node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes * 100 < 10
                 for: 2m
                 labels:
                  severity: warning
                annotations:
                   summary: Host out of memory (instance {{ $labels.instance }})
                  description: "Node memory is filling up (< 10% left)\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}
             "`,
      file_url:
        "https://github.com/NexClipper/exporterhub.io/tree/main/contents/Node-Exporter/HostOutOfMemory_alert.yaml",
      file_sha: "5335d5f2a06b228a8ec89b52f5e7981d8eb3d3f2",
      csv_sha: "c3f35177c14478c99dcc005dba8ae4900ac04991",
      file_id: "03",
      csv_desc:
        "Host network interfaces are probably sending too mucs sdf dfsdfsdfd  ss ssss sd sdffgdfgfh  fghsdfsdgdfh dfgfd gdfg dfg h data",
    },
  ],
};

// yaml_content,
//       yaml_url,
//       yaml_sha,
//       csv_sha,
//       yaml_id,
//       csv_desc,

// const alertRule = [
//   {
//     id: 3,
//     description:
//       "Node memory is filling up (< 10% left)  VALUE = {{ $value }} LABELS = {{ $labels }}",
//     yamlContent: `expr: node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes * 100 < 10
//                 for: 2m
//                 labels:
//                   severity: warning
//                 annotations:
//                   summary: Host out of memory (instance {{ $labels.instance }})
//                   description: "Node memory is filling up (< 10% left)\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}
//             "`,
//     githubInfo:
//       "https://github.com/NexClipper/exporterhub.io/tree/main/contents/Node-Exporter/HostOutOfMemory.yaml",
//   },
//   {
//     id: 5,
//     description:
//       "Host network interfaces are probably sending too much data  (< 10% left)  VALUE = {{ $value }} LABELS = {{ $labels }}",
//     yamlContent: ` expr: sum by (instance) (rate(node_network_transmit_bytes_total[2m])) / 1024 / 1024 > 100
//                 for: 5m
//                 labels:
//                   severity: warning
//                 annotations:
//                   summary: Host unusual network throughput out (instance {{ $labels.instance }})
//                   description: "Host network interfaces are probably sending too much data (> 100 MB/s)\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"
//             `,
//     githubInfo:
//       "https://github.com/NexClipper/exporterhub.io/tree/main/contents/Node-Exporter/HostMemoryUnderMemoryPressure.yaml",
//   },
//   {
//     id: 6,
//     description:
//       "Host network interfaces are probably receiving too much data ",
//     yamlContent: ` expr: sum by (instance) (rate(node_network_receive_bytes_total[2m])) / 1024 / 1024 > 100
//                 for: 5m
//                 labels:
//                   severity: warning
//                 annotations:
//                   summary: Host unusual network throughput in (instance {{ $labels.instance }})
//                   description: "Host network interfaces are probably receiving too much data (> 100 MB/s)\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"
//             `,
//     githubInfo:
//       "https://github.com/NexClipper/exporterhub.io/tree/main/contents/Node-Exporter/HostUnusualNetworkThroughputIn.yaml",
//   },
// ];
