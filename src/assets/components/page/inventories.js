import React from 'react';
import PageTitle from '@coreComp/pageTitle';
import useProducts from '@hook/useProducts';
import ProductCard from '@coreComp/productCard';
import MainContainer from '@coreComp/mainContainer';
import {InventoriesContainer, InventoriesContent, InventoriesProducts} from '@pageStyle/inventories.styles';

export default function Inventories() {
   const {products, setRender} = useProducts();

   return (
      <InventoriesContainer>
         <MainContainer>
            <PageTitle>
               manage <span>inventories</span>
            </PageTitle>
            <InventoriesContent>
               <InventoriesProducts>
                  {products.map(data => (
                     <ProductCard data={data} key={data._id} setRender={setRender} />
                  ))}
               </InventoriesProducts>
            </InventoriesContent>
         </MainContainer>
      </InventoriesContainer>
   );
}
