import React from "react";

export function About() {
  return (
    <div>
      <div
        className="row shadow-lg "
        style={{
          color: "",
          height: "",
          backgroundColor: "white",
          padding: "80px 20px ",
          marginTop: -50,
          borderRadius: 3
        }}
      >
        <div
          className="col-xl-5 "
          style={{ backgroundImage: "", textAlign: "center" }}
        >
          <img
            className="picture"
            style={{ width: 350, marginBottom: 50 }}
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/757588674434170920/undraw_project_completed_w0oq.png"
            id="about"
          />
        </div>
        <div
          className=" col-xl-7 "
          style={{
            width: "100%"
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
            satisfied and so an year ago I started studying on Codecademy to
            become a web developer. <br />
            <br />
            I'm enjoying what I learn and at the moment I'm focusing a lot on
            React.
            <br />
            I'm a very versatile person and a quick learner.
            <br /> I'm looking for a place where I can grow and improve my
            skills while working and contributing to new projects.
          </p>
        </div>
      </div>
    </div>
  );
}
