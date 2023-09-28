import React from "react";

export function About() {
  return (
    <div id="about">
      <div
        className="row"
        style={{
          marginTop: "2rem",
          marginBottom: "4rem",
        }}
      >
        <div
          className=""
          style={{
            width: "100%",
          }}
        >
          <h3 style={{ marginBottom: "1rem" }}>
            <strong>About Me</strong>
          </h3>
          <p style={{ margin: 0, color: "" }}>
            Hi, I'm Gianluca, I'm an Italian guy that 7 years ago moved with my
            girlfriend to this beautiful country called Sweden.
            <br />
            in January 2020 I started my coding journey with a course on
            Codecademy about HTML+CSS+JS and then i learned React. <br />
            <br />
            In March 2021 I started my first job as a web developer, where I've
            since become more proficient in WordPress and PHP.
            <br />
            In october 2021 i started my current job as web developer at Tankbar
            AB. Since then it's been a continued improvement of my soft skills
            and knowledge regarding WordPress and PHP.
          </p>
        </div>
      </div>
    </div>
  );
}
