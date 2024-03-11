import React from "react";
import "../Screens.css";
import { Description } from "../Sverige500/Description/Description";
import { Images } from "../Sverige500/Images";
import { Lesson } from "../Sverige500/Lesson";
import { Projects } from "../Sverige500/Projects/Projects";
import { BlackBar } from "../Sverige500/Blackbar";

export function Sverige500() {
  return (
    <div>
      <Description />

      <Images />
      <Lesson />
      <Projects />
      <BlackBar />
    </div>
  );
}
