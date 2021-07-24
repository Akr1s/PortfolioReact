import React from "react";
import { SectionContainer } from "./SectionStyles";

function Section({ id, children, relative }) {
  return (
    <SectionContainer id={id} relative={relative}>
      {children}
    </SectionContainer>
  );
}

export default Section;
