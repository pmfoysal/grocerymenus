import React from 'react';
import ProductCard from '@coreComp/productCard';
import MainContainer from '@coreComp/mainContainer';
import {HomeContentProducts, HomeProductButton, HomeProductContainer, HomeProductContent} from '@baseStyle/homeProduct.styles';

export default function HomeProduct() {
   return (
      <HomeProductContainer>
         <MainContainer>
            <HomeProductContent>
               <HomeContentProducts>
                  <ProductCard home />
                  <ProductCard home />
                  <ProductCard home />
                  <ProductCard home />
                  <ProductCard home />
                  <ProductCard home />
               </HomeContentProducts>
               <HomeProductButton>manage inventories</HomeProductButton>
            </HomeProductContent>
         </MainContainer>
      </HomeProductContainer>
   );
}
