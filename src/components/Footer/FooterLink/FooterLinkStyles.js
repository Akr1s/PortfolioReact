import styled from "styled-components";

export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;
`;

export const Link = styled.a`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
  transition: all 0.3s ease 0s;
  position: relative;
  left: 0px;

  &:hover {
    color: rgb(255, 255, 255);
    left: 6px;
  }
`;
