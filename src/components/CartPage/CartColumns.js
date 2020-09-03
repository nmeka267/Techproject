import React from "react";

export default function CartColumns() {
  return (
    <div
      className="container-fluid text-center d-none d-lg-block"
      style={{ background: "#0097A9", padding: "10px", color: "#fff" }}
    >
      <div className="row">
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">products</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">name of product</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
        {/* end of single column */}
      </div>
    </div>
  );
}
