import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  gap: 3rem 2rem;

  @media ${(p) => p.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 0;
  }
`;
