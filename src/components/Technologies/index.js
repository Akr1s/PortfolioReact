import React from "react";
import { SectionText, SectionTitle } from "../GlobalComponents";
import Section from "../GlobalComponents/Section";
import { TechnoligiesList } from "./TechnologiesStyles";
import technologiesList from "../../data/technologies";
import Category from "./Category";

function Technoligies() {
  return (
    <Section id="technologies">
      <SectionTitle>Technoligies</SectionTitle>
      <SectionText>
        I've worked with a range a technologies in the web development world.
        From Back-end To Design
      </SectionText>
      <TechnoligiesList>
        {technologiesList.map((category, index) => (
          <Category {...category} key={index} />
        ))}
      </TechnoligiesList>
    </Section>
  );
}

export default Technoligies;
