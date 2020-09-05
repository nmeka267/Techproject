import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import logo from "../images/logo.png";
import { ProductConsumer } from "../context";

export default function Navbar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartItems, handleSidebar, handleCart } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSidebar} />
              <img src={logo} alt="Tech project logo" />
              <div className="nav-cart">
                <FaCartPlus
                  className="nav-icon"
                  onClick={handleCart}
                ></FaCartPlus>
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0.7rem 0.1rem;
  background: #000;
  border-bottom: 3px solid var(--primaryColor);
  z-index: 99;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--mainWhite);
    margin-left: 15px;
    margin-right: 15px;
  }

  .nav-cart {
    position: relative;
  }

  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
    margin-right: 15px;
  }
`;
