import React from "react";
import Carousel from "react-bootstrap/Carousel";

function MedalBrands() {
  return (
    <>
      <Carousel interval={2000} style={{ maxWidth: "100%" }}>
        <Carousel.Item>
          <div className="carousel-banner">
            <img src="IMAGES/8.jpeg" alt="Slide 1" />
            <img src="IMAGES/9.jpeg" alt="Slide 1" />
            <img src="IMAGES/10.jpeg" alt="Slide 1" />
            <img src="IMAGES/11.jpeg" alt="Slide 1" />
            <img src="IMAGES/12.jpeg" alt="Slide 1" />
            <img src="IMAGES/31.jpeg" alt="Slide 1" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-banner">
            <img src="IMAGES/8.jpeg" alt="Slide 2" />
            <img src="IMAGES/15.jpeg" alt="Slide 2" />
            <img src="IMAGES/9.jpeg" alt="Slide 2" />
            <img src="IMAGES/17.jpeg" alt="Slide 2" />
            <img src="IMAGES/10.jpeg" alt="Slide 2" />
            <img src="IMAGES/19.jpeg" alt="Slide 2" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-banner">
            <img src="IMAGES/27.jpeg" alt="Slide 3" />
            <img src="IMAGES/21.jpeg" alt="Slide 3" />
            <img src="IMAGES/17.jpeg" alt="Slide 3" />
            <img src="IMAGES/29.jpeg" alt="Slide 3" />
            <img src="IMAGES/10.jpeg" alt="Slide 3" />
            <img src="IMAGES/25.jpeg" alt="Slide 3" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-banner">
            <img src="IMAGES/26.jpeg" alt="Slide 4" />
            <img src="IMAGES/27.jpeg" alt="Slide 4" />
            <img src="IMAGES/28.jpeg" alt="Slide 4" />
            <img src="IMAGES/29.jpeg" alt="Slide 4" />
            <img src="IMAGES/30.jpeg" alt="Slide 4" />
            <img src="IMAGES/31.jpeg" alt="Slide 4" />
          </div>
        </Carousel.Item>
      </Carousel>

      <style>
        {`
          .carousel-banner {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            overflow: hidden;
            width: 100%;
          }
          .carousel-banner img {
            max-width: 250px; /* Adjust image size as needed */
            height:350px;
          }
        `}
      </style>
    </>
  );
}

export default MedalBrands;
