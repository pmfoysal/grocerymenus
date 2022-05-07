import React from 'react';
import categoryData from '@data/categoryData';
import CategoryCard from '@coreComp/categoryCard';
import MainContainer from '@coreComp/mainContainer';
import {HomeCategoryContainer} from '@baseStyle/homeCategory.styles';

export default function HomeCategory() {
   return (
      <HomeCategoryContainer>
         <MainContainer>
            {categoryData.map(data => (
               <CategoryCard data={data} key={data.id} />
            ))}
         </MainContainer>
      </HomeCategoryContainer>
   );
}
