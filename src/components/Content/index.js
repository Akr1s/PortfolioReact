import React from "react";
import Projects from "../Projects";
import Technoligies from "../Technologies";
import Welcome from "../Welcome";
import About from "../About";
import { SectionDivider } from "../GlobalComponents";

function Content() {
  return (
    <main>
      <Welcome />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Technoligies />
      <SectionDivider />
      <About />
    </main>
  );
}

export default Content;
