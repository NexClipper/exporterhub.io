import { useState } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import InfoModal from "../Modal/InfoModal";

const InfoIcon = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const iconClick = () => {
    setIsModalActive(true);
  };
  const cancleModal = () => {
    setIsModalActive(false);
  };
  return (
    <>
      <InfoCircleOutlined onClick={iconClick} />
      {isModalActive && <InfoModal cancleModal={cancleModal} />}
    </>
  );
};
export default InfoIcon;
