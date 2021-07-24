import React from "react";
import {
  CategoryItem,
  CategoryTechnology,
  CategoryTitle,
  TechnologiesContainer,
} from "./TechnologiesStyles";

function Category(props) {
  const { Icon, title, technologies } = props;
  return (
    <CategoryItem>
      <CategoryTitle>
        <Icon style={{ marginRight: "10px" }} />
        {title}
      </CategoryTitle>
      <TechnologiesContainer>
        {technologies.map((technology, index) => (
          <CategoryTechnology key={index}>{technology}</CategoryTechnology>
        ))}
      </TechnologiesContainer>
    </CategoryItem>
  );
}

export default Category;
