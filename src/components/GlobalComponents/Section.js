import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  padding: 1rem 48px;
  margin-bottom: 2rem;
  position: ${(p) => (p.relative ? "relative" : "")};

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

function Section({ id, children, relative }) {
  return (
    <SectionContainer id={id} relative={relative}>
      {children}
    </SectionContainer>
  );
}

export default Section;
