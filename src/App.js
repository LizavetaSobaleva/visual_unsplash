import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/pages/MainPage";
import GlobalStyle from "./styles/GlobalStyles";
import ImagesPage from "./components/pages/ImagesPage";
import Modal from "./components/UI/modal/Modal";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Modal></Modal>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/images" element={<ImagesPage />} />
        {/* <Redirect to="/" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
