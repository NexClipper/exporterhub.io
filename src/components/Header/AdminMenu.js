import { useState } from "react";
import styled from "styled-components";
import RegisterModal from "../Modal/RegisterModal";

const ADMIN_MENUS = ["Register"];

const AdminMenu = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const modalClick = () => {
    setIsModalActive(true);
  };
  const cancleModal = () => {
    setIsModalActive(false);
  };
  return (
    <Div>
      {ADMIN_MENUS.map(menu => (
        <span onClick={modalClick}>{menu}</span>
      ))}
      {isModalActive && <RegisterModal cancleModal={cancleModal} />}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
  span {
    margin-left: 30px;
    cursor: pointer;
  }
`;

export default AdminMenu;
