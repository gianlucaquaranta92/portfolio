import React from "react";

export function Images() {
  return (
    <div className="row paragraph" style={{ marginTop: 100 }}>
      <div className="col-3 col-xl-3"></div>
      <div className="col-6 col-xl-6 mobile-images">
        <div className="shadow">
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://i.ibb.co/VTRSDMj/Screenshot-2024-03-10-at-21-29-06.png"
          />
        </div>
        <div className="shadow">
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://i.ibb.co/qYc6zmW/Screenshot-2024-03-10-at-21-30-38.png"
          />
        </div>
        <div className="shadow">
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://i.ibb.co/5kk79Yb/Screenshot-2024-03-09-at-09-51-40.png"
          />
        </div>
      </div>
      <div className="col-3 col-xl-3"></div>
    </div>
  );
}
