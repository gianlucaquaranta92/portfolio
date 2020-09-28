import React, { useState } from "react";

export function BarMenu() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="barmenu" style={{ width: "100%" }}>
      <div
        onClick={() => (menu ? setMenu(false) : setMenu(true))}
        className=""
        style={{
          marginTop: 20,
          marginLeft: " auto",
          width: 50,
          height: 35,
          cursor: "pointer"
        }}
      >
        <div className="menu"></div>
        <div className="menu"></div>
        <div className="menu"></div>
      </div>
      {menu ? (
        <div
          style={{
            backgroundColor: "hsla(186, 90%, 80%, 0.5)",
            padding: 40,
            borderRadius: 7,
            textAlign: "center",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <a href="#about">
            <span>About</span>
          </a>
          <a href="#projects">
            <span>Projects</span>
          </a>
          <a href="#contact">
            <span>Contact</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}
