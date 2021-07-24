import styled from "styled-components";

export const ProjectItemContainer = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: rgba(80, 78, 78, 0.5) 3px 3px 20px;
  text-align: center;
  overflow: hidden;
`;

export const ProjectPoster = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const ProjectTitle = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: rgb(156, 201, 227);
  padding: 0.5rem 0px;
  font-size: 3rem;
`;

export const Separator = styled.div`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0px none;
  background: rgb(208, 187, 87);
`;

export const ProjectDescription = styled.p`
  width: 100%;
  padding: 0px 50px;
  color: rgb(228, 230, 231);
  line-height: 24px;
  text-align: justify;

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 0 10px;
  }
`;

export const ContentTitle = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const StackList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  width: 100%;
  @media ${(p) => p.theme.breakpoints.sm} {
    flex-wrap: wrap;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 2.5rem 0px;
`;

export const Link = styled.a`
  color: rgb(212, 192, 192);
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: rgb(107, 48, 48);
  border-radius: 15px;
  transition: all 0.5s ease 0s;
  &:hover {
    background: rgb(128, 20, 20);
  }
`;
