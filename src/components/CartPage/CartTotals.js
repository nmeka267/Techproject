import React from "react";
import { ProductConsumer } from "../../context";
export default function CartTotals() {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {(value) => {
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
            return (
              <div className="col text-title text-center my-4">
                <button
                  className="btn btn-outline-danger text-capitalize mb-4"
                  style={{ background: "#ED8B00", color: "#fff" }}
                  onClick={clearCart}
                >
                  clear cart
                </button>
                <table
                  class="table table-bordered table-hover table-md .table-striped"
                  style={{ border: "red" }}
                >
                  <thead>
                    <tr>
                      <th>subtotal</th>
                      <th>tax</th>
                      <th>total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> ₹{cartSubTotal}</td>
                      <td> ₹{cartTax}</td>
                      <td>₹{cartTotal}</td>
                    </tr>
                  </tbody>
                </table>

                {/* <h3>subtotal : ₹{cartSubTotal}</h3>
                <h3>tax : ₹{cartTax}</h3>
                <h3>total : ₹{cartTotal}</h3> */}
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
