import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 1rem 48px;
  margin-bottom: 2rem;
  position: ${(p) => (p.relative ? "relative" : "")};

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;
