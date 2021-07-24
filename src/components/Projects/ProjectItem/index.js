import React from "react";
import {
  ContentTitle,
  Link,
  LinksContainer,
  ProjectDescription,
  ProjectItemContainer,
  ProjectPoster,
  ProjectTitle,
  Separator,
  StackList,
} from "./ProjectItemStyles";

function ProjectItem(props) {
  const { poster, title, description, codeLink, liveLink, stack } = props;
  return (
    <ProjectItemContainer>
      <ProjectPoster src={poster} alt={title} />
      <ProjectTitle>{title}</ProjectTitle>
      <Separator />
      <ProjectDescription>{description}</ProjectDescription>
      <ContentTitle>Stack</ContentTitle>
      <StackList>
        {stack.map((stackItem, index) => (
          <li
            style={{
              color: " rgb(216, 191, 191)",
              fontSize: "1.5rem",
              marginBottom: "10px",
            }}
            key={index}
          >
            {stackItem}
          </li>
        ))}
      </StackList>
      <LinksContainer>
        <Link href={codeLink} target="_blank">
          Code
        </Link>
        <Link href={liveLink} target="_blank">
          Live App
        </Link>
      </LinksContainer>
    </ProjectItemContainer>
  );
}

export default ProjectItem;
