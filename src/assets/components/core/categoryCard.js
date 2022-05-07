import React from 'react';
import {CategoryCardContainer, CategoryCardImage, CategoryCardText} from '@coreStyle/categoryCard.styles';

export default function CategoryCard({data}) {
   const {image, name, color} = data;

   return (
      <CategoryCardContainer bg={color}>
         <CategoryCardImage src={image} alt='categories' />
         <CategoryCardText>{name}</CategoryCardText>
      </CategoryCardContainer>
   );
}
