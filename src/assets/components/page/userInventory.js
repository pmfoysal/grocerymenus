import React from 'react';
import PageTitle from '@coreComp/pageTitle';
import ProductCard from '@coreComp/productCard';
import MainContainer from '@coreComp/mainContainer';
import {InventoriesContainer, InventoriesContent, InventoriesProducts} from '@pageStyle/inventories.styles';

export default function UserInventories() {
   return (
      <InventoriesContainer>
         <MainContainer>
            <PageTitle>
               my <span>items</span>
            </PageTitle>
            <InventoriesContent>
               <InventoriesProducts>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
               </InventoriesProducts>
            </InventoriesContent>
         </MainContainer>
      </InventoriesContainer>
   );
}
