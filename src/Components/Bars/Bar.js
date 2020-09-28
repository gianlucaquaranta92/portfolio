import React from "react";
import { BarMenu } from "./Barmenu";

export function Bar() {
  return (
    <div>
      <div className="row effect">
        <div className="col-1 col-xl-3 col-md-2 col-sm-2" />

        <div className="col-10 col-xl-3 offset-xl-4 col-md-8 col-sm-8 ">
          <div
            className="links"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",

              padding: 20
            }}
          >
            <a className="links" href="#about">
              <h3 style={{ fontWeight: "bold", fontSize: 18 }}>About</h3>
            </a>
            <a className="links" href="#projects">
              <h3 style={{ fontWeight: "bold", fontSize: 18 }}>Projects</h3>
            </a>
            <a className="links" href="#contact">
              <h3 style={{ fontWeight: "bold", fontSize: 18 }}>Contact</h3>
            </a>
          </div>
          <BarMenu />
        </div>

        <div style={{}} className="col-1 col-xl-3" />
      </div>
    </div>
  );
}
