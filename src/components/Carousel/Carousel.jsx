import React from "react";
import "./Carousel.css";
import "../../assets/images/tch3.webp";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "390px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};
const CarouselComponent = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>
          <img src="../../src/assets/images/tch1.webp" alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="../../src/assets/images/tch2.webp" alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="../../src/assets/images/tch3.webp" alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="../../src/assets/images/tch4.webp" alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="../../src/assets/images/tch5.webp" alt="" />
        </h3>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
