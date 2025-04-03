import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Banner() {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <img src="IMAGES/4.jpeg" className="d-block w-100" alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="IMAGES/5.jpeg" className="d-block w-100" alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="IMAGES/6.jpeg" className="d-block w-100" alt="Slide 3" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="IMAGES/3.jpeg" className="d-block w-100" alt="Slide 4" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;

