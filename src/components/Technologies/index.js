import React from "react";
import { SectionText, SectionTitle } from "../GlobalComponents";
import Section from "../GlobalComponents/Section";
import { TechnologiesList } from "./TechnologiesStyles";
import technologiesList from "../../data/technologies";
import Category from "./Category";

function Technoligies() {
  return (
    <Section id="technologies">
      <SectionTitle>Technoligies</SectionTitle>
      <SectionText>
        At this point my main objective is to become a Frontend React Developer
      </SectionText>
      <TechnologiesList>
        {technologiesList.map((category, index) => (
          <Category {...category} key={index} />
        ))}
      </TechnologiesList>
    </Section>
  );
}

export default Technoligies;
