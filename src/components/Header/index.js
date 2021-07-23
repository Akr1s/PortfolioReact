import React from "react";
import { Flex } from "../GlobalComponents";
import {
  HeaderFlex,
  Nav,
  NavBar,
  NavBarLi,
  NavBarLink,
  TitleText,
} from "./HeaderStyles";
import { AiFillDingtalkCircle } from "react-icons/ai";
import Links from "../GlobalComponents/Links";

function Header() {
  return (
    <HeaderFlex justify="space-between" padding="2rem 1rem 1rem">
      <Flex justify="flex-start">
        <AiFillDingtalkCircle size="3rem" />
        <TitleText>Portfolio</TitleText>
      </Flex>
      <Nav>
        <NavBar>
          <NavBarLi>
            <NavBarLink href="#projects">Project</NavBarLink>
          </NavBarLi>
          <NavBarLi>
            <NavBarLink href="#technologies">Technologies</NavBarLink>
          </NavBarLi>
          <NavBarLi>
            <NavBarLink href="#about">About</NavBarLink>
          </NavBarLi>
        </NavBar>
      </Nav>
      <Links />
    </HeaderFlex>
  );
}

export default Header;
