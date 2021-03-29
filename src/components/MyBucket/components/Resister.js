import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadMoreData } from "../../../store/actions/exporterActions";
import ContentExporters from "../../Content/ContentExporters";
import { RiShoppingBasketLine } from "react-icons/ri";
import RegisterModal from "../../Modal/RegisterModal";

const Resister = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const cancleModal = () => {
    setIsModalActive(false);
  };

  const { filteredExporters, exposedExporters, totalCount } = useSelector(
    (store) => store.exporterReducer
  );
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
      <Header>
        <ReadmeTitle>Resister</ReadmeTitle>
        <Button onClick={() => setIsModalActive(true)}>
          <span>
            <RiShoppingBasketLine />
          </span>
          <span>Add</span>
        </Button>
      </Header>
      {isModalActive && <RegisterModal cancleModal={cancleModal} />}
      <ContentExporters exporters={exposedExporters} mybucket={true} />
    </Container>
  );
};

export default Resister;

const Container = styled.div`
  ${({ theme }) => theme.container}
  position: relative;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 45px;
`;

const ReadmeTitle = styled.h4`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.08rem;
  margin-right: 30px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: #ffffff;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;

  span {
    font-size: 12px;

    &:first-child {
      position: relative;
      top: 1px;
      margin-right: 5px;
      font-size: 13px;
    }
  }
`;
