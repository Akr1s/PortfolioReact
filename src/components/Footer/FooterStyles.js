import styled from "styled-components";
import { Flex } from "../GlobalComponents";

export const FooterContainer = styled.footer`
  padding: 2rem 48px 40px;
`;

export const FooterFlex = styled(Flex)`
  @media ${(p) => p.theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const LinksConainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(85px, 220px));
  gap: 40px;
  padding: 40px 0px 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Slogan = styled.p`
  color: rgba(255, 255, 255, 0.5);
  min-width: 280px;
  letter-spacing: 0.02em;
  font-size: 18px;
  line-height: 30px;
  padding: 1rem;
`;
