import React from "react";

export function About() {
  return (
    <div>
      <div
        className="row "
        style={{
          marginTop: "2rem",
        }}
      >
        <div
          className=" col-xl-7 "
          style={{
            width: "100%",
          }}
        >
          <h3 style={{ marginBottom: 50 }}>
            <strong>About Me</strong>
          </h3>
          <p style={{ margin: 0, color: "" }}>
            Hi, I'm Gianluca, I'm an Italian guy that four years ago moved with
            my girlfriend to this beautiful country called Sweden.
            <br />
            After many years and different jobs, I realized that I wasn't
            satisfied and so in January 2020 I started studying on Codecademy to
            become a web developer <br />
            <br />
            In March 2022 I started my current job as a web developer at Tankbar
            AB in Nyköping.
            <br />
            Since then it's been a continued improvement of my soft skills and
            knowledge regarding WordPress and PHP.
          </p>
        </div>
      </div>
    </div>
  );
}
