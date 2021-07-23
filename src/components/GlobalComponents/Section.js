import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  padding: 1rem 48px;
  margin-bottom: 2rem;
  position: relative;
`;

function Section({ id, children }) {
  return <SectionContainer id={id}>{children}</SectionContainer>;
}

export default Section;
