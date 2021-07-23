import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const SocialLink = styled.a`
  transition: all 0.3s ease 0s;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: rgb(33, 45, 69);
    transform: scale(1.2);
    cursor: pointer;
  }
  & + & {
    margin-left: 2rem;
  }
`;

const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
`;

function Links() {
  return (
    <LinksContainer>
      <SocialLink href="https://github.com/Akr1s" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/dmytro-akryshora-15674a1bb/"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/akriss71/" target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialLink>
    </LinksContainer>
  );
}

export default Links;
