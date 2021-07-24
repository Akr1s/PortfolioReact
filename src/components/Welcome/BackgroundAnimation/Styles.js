import styled from "styled-components";

export const AnimationContainer = styled.div`
  position: absolute;
  right: 100px;
  top: 10px;
  width: 40%;
  height: auto;
  @media ${(p) => p.theme.breakpoints.sm} {
    display: none;
  }
`;
