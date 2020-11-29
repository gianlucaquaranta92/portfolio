import React from "react";
import { Problems } from "..//Problems";
import "./Description.css";

export function Description() {
  return (
    <div className="row ">
      <div className="col-1 col-xl-2"></div>
      <div className="col-10 col-xl-8 description">
        <h1 style={{ marginTop: 150, marginBottom: 50 }}>Santa's Factory</h1>
        <p style={{ marginBottom: 50 }}>
          Santa's Factory is a Project I built after I saw a cool work
          advertisement.
          <br /> Was needed a web developer to build up educational videogames
          with Javascript, in a school environment.
          <br />
          Santa's Factory is a 2D videogame focused on addition, with just the
          right amount of action and logic.
        </p>
        <a
          style={{ textDecoration: "none", marginLeft: 30 }}
          href="https://santas.gianluca.website/"
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
            marginTop: 100
          }}
        >
          <img
            alt=""
            src="https://i.imgur.com/cylIIfg.png"
            style={{ width: "100%" }}
          />
        </div>
        <h3 style={{ marginBottom: 50 }}>Project Purpose and Goal</h3>
        <p style={{ marginBottom: 50 }}>
          The goal was to create a game where the player would keep the focus on
          the additions but never get bored.
          <br />
          I'm a player myself and I thought having a score and a cooldown timer
          would add the right pressure and entertainment, to challenge the
          player to do better each time he restarted the game.
          <br />
          That process will automatically improve his mathematics skills, his
          mental habits of logic, and tenacity.
        </p>
        <Problems />
      </div>
      <div className="col-1 col-xl-2"></div>
    </div>
  );
}
