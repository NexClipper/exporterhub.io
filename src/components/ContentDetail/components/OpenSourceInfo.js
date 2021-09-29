import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import DescriiptionSave from "./DescriptionSave";
import { HiOutlineSave } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router";
import { FiEdit } from "react-icons/fi";
import { BiUndo } from "react-icons/bi";
import { RiShoppingBasketLine } from "react-icons/ri";
import { ImLink } from "react-icons/im";
import { BUCKET_API, STAR_API } from "../../../config";
import { useSelector } from "react-redux";
import { Fragment } from "react";
const OpenSourceInfo = ({
  EXPORTER_API,
  desState,
  setDesState,
  exporterInfo,
  isEditMode,
  setEditMode,
  githubContent,
  forkState,
  starState,
  setStarState,
  setForkState,
  starNumber,
  setStarNumber,
  type,
  file,
}) => {
  const isAdmin = useSelector((store) => store.adminReducer);
  const TOKEN = sessionStorage.getItem("access_token");
  const [alertModal, setAlertModal] = useState(false);
  const [alertMsg, setAlertMsg] = useState();
  const editBtnText = desState ? "Edit" : "Create a new profile";
  const [editState, setEditState] = useState("");
  const changeTheme = useSelector((store) => store.darkThemeReducer);
  const { id } = useParams();

  const descriptionEncode = (description) => {
    let descriptionEncodeValue = JSON.stringify(description)
      .replace(/\\n/g, "@>@")
      .replace(/\\"/g, "@$#");
    return descriptionEncodeValue.slice(1).slice(0, -1);
  };

  const descriptionDecode = (description) => {
    let descriptionDecodeValue = description
      .replace(/@>@/g, "\n")
      .replace(/@\$#/g, '"');
    return descriptionDecodeValue;
  };

  const handleSave = () => {
    if (desState === "") {
      axios({
        method: "POST",
        url: `${EXPORTER_API}/${id}`,
        headers: {
          Authorization: sessionStorage.getItem("access_token"),
        },
        data: {
          description: descriptionEncode(editState),
        },
      })
        .then((res) => {
          setDesState(descriptionDecode(res.data.description));
          handleEdit();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios({
        method: "PATCH",
        url: `${EXPORTER_API}/${id}`,
        headers: {
          Authorization: sessionStorage.getItem("access_token"),
        },
        data: {
          description: descriptionEncode(editState),
        },
      })
        .then((res) => {
          setDesState(descriptionDecode(res.data.description));
          handleEdit();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const addToFork = async (exporterInfo) => {
    if (!TOKEN) {
      setAlertMsg("You need to Sign in");
      showAlertModal();
      return;
    }
    if (!forkState) {
      await axios({
        method: "POST",
        url: `${BUCKET_API}`,
        headers: {
          Authorization: TOKEN,
        },
        data: {
          exporter_id: exporterInfo["exporter_id"],
        },
      })
        .then(() => {
          setForkState(true);
          setAlertMsg("This Exporter has been forked with Github");
        })
        .then(() => {
          showAlertModal();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleStar = () => {
    if (!TOKEN) {
      setAlertMsg("You need to Sign in");
      showAlertModal();
      return;
    }
    starState
      ? setStarNumber((prev) => prev - 1)
      : setStarNumber((prev) => prev + 1);
    axios({
      method: "POST",
      url: `${STAR_API}`,
      headers: {
        Authorization: TOKEN,
      },
      data: {
        exporter_id: exporterInfo["exporter_id"],
      },
    });

    setStarState(!starState);
  };

  const handleEdit = () => {
    setEditMode(!isEditMode);
  };

  const showAlertModal = () => {
    setAlertModal(true);
    setTimeout(() => {
      setAlertModal(false);
    }, 3000);
  };

  return (
    <Info>
      <LogoImg
        href={exporterInfo.repository_url}
        target="_blank"
        rel="noreferrer"
      >
        <HeaderLogo src={exporterInfo.logo_url} />
      </LogoImg>
      <InfoWrap>
        <HeaderInfo>
          <HeaderBox>
            <HeaderTitle
              href={exporterInfo.repository_url}
              target="_blank"
              rel="noreferrer"
            >
              <Name dark={changeTheme}>{exporterInfo.name}</Name>
            </HeaderTitle>
            <Category dark={changeTheme}>{exporterInfo.category}</Category>
            <Button
              dark={changeTheme}
              onClick={() => addToFork(exporterInfo)}
              forkState={forkState}
              fork="fork"
            >
              <span>{!forkState && <RiShoppingBasketLine />}</span>
              {forkState ? (
                <a
                  href={exporterInfo.forked_repository_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImLink className="link" />
                  Link to forked Exporter
                </a>
              ) : (
                <span>Fork</span>
              )}
            </Button>

            <StarIcon
              dark={changeTheme}
              onClick={handleStar}
              starState={starState}
            >
              <AiFillStar dark={changeTheme} /> {starNumber && starNumber}
            </StarIcon>
          </HeaderBox>
          <HeaderBox>
            {isAdmin && (
              <Fragment>
                <Button onClick={handleEdit}>
                  <span>{!isEditMode ? <FiEdit /> : <BiUndo />}</span>
                  <span>{!isEditMode ? editBtnText : "Back"}</span>
                </Button>
              </Fragment>
            )}

            {isEditMode && (
              <Button save="save" onClick={handleSave}>
                <span>
                  <HiOutlineSave />
                </span>
                <span>Save</span>
              </Button>
            )}
          </HeaderBox>
        </HeaderInfo>
        {!isEditMode ? (
          desState && <Content dark={changeTheme}>{desState}</Content>
        ) : (
          <DescriiptionSave
            editState={editState}
            EXPORTER_API={EXPORTER_API}
            exporterInfo={exporterInfo}
            githubContent={githubContent}
            isEditMode={isEditMode}
            desState={desState}
            setDesState={setDesState}
            handleEdit={handleEdit}
            showAlertModal={showAlertModal}
            type={type}
            file={file}
            setEditState={setEditState}
          />
        )}
      </InfoWrap>

      <AlertModal isActive={alertModal}>
        <p>{alertMsg}</p>
      </AlertModal>
    </Info>
  );
};

export default OpenSourceInfo;

const AlertModal = styled.div`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  justify-content: center;
  top: -70px;
  position: absolute;
  animation: move 2s ease-in-out;
  opacity: 0%;
  p {
    width: 300px;
    height: 50px;
    padding: 15px 20px;
    background: #ffffff;
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-weight: 600;
    font-size: 13px;
    text-align: center;
    line-height: 1.6;
  }
  @keyframes move {
    0% {
      transform: translateY(0);
      opacity: 100%;
    }
    20% {
      transform: translateY(14px);
      opacity: 100%;
    }
    95% {
      transform: translateY(14px);
      opacity: 100%;
    }
    98% {
      opacity: 80%;
    }
    100% {
      transform: translateY(0);
      opacity: 0%;
    }
  }
`;
const Info = styled.div`
  position: relative;
  display: flex;
  user-select: none;
  min-width: 370px;

  div > div {
    @media ${({ theme }) => theme.media.mobile} {
      flex-wrap: wrap;
    }

    div {
      display: flex;
      align-items: center;

      @media ${({ theme }) => theme.media.mobile} {
        display: flex;
        align-items: center;
        flex-direction: row;
      }

      &:first-child {
        @media ${({ theme }) => theme.media.mobile} {
          margin-bottom: 3px;
        }
      }

      &:nth-child(2) {
        @media ${({ theme }) => theme.media.mobile} {
          flex-direction: row;
        }
      }
    }
  }
`;

const InfoWrap = styled.div`
  flex: 1 auto;
  width: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 240px;
  @media ${({ theme }) => theme.media.mobile} {
    padding-right: 15px;
  }
`;

const HeaderLogo = styled.div`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  width: 150px;
  height: 150px;
  margin-right: 70px;
  @media ${({ theme }) => theme.media.mobile} {
    width: 80px;
    height: 80px;
    margin-right: 15px;
    margin-left: 15px;
  }
`;

const HeaderInfo = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const LogoImg = styled.a`
  flex: 1 1 220px;
  max-width: 220px;
  min-width: 120px;
  @media ${({ theme }) => theme.media.mobile} {
    flex: 1 1 30%;
    max-width: 30%;
  }
`;

const HeaderTitle = styled.a`
  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;

const Name = styled.h4`
  margin-right: 20px;
  color: ${(props) => (props.dark ? "#f5f6f7" : "#000000")};
  font-size: 17px;

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 15px;
  }
`;

const Button = styled.button`
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin-left: ${(props) =>
    props.fork === "fork" || props.save === "save" ? "15px" : ""};
  background-color: ${(props) => (props.dark ? "#f5f6f7" : "#ffffff")};
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => (props.forkState ? "#8D8D8D" : "black")};

  @media ${({ theme }) => theme.media.mobile} {
    position: relative;
    margin-left: ${(props) =>
      props.fork === "fork" || props.save === "save" ? "15px" : "3px"};
    top: 2px;
    z-index: 10;
  }

  span {
    font-size: 12px;
    &:first-child {
      position: relative;
      top: 1px;
      margin-right: 5px;
      font-size: 13px;
    }
  }
  a {
    color: inherit;
    .link {
      position: relative;
      top: 1px;
      margin-right: 5px;
    }
  }
`;
const Category = styled.p`
  padding: 5px 20px;
  font-size: 17px;
  font-weight: 400;
  margin-top: 5px;
  color: ${(props) => (props.dark ? "#f5f6f7" : "#000000")};
  border: ${(props) => props.dark && "1px solid #f5f6f7"};
  border-radius: 5px;
  background-color: ${(props) => !props.dark && "#f1f4f8"};
  min-height: 30px;

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 13px;
    padding: 7px 10px;
  }
`;
const StarIcon = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-left: 15px;
  color: ${(props) => (props.starState ? "#ffd200" : "#8D8D8D")};
  cursor: pointer;
  svg {
    vertical-align: middle;
  }

  @media ${({ theme }) => theme.media.mobile} {
    position: relative;
    top: 0;
    font-size: 14px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-top: 20px;
  white-space: pre-line;
  line-height: 25px;
  color: ${(props) => props.dark && "#f5f6f7"};
`;

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;
