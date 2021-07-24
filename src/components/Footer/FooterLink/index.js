import React from "react";
import { LinkTitle, Link } from "./FooterLinkStyles";

function FooterLink({ title, href, linkText }) {
  return (
    <div>
      <LinkTitle>{title}</LinkTitle>
      <Link href={href}>{linkText}</Link>
    </div>
  );
}

export default FooterLink;
