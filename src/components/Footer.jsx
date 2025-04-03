import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  return (
    <footer className="bg-light py-4 ">
      <Container>
        <Row className="" style={{padding:'50px'}}>
          {/* Online Shopping Section */}
          <Col md={3}>
            <h6 className="fw-bold">ONLINE SHOPPING</h6>
            <ul className="list-unstyled">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Home</li>
              <li>Beauty</li>
              <li>Genz</li>
              <li>Gift Cards</li>
              <li>Myntra Insider</li>
            </ul>
          </Col>

          {/* Customer Policies Section */}
          <Col md={3}>
            <h6 className="fw-bold">CUSTOMER POLICIES</h6>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>T&C</li>
              <li>Terms of Use</li>
              <li>Track Orders</li>
              <li>Shipping</li>
              <li>Cancellation</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
              <li>Grievance Redressal</li>
            </ul>
          </Col>

          {/* Experience Myntra App Section */}
          <Col md={3}>
            <h6 className="fw-bold">EXPERIENCE MYNTRA APP ON MOBILE</h6>
            <div className="d-flex gap-2">
              <img
                src="IMAGES/79.png"
                alt="Google Play"
                style={{ height: "40px" }}
              />
              <img
                src="IMAGES/80.png"
                alt="App Store"
                style={{ height: "40px" }}
              />
            </div>
            <h6 className="fw-bold mt-3">KEEP IN TOUCH</h6>
            <div className="d-flex gap-3">
              <img src="IMAGES/81.png" alt="" size={24}/>
              <img src="IMAGES/82.png" alt="" size={24}/>
              <img src="IMAGES/83.png" alt="" size={24}/>
              <img src="IMAGES/84.png" alt="" size={24}/>
            </div>
          </Col>

          {/* Guarantee and Return Policy */}
          <Col md={3}>
            <div className="d-flex align-items-center gap-2">
              <img
                src="IMAGES/85.png"
                alt="Original"
                style={{ height: "30px" }}
              />
              <div>
                <strong>100% ORIGINAL</strong> guarantee for all products at myntra.com
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 mt-3">
              <img
                src="IMAGES/86.png"
                alt="Return"
                style={{ height: "30px" }}
              />
              <div>
                <strong>Return within 14 days</strong> of receiving your order
              </div>
            </div>
          </Col>
        </Row>
      {/* Popular Searches */}
      <hr />
        <Row>
          <Col>
            <h6 className="fw-bold">POPULAR SEARCHES</h6>
            <p className="text-muted">
              Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | 
              Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | 
              Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | 
              Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | 
              Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | 
              Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees
            </p>
          </Col>
        </Row>

        {/* Contact Info */}
        <Row className="mt-3">
          <Col>
            <p>
              In case of any concern, <strong className="text-primary">Contact Us</strong>
            </p>
            <p>© 2025 www.myntra.com. All rights reserved. <span className="text-muted">A Flipkart company</span></p>
          </Col>
        </Row>

        {/* Registered Office Address */}
        <Row>
          <Col className="d-flex">
            <h6 className="fw-bold">Registered Office Address</h6>
            <p className="text-muted">
              Buildings Alyssa, Begonia and Clover situated in Embassy Tech Village, <br />
              Outer Ring Road, Devarabeesanahalli Village, <br />
              Varthur Hobli, Bengaluru – 560103, India
            </p>
            <p className="text-muted ms-5">
              CIN: U72300KA2007PTC041799 <br />
              Telephone: <strong className="text-primary">+91-80-61561999</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;