import React from 'react'
import Carousel from "react-bootstrap/Carousel";

function GlobalBrands() {
  return (
    <>

      <Carousel interval={2000} style={{ maxWidth: "100%" }}>
        <Carousel.Item>
          <div className="carousel-banner">
            <img src="IMAGES/31.jpeg" alt="Slide 1" />
            <img src="IMAGES/32.jpeg" alt="Slide 1" />
            <img src="IMAGES/33.jpeg" alt="Slide 1" />
            <img src="IMAGES/34.jpeg" alt="Slide 1" />
            <img src="IMAGES/35.jpeg" alt="Slide 1" />
            <img src="IMAGES/36.jpeg" alt="Slide 1" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-banner">
            <img src="IMAGES/42.jpeg" alt="Slide 2" />
            <img src="IMAGES/38.jpeg" alt="Slide 2" />
            <img src="IMAGES/39.jpeg" alt="Slide 2" />
            <img src="IMAGES/40.jpeg" alt="Slide 2" />
            <img src="IMAGES/41.jpeg" alt="Slide 2" />
            <img src="IMAGES/42.jpeg" alt="Slide 2" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-banner">
            <img src="IMAGES/31.jpeg" alt="Slide 1" />
            <img src="IMAGES/32.jpeg" alt="Slide 1" />
            <img src="IMAGES/33.jpeg" alt="Slide 1" />
            <img src="IMAGES/34.jpeg" alt="Slide 1" />
            <img src="IMAGES/35.jpeg" alt="Slide 1" />
            <img src="IMAGES/36.jpeg" alt="Slide 1" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-banner">
            <img src="IMAGES/42.jpeg" alt="Slide 2" />
            <img src="IMAGES/38.jpeg" alt="Slide 2" />
            <img src="IMAGES/39.jpeg" alt="Slide 2" />
            <img src="IMAGES/40.jpeg" alt="Slide 2" />
            <img src="IMAGES/41.jpeg" alt="Slide 2" />
            <img src="IMAGES/42.jpeg" alt="Slide 2" />
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

export default GlobalBrands
