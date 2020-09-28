import React from "react";

export function Main() {
  return (
    <div
      className="container-fluid "
      style={{
        backgroundColor: ""

        /* backgroundImage:
          "URL(https://cdn.discordapp.com/attachments/165746589309206528/746685102175813693/pattern_background3.png)"*/
      }}
    >
      <div style={{ marginTop: 30 }} className="row">
        <div className="col" />
        <div
          style={{ margin: "auto" }}
          className="col-xl-5  col-lg-12 col-md-12  col-sm-12 title"
        >
          <h2 style={{ fontSize: 30, marginLeft: 5 }}>
            <strong>Hi</strong>! I'm
          </h2>
          <h1 style={{ color: "", marginTop: -10, fontSize: "" }}>
            <strong> Gianluca Quaranta</strong>
          </h1>
          <span style={{ fontSize: 35 }}>Self taught Junior web </span>
          <span style={{ color: "coral", fontSize: 35, fontWeight: "bold" }}>
            developer
          </span>
        </div>

        <div
          className="col-xl-4 "
          style={{ marginBottom: 50, textAlign: "center" }}
        >
          <img
            className="foto"
            style={{ marginTop: 0 }} //backgroundImage:'URL(https://rel.ink/kXWQKe)'}}
            alt=""
            src="https://rel.ink/9MZVDp"
          />
        </div>
        <div className="col" />
      </div>
    </div>
  );
}
