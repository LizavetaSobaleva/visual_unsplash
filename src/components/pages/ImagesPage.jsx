import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getImages } from "../../actions/images";
import ImageList from "../imageList/ImageList";
import HamsterLoader from "../UI/hamsterLoader/HamsterLoader";
import Input from "../UI/input/input";

const ImagesPage = () => {
  const [search, setSearch] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(false);
  const loader = useSelector((state) => state.app.loader);
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.stopPropagation();
    setSearch(e.target.value);
    if (searchTimeout !== false) {
      clearTimeout(searchTimeout);
    }

    setSearchTimeout(
      setTimeout(
        (value) => {
          dispatch(getImages(value));
        },
        1000,
        e.target.value
      )
    );
  };

  if (loader) {
    return (
      <LoaderElement>
        <HamsterLoader />
      </LoaderElement>
    );
  }
  return (
    <>
      <Content>
        <Input
          placeholder="Search photos"
          type="search"
          value={search}
          onChange={searchHandler}
        />
        <ImagesContainer>
          <ImageList></ImageList>
        </ImagesContainer>
      </Content>
    </>
  );
};

const Content = styled.div`
  margin: 5vh 5vw;
  min-width: 300px;
  height: 100vh;
`;
const ImagesContainer = styled.div`
  margin-top: 32px;
`;
const LoaderElement = styled.div`
  position: absolute;
  left: calc(50% - 6em);
  top: calc(50% - 6em); 
`;

export default ImagesPage;
