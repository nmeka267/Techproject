import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import styled from "styled-components";
export default function Cart() {
  return (
    <section className="py-5 cart-display">
      {/* title */}
      <CartWrapper>
        <div
          className="container"
          style={{ marginBottom: "40px", paddingTop: "40px" }}
        >
          <Title title="your cart items" center />
        </div>
        {/* cart columns */}
        <CartColumns />
        {/* cart list */}
        <CartList />
        {/* cart totals */}
        <CartTotals />
      </CartWrapper>
    </section>
  );
}

const CartWrapper = styled.div`
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
`;
