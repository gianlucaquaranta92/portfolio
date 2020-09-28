import React from "react";

import { Bar } from "../Components/Bars/Bar";
import { Main } from "../Components/Main/Main";
import { Container } from "../Components/Container/Container";
import { BlackBar } from "../Components/Bars/BlackBar";

export function Home() {
  return (
    <div
      className=""
      style={{
        backgroundColor: "hsla(186, 90%, 80%, 0.2)",
        overflow: "hidden"
      }}
    >
      <Bar />
      <Main />
      <div>
        <Container />
        <BlackBar />
      </div>
    </div>
  );
}
