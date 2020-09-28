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
            marginBottom: 100
          }}
        >
          <div className="view view-first">
            <img
              style={{ marginTop: -1, height: 320, width: 900 }}
              alt=""
              src="https://rel.ink/gxExVQ"
            />
            <div className="mask">
              <h2>Ravenous</h2>
              <p>
                An App that allows the users to find any business all over the
                the world.
              </p>
              <Link to="/portfolio/ravenous" className="info">
                VIEW
              </Link>
            </div>
          </div>
          <div className="view view-first">
            <img alt="" src="https://rel.ink/gDGqKv" />
            <div className="mask">
              <h2>Pokedex</h2>
              <p>
                The reproduction of the Pokèmon's encyclopedia wich store all
                the existing Pokèmons.
              </p>
              <Link to="/portfolio/pokedex" className="info">
                VIEW
              </Link>
            </div>
          </div>
          <div
            style={{ borderColor: "rgba(0, 0, 0, 0.9)" }}
            className="view view-first"
          >
            <img alt="" src="https://rel.ink/gApReB" />
            <div className="mask">
              <h2>Shortly</h2>
              <p>An URL shortening API landing page.</p>
              <Link to="/portfolio/shortly" className="info">
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
