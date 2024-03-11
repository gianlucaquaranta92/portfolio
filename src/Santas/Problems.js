import React from "react";

export function Problems() {
  return (
    <div className="row ">
      <div className=" col-xl-6 col-lg-6">
        <img
          style={{ width: "100%" }}
          src="https://i.ibb.co/ZgN3DFT/developer-image.webp"
          alt=""
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        className="mobile-margin-top col-xl-6 col-lg-6"
      >
        <h3 style={{ marginBottom: "1rem" }}>Problems and Thought Process</h3>
        <p>
          I choose Phaser3 for this project because it seemed to be the best 2D
          game framework used for making HTML5 games for desktop and mobile.
          <br />
          The hardest part was to decide and code all the logic of the
          animations updates, not too complex, but the code sometimes would get
          quite thick as a single event would trigger many changes.
        </p>
      </div>
    </div>
  );
}
