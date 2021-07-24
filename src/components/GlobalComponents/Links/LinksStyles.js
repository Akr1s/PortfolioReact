import styled from "styled-components";

export const SocialLink = styled.a`
  transition: all 0.3s ease 0s;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: rgb(33, 45, 69);
    transform: scale(1.2);
    cursor: pointer;
  }
  & + & {
    margin-left: 2rem;
  }
`;

export const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
`;
