import React from "react";

import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default function SideCart() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartOpen, closeCart, cart, cartTotal } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
              {cart.map((item) => {
                return (
                  <li key={item.id} className="cart-item mb-4">
                    <img width="35" src={item.image} alt="cart item" />
                    <div className="mt-3">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-title text-capitalize">
                        amount: {item.count}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize text-main">
              cart Total:₹{cartTotal}
            </h4>
            <div className="text-center padding-bottom my-5">
              <Link to="/cart" className="main-link">
                cart page
              </Link>
            </div>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.nav`
  position: fixed;
  top: 42px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: left;
  border-left: 4px solid var(--primaryColor);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: var(--mainTransition);

  @media (min-width: 576px) {
    width: 20rem;
    z-index: 99;
    margin-top: 42px;
  }
  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style-type: none;
  }
  .padding-bottom {
    padding-bottom: 30px !important;
  }
`;
