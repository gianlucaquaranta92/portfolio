import React from "react";

export function Lesson() {
  return (
    <div className="row ">
      <div className="col-1 col-xl-3"></div>
      <div
        className="col-10 col-xl-6"
        style={{ textAlign: "center", marginBottom: 200 }}
      >
        <h3 style={{ marginTop: 100, marginBottom: 50 }}>lessons learned</h3>
        <p>
          The main lesson I learned from this project underscores the importance
          of communication, not only with the customer but also with the
          designer.
          <br />
          <br />
          It's vital to remember that communicating with the designer to ensure
          the practicality of their requests before aiming to fulfill them is as
          crucial as meeting the customer's needs.
          <br />
          Now i try to maintain constant communication with both the customer
          and the designer in order to deliver a perfect product.
        </p>
      </div>

      <div className="col-1 col-xl-3"></div>
    </div>
  );
}
