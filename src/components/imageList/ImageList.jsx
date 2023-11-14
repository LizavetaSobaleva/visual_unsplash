import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ImageCard from "./imageCard/ImageCard";

const ImageList = () => {
  const images = useSelector((state) => state.imagesList.images);

  if (images.length) {
    return (
      <>
        <ImageListContainer>
          {images.map((image) => (
            <TransitionGroup key={image.id}>
              <CSSTransition  timeout={20}>
                <ImageCard
                  imgUrl={image.urls.regular}
                  id={image.id}
                  author={image.user.name}
                  location={image.user.location}
                  avatar={image.user.profile_image.small}
                />
              </CSSTransition>
            </TransitionGroup>
          ))}
        </ImageListContainer>
      </>
    );
  } else {
    return <NotFound>Not Found</NotFound>;
  }
};

export default ImageList;

const ImageListContainer = styled.div`
  column-count: 3;
  column-gap: 1rem;
  break-inside: avoid;

  @media only screen and (max-width: 1000px){
    column-count: 2;
  }
  @media only screen and (max-width: 600px){
    column-count: 1;
  }
`;
const NotFound = styled.p`
  display: flex;
  font-weight: 400;
  font-size: 3rem;
  align-items: center;
  justify-content: center;
`;
