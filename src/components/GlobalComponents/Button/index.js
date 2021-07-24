import React from "react";
import { ButtonContainer, ButtonLink } from "./ButtonStyles";

function Button({ children }) {
  return (
    <ButtonContainer>
      <ButtonLink>{children}</ButtonLink>
    </ButtonContainer>
  );
}

export default Button;
