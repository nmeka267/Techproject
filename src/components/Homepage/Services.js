import React, { Component } from "react";
import styled from "styled-components";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "free shipping",
        text:
          "Free delivery on first order applies to the Free Delivery option and excludes other delivery options such as One-Day Delivery, Same-Day Delivery, Standard Delivery, Nominated Day Delivery",
      },
      {
        id: 2,
        icon: <FaRedo />,
        title: "30 days return policy",
        text:
          " If for any reason you are not completely satisfied with your purchase, you may return any item in its original condition within 30 days of receipt and we will gladly provide a refund, replacement, or an exchange.",
      },
      {
        id: 3,
        icon: <FaDollarSign />,
        title: "secured payment",
        text:
          " SECURED PAYMENT. We guarantee a secure connection with several methods of payment provided for you to make your purchase with peace of mind",
      },
    ],
  };
  render() {
    return (
      <ServicesWrapper className="py-5">
        <div className="container">
          <div className="row">
            {this.state.services.map((item) => {
              return (
                <div
                  className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
                  key={item.id}
                >
                  <div className="service-icon">{item.icon}</div>
                  <div className="mt-3 text-capitalize">{item.title}</div>
                  <div className="mt-3">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

const ServicesWrapper = styled.section`
  background: var(--serviceBackground);
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  p {
    color: var(--darkGrey);
  }
`;
