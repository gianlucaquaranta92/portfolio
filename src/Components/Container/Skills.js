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
          science and web development concepts, and the advertising graphic's
          degree helps me a lot to work with the design of the projects.
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
          <li>HTML</li>
          <li>CSS</li>
        </div>
        <div style={{ margin: "-20px 10px -20px 10px" }}>
          <li>Javascript</li>
          <li>React</li>
        </div>

        <div style={{ margin: "-20px 10px -20px 10px" }}>
          <li>Phaser</li>
          <li>Bootstrap</li>
        </div>
        <div style={{ margin: "-20px 10px -20px 10px" }}>
          <li>Illustrator</li>
          <li>Photoshop</li>
        </div>
      </div>
    </div>
  );
}
