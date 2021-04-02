import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { RiShoppingBasketLine } from "react-icons/ri";
import { ImLink } from "react-icons/im";
import { BUCKET_API, STAR_API } from "../../../config";

const OpenSourceInfo = ({
  exporterInfo,
  forkState,
  starState,
  setStarState,
  setForkState,
  starNumber,
  setStarNumber,
}) => {
  const TOKEN = sessionStorage.getItem("access_token");
  const [alertModal, setAlertModal] = useState(false);

  const addToFork = (exporterInfo) => {
    if (!TOKEN) {
      alert("You need to Sign in");
      return;
    }

    if (!forkState) {
      axios({
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
          console.log("SUCCESS : fork");
          setForkState(true);
          showAlertModal();
        })
        .catch((err) => {
          console.log("ERROR : fork");
          console.log(err);
        });
    }
  };

  const handleStar = () => {
    if (!TOKEN) {
      alert("You need to Sign in");
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
    })
      .then(() => {
        console.log("SUCCESS : STAR");
      })
      .catch((err) => {
        console.log("ERROR : STAR");
        console.log(err);
      });

    setStarState(!starState);
  };

  const showAlertModal = () => {
    setAlertModal(true);

    setTimeout(() => {
      setAlertModal(false);
    }, 3000);
  };

  return (
    <Info>
      <a href={exporterInfo.repository_url} target="_blank">
        <HeaderLogo src={exporterInfo.logo_url} />
      </a>
      <div>
        <div>
          <a href={exporterInfo.repository_url} target="_blank">
            <Name>{exporterInfo.name}</Name>
          </a>
          <Button onClick={() => addToFork(exporterInfo)} forkState={forkState}>
            <span>{!forkState && <RiShoppingBasketLine />}</span>
            {forkState ? (
              <a href={exporterInfo.forked_repository_url} target="_blank">
                <ImLink className="link" />
                Link to forked Exporter
              </a>
            ) : (
              <span>Fork</span>
            )}
          </Button>
        </div>
        <div>
          <Category>{exporterInfo.category}</Category>
          <StarIcon onClick={handleStar} starState={starState}>
            <AiFillStar /> {starNumber && starNumber}
          </StarIcon>
        </div>
      </div>
      <AlertModal isActive={alertModal}>
        <p>This Exporter has been forked with Github</p>
      </AlertModal>
    </Info>
  );
};

export default OpenSourceInfo;

const AlertModal = styled.div`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  justify-content: center;
  top: -70px;
  width: 100%;
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
  display: flex;
  align-items: center;

  div {
    div {
      display: flex;
      align-items: center;

      &:first-child {
        margin-bottom: 20px;
      }
    }
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
    width: 150px;
    height: 150px;
  }
`;

const Name = styled.h4`
  margin-right: 30px;
  color: #000000;
  font-size: 17px;
`;

const Button = styled.button`
  /* width: 60px; */
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background: #ffffff;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => (props.forkState ? "#8D8D8D" : "black")};

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
  margin-right: 15px;
  padding: 5px 20px 8px 20px;
  font-size: 17px;
  font-weight: 400;
  border-radius: 5px;
  background-color: #f1f4f8;
  min-height: 30px;
`;

const StarIcon = styled.span`
  font-size: 18px;
  font-weight: 500;
  /* color: #ffd200; */
  color: ${(props) => (props.starState ? "#ffd200" : "#8D8D8D")};
  cursor: pointer;

  svg {
    vertical-align: middle;
  }
`;
