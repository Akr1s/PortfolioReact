import React from "react";
import FooterLink from "./FooterLink";
import {
  FooterContainer,
  FooterFlex,
  LinksConainer,
  Slogan,
} from "./FooterStyles";
import Links from "../GlobalComponents/Links";

function Footer() {
  return (
    <FooterContainer>
      <LinksConainer>
        <FooterLink
          title="CALL"
          href="tel:111-111-1111"
          linkText="111-111-1111"
        />
        <FooterLink
          title="EMAIL"
          href="mailto:contact@me.net"
          linkText="contact@me.net"
        />
      </LinksConainer>
      <FooterFlex justify="space-between">
        <Slogan>Innovating one project at a time</Slogan>
        <Links />
      </FooterFlex>
    </FooterContainer>
  );
}

export default Footer;
