import React from "react";

export function Problems() {
  return (
    <div className="row ">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        className=" col-xl-6 col-lg-6"
      >
        <img
          style={{ width: "100%", maxWidth: "500px", maxHeight: "500px" }}
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
          Challenges included cross-browser compatibility, especially on mobile
          screens where the top side of the player was cut off. The language
          selector also played a significant role, but through rigorous testing
          and iteration, the errors quickly began to disappear.
        </p>
      </div>
    </div>
  );
}
