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
        <h1 style={{ marginTop: 150, marginBottom: 50 }}>Santa's Factory</h1>
        <p style={{ marginBottom: 50 }}>
          Farmers and Chefs is a website showcasing and describing their vegan
          products and where you can find them in supermarkets. It displays
          single product pages, ingredients, and recipes.
        </p>
        <a
          style={{ textDecoration: "none", marginLeft: 30 }}
          href="https://farmersandchefs.se/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2>View Site</h2>
        </a>
        <div
          style={{
            boxShadow: "0px 10px 15px 2px rgb(120, 120, 120)",
            marginBottom: 150,
            width: "85%",
            marginTop: 100,
          }}
        >
          <img
            alt=""
            src="https://i.ibb.co/SNQFD55/Screenshot-2024-03-11-at-08-20-57.png"
            style={{ width: "100%" }}
          />
        </div>
        <h3 style={{ marginBottom: "1rem" }}>Project Purpose and Goal</h3>
        <p style={{ marginBottom: 50 }}>
          The purpose of the Farmers and Chefs website is to promote and
          facilitate access to their range of vegan products in supermarkets.
          The goal is to provide a comprehensive platform where users can
          explore individual product details, including ingredients and recipes,
          fostering a deeper connection to plant-based eating.
        </p>
        <Problems />
      </div>
      <div className="col"></div>
    </div>
  );
}
