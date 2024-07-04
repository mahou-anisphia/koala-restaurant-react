import React from "react";
import "./Carousel.css";

import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "390px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const CarouselComponent = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>
          <img
            src="https://file.hstatic.net/1000075078/file/web_moi_-_desktop_f4b62288022f448b868d656d2c2ebfa7.jpg"
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
      <div>
        <h3 style={contentStyle}>5</h3>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
