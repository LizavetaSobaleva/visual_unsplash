import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getImages } from "../../actions/images";
import Input from "../UI/input/input";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [search, setSearch] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(false);

  const [prompts, setPrompts] = useState(false);
  const navigate = useNavigate();
  const images = useSelector((state) => state.imagesList.images);
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.stopPropagation();
    setSearch(e.target.value);
    if (searchTimeout !== false) {
      clearTimeout(searchTimeout);
    }
    if (search.length > 2) {
      setPrompts(true);
      setSearchTimeout(
        setTimeout(
          (value) => {
            dispatch(getImages(value));
          },
          300,
          e.target.value
        )
      );
    } else {
      setPrompts(false);
    }
  };
  const pressHandler = (e) => {
    if (e.key === "Enter") {
      dispatch(getImages(e.target.value));
      navigate("/images");
    }
  };

  const clickHandler = (title) => {
    dispatch(getImages(title));
    navigate("/images");
  };
  return (
    <Container>
      <Header>
        <Input
          placeholder="Search free high-resolution photos"
          type="search"
          value={search}
          onKeyPress={pressHandler}
          onChange={searchHandler}
        />

        <PromptContainer>
          {prompts &&
            images
              .slice(0, 4)
              .map((i) =>
                i.tags.map((t) =>
                  t.hasOwnProperty("title") ? (
                    <Prompt onClick={() => clickHandler(t.title)}>
                      {t.title}
                    </Prompt>
                  ) : (
                    <Prompt>No results found</Prompt>
                  )
                )
              )}
        </PromptContainer>
      </Header>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background: linear-gradient(90deg, rgba(238,202,82,1) 0%, rgba(231,60,126,1) 20%, rgba(35,166,213,1) 40%, rgba(35,213,171,1) 60%, rgba(238,202,82,1) 80%, rgba(231,60,126,1) 100%);
  background-size: 500% 100%;
	animation: gradient 14s linear infinite;

  @keyframes gradient {
	0% {
		background-position: 0%;
	}
	50% {
		background-position: 50%;
	}
	100% {
		background-position: 100%;
	}
}
`;
const Header = styled.div`
  position: absolute;
  display: inline-block;
  width: 60vw;
  margin: 5rem;
`;
const PromptContainer = styled.div`
  height: 10vh;
  display: flex;
  flex-flow: wrap;
`;
const Prompt = styled.li`
  list-style: none;
  margin: 4px;
  padding: 8px 20px;
  height: fit-content;
  width: fit-content;
  position: relative;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  border: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.4s ease;
  cursor: default;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

export default MainPage;
