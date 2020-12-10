import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import RegisterModal from "../Modal/RegisterModal";
import { getTokenState } from "../../store/actions/exporterActions";

const AdminMenu = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const dispatch = useDispatch();

  const cancleModal = () => {
    setIsModalActive(false);
  };

  const ADMIN_MENUS = [
    {
      title: "Token",
      onClick: () => {
        dispatch(getTokenState(false));
      }
    },
    {
      title: "Register",
      onClick: () => {
        setIsModalActive(true);
      }
    }
  ];

  return (
    <Div>
      {ADMIN_MENUS.map(menu => (
        <Span onClick={menu.onClick}>{menu.title}</Span>
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
    position: absolute;
    right: 15px;
    top: 30px;
  }
`;

const Span = styled.span`
  margin-left: 30px;
  cursor: pointer;
`;

export default AdminMenu;
