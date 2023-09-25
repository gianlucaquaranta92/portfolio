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
          Artkampen is a Web App in which users can earn medals by meeting
          objectives. They can also personalize their profiles with dynamic
          avatars and profile backgrounds.
          <br />I built the front end and managed the majority of the logic
          behind the achievements and objectives.
        </p>
        <a
          style={{ textDecoration: "none", marginLeft: 30 }}
          href="https://artkampen.se/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2>View Site</h2>
        </a>

        <div
          style={{
            boxShadow: "0px 10px 15px 2px rgb(120, 120, 120)",
            marginBottom: 150,
            width: "100%",
            marginTop: 100,
            borderRadius: "22px",
          }}
        >
          <img
            alt=""
            src="https://i.ibb.co/4drKppY/artkmapen-leaderboard.png"
            style={{ width: "100%" }}
          />
        </div>
        <h3 style={{ marginBottom: 50 }}>Project Purpose and Goal</h3>
        <p style={{ marginBottom: 50 }}>
          The brief from Sportfiskarna for this year's Art competition was to
          introduce competitions within the competition, aiming to encourage,
          inspire, and motivate all participants. Last year, the focus was
          primarily on the top 3, resulting in some participants gaining a
          significant lead.
          <br /> The keyword was gamification. The challenge was to find tasks
          that would be suitable for all geographical areas in Sweden and to
          allow participants, for instance, to challenge their closest friends
          in various mini-challenges.
          <br />
        </p>
        <Problems />
      </div>
      <div className="col-1 col-xl-2"></div>
    </div>
  );
}
