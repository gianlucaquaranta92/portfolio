import React from "react";

export function Images() {
  return (
    <div className="row paragraph" style={{ marginTop: 80 }}>
      <div className="col-1 col-xl-2"></div>
      <div className="col-5 col-xl-4">
        <div style={{ width: "70%" }} className="shadow">
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/756520235439489127/desktop-design.jpg"
          />
        </div>

        <div className="shadow" style={{ width: "70%", marginTop: 100 }}>
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/756520153847431188/desktop-active-states.jpg"
          />
        </div>
      </div>
      <div className="col-5 col-xl-4">
        <div
          className="shadow"
          style={{
            width: "50%",
            marginTop: 50,
          }}
        >
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/756085231018049577/mobile-active-states.png"
          />
        </div>
      </div>
      <div className="col-1 col-xl-2"></div>
    </div>
  );
}
