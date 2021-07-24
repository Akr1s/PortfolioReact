import React from "react";
import {
  CategoryTechnology,
  CategoryTitle,
  TechnologiesContainer,
} from "./CategoryStyles";

function Category(props) {
  const { Icon, title, technologies } = props;
  return (
    <li>
      <CategoryTitle>
        <Icon style={{ marginRight: "10px" }} />
        {title}
      </CategoryTitle>
      <TechnologiesContainer>
        {technologies.map((technology, index) => (
          <CategoryTechnology key={index}>{technology}</CategoryTechnology>
        ))}
      </TechnologiesContainer>
    </li>
  );
}

export default Category;
