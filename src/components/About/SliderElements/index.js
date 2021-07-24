import React from "react";
import { Slide, SlideDescription, SlideTitle } from "./SliderElementStyles";

function SliderElement({ title, description }) {
  return (
    <Slide>
      <SlideTitle>{title}</SlideTitle>
      <SlideDescription>{description}</SlideDescription>
    </Slide>
  );
}

export default SliderElement;
