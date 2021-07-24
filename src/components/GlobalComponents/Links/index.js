import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { LinksContainer, SocialLink } from "./LinksStyles";

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
