import React from "react";

export function Main() {
  return (
    <div
      className="container-fluid "
      style={{
        backgroundColor: "",
        marginTop: "5rem",

        /* backgroundImage:
          "URL(https://cdn.discordapp.com/attachments/165746589309206528/746685102175813693/pattern_background3.png)"*/
      }}
    >
      <div style={{ marginTop: 20 }} className="row">
        <div className="col" />
        <div
          style={{ margin: "auto" }}
          className="col-xl-5  col-lg-12 col-md-12  col-sm-12 title"
        >
          <h2 style={{ fontSize: 24, marginBottom: 22 }}>
            Hey there, I'm Gianluca Quaranta
          </h2>
          <h1
            style={{
              color: "",
              marginTop: -10,
              marginBottom: 16,
              fontSize: 38,
              lineHeight: 1.4,
              fontWeight: 600,
            }}
          >
            -a Web developer with a deep passion for Front-End
          </h1>
          <span style={{ fontSize: 16, color: "#8d8d98" }}>
            Armed with sharp problem-solving abilities and a proactive approach
            to front-end challenges
          </span>
          <div style={{ marginTop: 32, marginBottom: 40 }}>
            <a
              style={{ marginRight: 16 }}
              className="buttonBlack"
              href="#contact"
            >
              Contact me
            </a>
            <a className="buttonWhite" href="#projects">
              See my work
            </a>
          </div>
          {/*}  <span style={{ color: "coral", fontSize: 35, fontWeight: "bold" }}>
            developer
          </span>
          {*/}
        </div>

        <div
          className="col-xl-4 "
          style={{ marginBottom: 50, textAlign: "center" }}
        >
          <img
            className="foto"
            style={{ marginTop: 0 }} //backgroundImage:'URL(https://rel.ink/kXWQKe)'}}
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/730423597243564122/IO_senza_sfondo2.png"
          />
        </div>
        <div className="col" />
      </div>
    </div>
  );
}
