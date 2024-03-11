import React from "react";
import { Problems } from "..//Problems";
import "./Description.css";
import { Header } from "../../Components/Header";

export function Description() {
  return (
    <div className="row ">
      <Header></Header>
      <div className="col"></div>
      <div className="col-10  col-xl-9 col-lg-11 col-md-11 col-sm-10 description">
        <h1 style={{ marginTop: 150, marginBottom: 50 }}>Sverige 500 år</h1>
        <p style={{ marginBottom: 50 }}>
          In 2023, Sweden celebrated its 500th anniversary It is 500 years since
          Gustav Vasa was elected King of Sweden on June 6 at the national
          assembly in Strängnäs. Then and there Sweden became independent.
          <br />
          <br />
          This is depicted by historical events in Sweden, the history of
          Strängnäs and Mariefred in the form of 70 works of art.
          <br />
          Together, the works of art create a 140 meter long artist's fence at
          Gripsholm's inn with a view of the Vasaborgen Gripsholm's Castle.
          <br />
          <br />
          My job was to develop a webb app where the user would scan a QR code
          present on the art work and get linked to the audio player that would
          describe the history of it.
        </p>
        <a
          style={{ textDecoration: "none", marginLeft: 30 }}
          href="https://app.sverige500ar.se/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2>View Site</h2>
        </a>

        <h3 style={{ marginBottom: "1rem", marginTop: "50px" }}>
          Project Purpose and Goal
        </h3>
        <p style={{ marginBottom: 50 }}>
          The goal was to create a nice and smooth user interface where users
          could navigate seamlessly.
          <br />
          However, the top priority was ensuring that the audio player looked
          good, functioned correctly, and operated smoothly.
        </p>
        <Problems />
      </div>
      <div className="col"></div>
    </div>
  );
}
