import React from "react";

export function Lesson() {
  return (
    <div className="row ">
      <div className="col-1 col-xl-3"></div>
      <div
        className="col-10 col-xl-6"
        style={{ textAlign: "center", marginBottom: 200 }}
      >
        <h3 style={{ marginTop: 100, marginBottom: 50 }}>Lessons learned</h3>
        <p>
          One valuable lesson I learned was the importance of resilience when
          encountering red errors during code testing.
          <br />
          Now i know that if there is an error, there is always a solution.
        </p>
      </div>

      <div className="col-1 col-xl-3"></div>
    </div>
  );
}
