import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpg";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about company"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              “Deloitte” is the brand under which tens of thousands of dedicated
              professionals in independent firms throughout the world
              collaborate to provide audit, consulting, financial advisory, risk
              advisory, tax and related services to select client
            </p>
            <p className="text-lead text-muted my-3">
              These firms are members of Deloitte Touche Tohmatsu Limited, a UK
              private company limited by guarantee (“DTTL”). Each DTTL member
              firm provides services in particular geographic areas and is
              subject to the laws and professional regulations of the particular
              country or countries in which it operates.
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
