import React from "react";
export function Skills() {
  return (
    <div style={{ marginTop: 200 }}>
      <div className="col-12 " style={{ marginLeft: -20 }}>
        <h2 style={{ marginBottom: 50 }}>
          <strong>My Skills</strong>
        </h2>
        <p>
          Through my studies, I've gained a good understanding of computer
          science and web development concepts,and from my current work
          experience, I learned new languages such as PHP and new systems such
          as WordPress and woocommerce.
        </p>
      </div>
      <div
        style={{
          fontSize: 19,
          width: "80%",
          marginTop: 90,
          marginBottom: 200,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        <div style={{ margin: "-20px 10px -20px 10px" }}>
          <li>HTML & CSS</li>
          <li>Javascript</li>
        </div>
        <div style={{ margin: "-20px 10px -20px 10px" }}>
          <li>SCSS</li>
          <li>React</li>
        </div>

        <div style={{ margin: "-20px 10px -20px 10px" }}>
          <li>PHP</li>
          <li>WordPress</li>
        </div>
      </div>
    </div>
  );
}
