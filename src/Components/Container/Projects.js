import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
export function Projects() {
  return (
    <div id="projects">
      <div>
        <h2 style={{ marginTop: 100, marginBottom: 50 }}>
          <strong>What I've been working on</strong>
        </h2>
        <p style={{ marginBottom: 70 }}>
          I like to stay busy and always have a project in the works. Take a
          look at some of the applications, articles, and companies I've
          dedicated my time to.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginBottom: 100
        }}
      >
        <div
          style={{ borderColor: "rgba(0, 0, 0, 0.9)" }}
          className="view view-first"
        >
          <img
            alt=""
            src="https://www.wikibit.it/wp-content/uploads/2017/04/cosa-significa-short-url.png"
          />
          <div className="mask">
            <h2>Shortly</h2>
            <p>An URL shortening API landing page.</p>
            <Link to="/portfolio/shortly" className="info">
              VIEW
            </Link>
          </div>
        </div>
        <div className="view view-first">
          <img
            style={{ marginTop: -1, height: 300, width: 900 }}
            alt=""
            src="https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/background_search_desktop.jpg"
          />
          <div className="mask">
            <h2>Ravenous</h2>
            <p>
              An App the allows the users to find any business all over the the
              world.
            </p>
            <Link to="/portfolio/Ravenous" className="info">
              VIEW
            </Link>
          </div>
        </div>
        <div className="view view-first">
          <img
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/748582301411311647/sfera.png"
          />
          <div className="mask">
            <h2>Pokedex</h2>
            <p>
              The reproduction of the Pokèmon's encyclopedia wich store all the
              existing Pokèmons.
            </p>
            <Link to="/portfolio/Pokedex" className="info">
              VIEW
            </Link>
          </div>
        </div>
        <div className="view view-first">
          <img
            alt=""
            src="https://i.imgur.com/CpvvCLJ.png"
            style={{ width: 300, height: 300 }}
          />
          <div className="mask">
            <h2>Santa's Factory</h2>
            <p>
              A 2D action game based on mathematical additions in a Christmas
              environment.
            </p>
            <Link to="/portfolio/santas" className="info">
              VIEW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
