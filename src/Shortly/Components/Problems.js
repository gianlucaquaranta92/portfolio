import React from "react";

export function Problems() {
  return (
    <div className="row ">
      <div className=" col-xl-6 col-lg-6">
        <img
          style={{ width: "100%" }}
          src="https://cdn.discordapp.com/attachments/165746589309206528/756113156618846218/undraw_goals_w8tw.png"
          alt=""
        />
      </div>
      <div className=" col-xl-6 col-lg-6">
        <h3 style={{ marginBottom: 50 }}>Problems and Thought Process</h3>
        <p>
          The user should be able to view the optimal layout for the site
          depending on their device's screen size and Bootstrap helped me a lot
          with that.
          <br />
          The hardest part was making the list of the shortened links because i
          was not sure how to build it without having the same link logged over
          and over.
          <br /> Was also the first time I worked with many things like the
          Bootstrap Grid System and smaller things like error messages and bar
          menu.
        </p>
      </div>
    </div>
  );
}
