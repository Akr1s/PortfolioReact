import React from "react";
import styled from "styled-components";
import { Flex } from "../GlobalComponents";

const Slide = styled(Flex)`
  flex-direction: column;
  background: rgb(15, 22, 36);
  border-radius: 3px;
  align-items: center;
`;
const SlideTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  background: rgba(0, 0, 0, 0)
    linear-gradient(
      121.57deg,
      rgb(255, 255, 255) 10%,
      rgba(255, 255, 255, 0.66) 30.15%
    )
    repeat scroll 0% 0% padding-box text;
  margin-bottom: 8px;
`;
const SlideDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
`;

function SliderElement({ title, description }) {
  return (
    <Slide>
      <SlideTitle>{title}</SlideTitle>
      <SlideDescription>{description}</SlideDescription>
    </Slide>
  );
}

export default SliderElement;
