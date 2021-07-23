import React from "react";
import { SectionText, SectionTitle } from "../GlobalComponents";
import Button from "../GlobalComponents/Button";
import Section from "../GlobalComponents/Section";
import BackgroundAnimation from "./BackgroundAnimation";

function Welcome() {
  return (
    <Section id="welcome" relative={true}>
      <SectionTitle main>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this page is to help me introduce myself to other
        developers.
      </SectionText>
      <Button>Read More</Button>
      <BackgroundAnimation />
    </Section>
  );
}

export default Welcome;
