import React from "react";
import Carousel from "./components/Carousel/Carousel.jsx";
import Header from "./components/Header/Header.jsx";
import ProductIntro from "./components/Product_Intro/ProductIntro.jsx";
import Signature from "./components/Signature/Signature.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Modal from "react-modal";

const App = () => {
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <ProductIntro></ProductIntro>
      <Signature></Signature>
      <Footer></Footer>
    </>
  );
};

export default App;
