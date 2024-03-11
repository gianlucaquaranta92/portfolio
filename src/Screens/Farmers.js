import React from "react";
import "../Screens.css";
import { Description } from "../Farmers/Description/Description";
import { Images } from "../Farmers/Images";
import { Lesson } from "../Farmers/Lesson";
import { Projects } from "../Farmers/Projects/Projects";
import { BlackBar } from "../Farmers/Blackbar";

export function Farmers() {
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
