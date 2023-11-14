import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setModal } from "../../../reducers/imageReducer";
import ImageCard from "../../imageList/imageCard/ImageCard";

const Modal = (props) => {
  const modalDisplay = useSelector((state) => state.imagesList.modalDisplay);
  const modalData = useSelector((state) => state.imagesList.modalContent);
  const dispatch = useDispatch();
  return (
    <ModalContainer
      onClick={() => dispatch(setModal("none"))}
      style={{ display: modalDisplay }}
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ImageContainer>
          <ImageCard
            customStyles={{ height: "80vh" }}
            imgUrl={modalData.imageUrl}
            author={modalData.imageAuthor}
            location={modalData.imageLocation}
            avatar={modalData.avatarUrl}
          />
        </ImageContainer>
      </ModalContent>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  position: fixed;
`;
const ModalContent = styled.div`
  background: #fff;
  padding: 8px 8px 0;
  margin: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
const ImageContainer = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

export default Modal;
