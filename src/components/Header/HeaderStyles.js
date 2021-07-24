import styled from "styled-components";
import { Flex } from "../GlobalComponents";

export const HeaderFlex = styled(Flex)`
  @media ${(p) => p.theme.breakpoints.md} {
    flex-wrap: wrap;
  }
`;

export const TitleText = styled.h1`
  margin: 0;
  font-size: 2rem;
  @media ${(p) => p.theme.breakpoints.extraSm} {
    font-size: 1.6rem;
  }
`;

export const Nav = styled.nav`
  @media ${(p) => p.theme.breakpoints.md} {
    order: 2;
    flex-basis: 100%;
    margin-top: 20px;
  }
`;

export const NavBar = styled.ul`
  display: flex;
  @media ${(p) => p.theme.breakpoints.md} {
    justify-content: space-around;
  }
`;

export const NavBarLi = styled.li`
  & + & {
    margin-left: 3rem;
  }
`;

export const NavBarLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  transition: all 0.4s ease 0s;
  color: rgba(255, 255, 255, 0.75);
  &:hover {
    color: rgb(255, 255, 255);
    opacity: 1;
    cursor: pointer;
  }
  @media ${(p) => p.theme.breakpoints.extraSm} {
    font-size: 1.7rem;
  }
`;
