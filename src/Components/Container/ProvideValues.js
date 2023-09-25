import React from "react";

export function ProvideValues() {
  return (
    <div
      className="row shadow-lg "
      style={{
        textAlign: "center",
        color: "",
        height: "",
        backgroundColor: "white",
        padding: "2rem",
        marginTop: -50,
        borderRadius: 3,
      }}
    >
      <div
        style={{
          width: "100%",
        }}
      >
        <h3 style={{ margin: "1rem" }}>
          <strong>Ways i can provide value</strong>
        </h3>
        <div>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            I have extensive professional experience working with WordPress and
            WooCommerce, in designing, developing and maintaining new themes or
            enhancing existing ones.I also have a background in React, and when
            it comes to learning new skills, I'm quite fast at it.
          </div>
          <div style={{ display: "flex", marginTop: "2rem", gap: "3rem" }}>
            <div className="singleValuePuff">
              <h4>Propositive team-member</h4>
              <div style={{ opacity: 0.5 }}>
                I excel at collaborating closely with designers and colleagues
                on shared projects. I've mastered the "art of" focusing on
                solutions rather than problems, making me a propositive team
                member when working collaboratively.
              </div>
            </div>
            <div className="singleValuePuff">
              <h4>Front-End Solution Enthusiast</h4>
              <div style={{ opacity: 0.5 }}>
                I thrive in the intricate world of front-end development,
                constantly seeking innovative solutions to complex challenges.
                Finding and applying these solutions truly excites me
                (especially when working with JS).
              </div>
            </div>
            <div className="singleValuePuff">
              <h4>Client support</h4>
              <div style={{ opacity: 0.5 }}>
                I always focus on giving clients the best value. My background
                in client support helps me resolve issues, answer questions, and
                create customized solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
