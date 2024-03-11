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
          Throughout the coding process, I maintained a sense of control over
          the project and its various phases. The only obstacle I encountered
          was about the product slider due to image size discrepancies.
          Consequently, I requested the customer to provide images in a
          consistent format.
        </p>
      </div>
    </div>
  );
}
