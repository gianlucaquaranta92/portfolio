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
            satisfied and so I started studying on Codecademy to become a web
            developer <br />
            <br />
            Right now i work as web developer in Norrköping. I build websites
            and E-commerce using Wordpress and Woocommerce, and sometimes i make
            up the design of all the website.
          </p>
        </div>
      </div>
    </div>
  );
}
