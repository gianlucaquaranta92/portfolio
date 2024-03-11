import React from "react";

import "./Projects.css";
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <div className="row " style={{ backgroundColor: "rgb(240, 240, 240,0.5)" }}>
      <div className="col-1  col-xl-2"></div>
      <div className="col-10 col-xl-8">
        <div className="paragraph" style={{ width: "80%" }}>
          <h3 style={{ marginTop: 100, marginBottom: 50 }}>Other Projects</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginBottom: 100,
            gap: 24,
          }}
        >
          <div
            style={{ borderColor: "rgba(0, 0, 0, 0.9)" }}
            className="view view-first"
          >
            <img
              style={{ objectFit: "contain" }}
              alt=""
              src="https://i.ibb.co/9rv7fL6/logo-artkampen.png"
            />
            <div className="mask">
              <h2>Artkampen</h2>
              <p>
                App hosting seasonal fishing tournaments with medals, avatars,
                and profile customization.
              </p>
              <Link to="/portfolio/artkampen" className="info">
                VIEW
              </Link>
            </div>
          </div>

          <div className="view view-first">
            <img
              alt=""
              src="https://i.ibb.co/2SJXmnD/Screenshot-2024-03-10-at-21-54-35.png"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
            <div className="mask">
              <h2>Farmers & Chefs</h2>
              <p>
                A website that promotes theyr own vegan products and where to
                find them.
              </p>
              <Link to="/portfolio/farmers" className="info">
                VIEW
              </Link>
            </div>
          </div>

          <div className="view view-first">
            <img alt="" src="https://i.ibb.co/Lk0061c/sverige500logo.png" />
            <div className="mask">
              <h2>Sverige 500 år</h2>
              <p>
                Webb-app with full custom audio player built using JavaScript.
              </p>
              <Link to="/portfolio/sverige500" className="info">
                VIEW
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-1 col-xl-2"></div>
    </div>
  );
}
