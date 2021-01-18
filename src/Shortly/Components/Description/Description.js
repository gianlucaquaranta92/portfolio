import React from "react";
import { Problems } from "..//Problems";
import "./Description.css";

export function Description() {
  return (
    <div className="row ">
      <div className="col-1 col-xl-2"></div>
      <div className="col-10 col-xl-8 description">
        <h1 style={{ marginTop: 150, marginBottom: 50 }}>Shortly</h1>
        <p style={{ marginBottom: 50 }}>
          Shortly is a project I built for a personal challenge. As soon as i
          learned how to works with APIs I wanted to test my self on a new
          project, so I selected Shortly from the Frontend Mentor website.
          Frontend mentor is a cool place that gives you the chance to work as
          if you were working with a real designer.
          <br />
          They provide the details you need about the project like design,
          colors, fonts, etc. but you have complete control over which
          JavaScript framework/library or packages you use to do things.
        </p>
        <a
          style={{ textDecoration: "none", marginLeft: 30 }}
          href="https://92qfy.csb.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2>View Site</h2>
        </a>
        <p style={{ color: "red", opacity: 0.5 }}>
          *The Shorten button doesn't work at the moment because rel.ink doesn't
          provide the API anymore.{" "}
        </p>
        <div
          style={{
            boxShadow: "0px 10px 15px 2px rgb(120, 120, 120)",
            marginBottom: 150,
            width: "100%",
            marginTop: 100
          }}
        >
          <img
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/756519425359872073/desktop-preview.jpg"
            style={{ width: "100%" }}
          />
        </div>
        <h3 style={{ marginBottom: 50 }}>Project Purpose and Goal</h3>
        <p style={{ marginBottom: 50 }}>
          The challenge was to integrate with the rel.ink API to create
          shortened URLs and display them like in the designs. The search bar
          should create a list that remains and the user should be able to copy
          the shortened link to their clipboard in a single click. I decided to
          start with the structure of the whole page, then move to the most
          complex part of the project: the Searchbar and the list.
          <br />
        </p>
        <Problems />
      </div>
      <div className="col-1 col-xl-2"></div>
    </div>
  );
}
