import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
export default function Sidebar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { links, sidebarOpen, handleSidebar } = value;
        return (
          <SideWrapper show={sidebarOpen}>
            <ul>
              {links.map((links) => {
                return (
                  <li>
                    <Link
                      to={links.path}
                      className="sidebar-link"
                      onClick={handleSidebar}
                    >
                      {links.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const SideWrapper = styled.nav`
  position: fixed;
  top: 85px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--mainGrey);
  z-index: 99;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  ul {
    list-style-type: none !important;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 15rem;
  }
`;
