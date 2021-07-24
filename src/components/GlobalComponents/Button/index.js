import React from "react";
import { ButtonContainer, ButtonLink } from "./ButtonStyles";

function Button({ children, href }) {
  return (
    <ButtonContainer>
      <ButtonLink href={href}>{children}</ButtonLink>
    </ButtonContainer>
  );
}

export default Button;
