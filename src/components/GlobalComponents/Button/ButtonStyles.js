import styled from "styled-components";
import { Flex } from "..";

export const ButtonContainer = styled(Flex)`
  cursor: pointer;
  width: 262px;
  height: 64px;
  background: rgba(0, 0, 0, 0)
    linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%) repeat
    scroll 0% 0%;
  transition: all 0.4s ease 0s;
  border-radius: 50px;
  &:hover {
    background: rgba(0, 0, 0, 0)
      linear-gradient(270deg, rgb(0, 219, 216) 0%, rgb(177, 51, 255) 100%)
      repeat scroll 0% 0%;
  }

  @media ${(p) => p.theme.breakpoints.md} {
    width: 184px;
    height: 48px;
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const ButtonLink = styled.a`
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-weight: 600;
  box-shadow: none;

  @media ${(p) => p.theme.breakpoints.md} {
    font-size: 16px;
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;
