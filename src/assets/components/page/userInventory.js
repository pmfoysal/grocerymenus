import React, {useContext} from 'react';
import PageTitle from '@coreComp/pageTitle';
import ProductCard from '@coreComp/productCard';
import MainContainer from '@coreComp/mainContainer';
import {StoreContext} from '@context/storeProvider';
import {InventoriesContainer, InventoriesContent, InventoriesProducts} from '@pageStyle/inventories.styles';

export default function UserInventories() {
   const {user} = useContext(StoreContext);

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
