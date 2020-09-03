import React from "react";
import Hero from "../components/Hero";
import cartBcg from "../images/cartpage.png";
import CartSection from "../components/CartPage";

export default function CartPage() {
  return (
    <>
      <Hero img={cartBcg} />
      <CartSection />
    </>
  );
}
