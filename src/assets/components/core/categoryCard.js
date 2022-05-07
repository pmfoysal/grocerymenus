import React from 'react';
import categoryData from '@data/categoryData';
import {CategoryCardContainer, CategoryCardImage, CategoryCardText} from '@coreStyle/categoryCard.styles';

export default function CategoryCard() {
   const data = categoryData[1];
   const {image, name, color} = data;

   return (
      <CategoryCardContainer bg={color}>
         <CategoryCardImage src={image} alt='categories' />
         <CategoryCardText>{name}</CategoryCardText>
      </CategoryCardContainer>
   );
}
