import React from "react";
import { SectionText, SectionTitle } from "../GlobalComponents";
import Section from "../GlobalComponents/Section";
import SlickSlider from "./SlickSlider";

function About() {
  return (
    <Section id="about">
      <SectionTitle>About</SectionTitle>
      <SectionText>
        My goal is to become Senior Developer as soon as possible
      </SectionText>
      <SlickSlider />
    </Section>
  );
}

export default About;
