import React from "react";

export function Lesson() {
  return (
    <div className="row ">
      <div className="col-1 col-xl-3"></div>
      <div
        className="col-10 col-xl-6"
        style={{ textAlign: "center", marginBottom: 200 }}
      >
        <h3 style={{ marginTop: 100, marginBottom: 50 }}>lessons learned</h3>
        <p>
          I could spend all day describing the lessons that I learned while
          working on this project, but the most important one involved my
          newfound understanding of React Hooks.
          <br /> As my first large project using React, I learned a lot of
          lessons regarding code structure and organization. When I first began,
          I would write sloppy code and move on, but now i spend a lot more time
          refactoring and improving every code's line I write, for the best
          readability and far fewer headaches.
        </p>
      </div>

      <div className="col-1 col-xl-3"></div>
    </div>
  );
}
