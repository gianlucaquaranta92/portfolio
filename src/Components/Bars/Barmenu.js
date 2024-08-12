import React, { useState } from "react";

export function BarMenu() {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
    document.body.classList.toggle("menu-open", !menu);
  }

  function handleMenuClick() {
    setMenu(false);
    document.body.classList.remove("menu-open");
  }

  function handleOverlayClick(e) {
    // Close the menu only if the user clicks on the overlay, not the menu itself
    if (e.target.className === "menu-overlay") {
      handleMenuClick();
    }
  }

  return (
    <div className="barmenu" style={{ width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center" }} className="logo">
        <a style={{ margin: 0 }} href="/">
          <h3 style={{ margin: 0 }}>GQ</h3>
        </a>
      </div>
      <div
        onClick={toggleMenu}
        className=""
        style={{
          marginTop: 20,
          marginBottom: 10,
          marginLeft: "auto",
          width: 50,
          height: 35,
          cursor: "pointer",
        }}
      >
        <div className="menu"></div>
        <div className="menu"></div>
        <div className="menu"></div>
      </div>
      {menu && (
        <div
          className="menu-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black overlay
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleOverlayClick}
        >
          <div
            style={{
              backgroundColor: "hsla(186, 90%, 80%, 90%)",
              padding: 40,
              borderRadius: 8,
              textAlign: "center",
              fontWeight: 500,
              display: "flex",
              flexDirection: "column",
              width: "80%",
              maxWidth: "400px",
            }}
          >
            <a href="/#about" onClick={handleMenuClick}>
              <span>About</span>
            </a>
            <a href="/#projects" onClick={handleMenuClick}>
              <span>Projects</span>
            </a>
            <a href="/#contact" onClick={handleMenuClick}>
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
