import styled from "styled-components";

export const TechnoligiesList = styled.ul`
  display: flex;
  align-items: center;
`;

export const CategoryItem = styled.li``;

export const CategoryTitle = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: rgb(255, 255, 255);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  @media ${(p) => p.theme.breakpoints.md} {
    justify-content: center;
  }
`;

export const TechnologiesContainer = styled(TechnoligiesList)`
  flex-wrap: wrap;
  @media ${(p) => p.theme.breakpoints.md} {
    justify-content: space-around;
  }
`;

export const CategoryTechnology = styled.li`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  & + & {
    margin-left: 20px;
  }
  @media ${(p) => p.theme.breakpoints.md} {
    margin: 0;
  }
`;
