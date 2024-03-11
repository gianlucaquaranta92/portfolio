import React from "react";

export function Images() {
  return (
    <div className="row paragraph" style={{ marginTop: 100 }}>
      <div className="col-3 col-xl-3"></div>
      <div className="col-6 col-xl-6">
        <div className="shadow">
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://i.ibb.co/0Dt12hT/Screenshot-2024-03-11-at-08-23-06.png"
          />
        </div>

        <div className="shadow" style={{ marginTop: 100 }}>
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://i.ibb.co/PC397zF/Screenshot-2024-03-11-at-08-24-25.png"
          />
        </div>
      </div>
      <div className="col-3 col-xl-3"></div>
    </div>
  );
}
