import React from "react";

import Services from "../components/Homepage/Services";
import Featured from "../components/Homepage/Featured";
import { Carousel } from "react-bootstrap";
//import { Carousel } from "react-responsive-carousel";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";

export default function HomePage() {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div className="col-12 p-0">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={slide1} alt="First slide" />
                <Carousel.Caption>
                  <p style={{ fontSize: "60px" }}>Up to 60 %</p>
                  <h1>on mobiles.</h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide2} alt="Third slide" />

                <Carousel.Caption>
                  <p style={{ fontSize: "60px" }}>Up to 50 % </p>
                  <h1>on laptop. </h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide3} alt="Third slide" />

                <Carousel.Caption>
                  <p style={{ fontSize: "60px" }}>Up to 30 %</p>
                  <h1>on desktop. </h1>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      {/* <Hero
        title="
      
      "
        max="true"
      >
        <Link to="/products" className="main-link">
          our products
        </Link>
      </Hero> */}
      <Featured />
      <Services />
    </>
  );
}
