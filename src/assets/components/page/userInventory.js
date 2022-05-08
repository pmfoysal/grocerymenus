import React, {useContext} from 'react';
import SetTitle from '@helper/setTitle';
import PageTitle from '@coreComp/pageTitle';
import EmptyCard from '@coreComp/emptyCard';
import ProductCard from '@coreComp/productCard';
import MainContainer from '@coreComp/mainContainer';
import {StoreContext} from '@context/storeProvider';
import useUserProducts from '@hook/useUserProducts';
import {InventoriesContainer, InventoriesContent, InventoriesProducts} from '@pageStyle/inventories.styles';

export default function UserInventories() {
   const {user} = useContext(StoreContext);
   const {products, setRender} = useUserProducts(user.email);

   return (
      <React.Fragment>
         <SetTitle title='Inventories - See Your Inventories!' />
         <InventoriesContainer>
            <MainContainer>
               <PageTitle>
                  my <span>items</span>
               </PageTitle>
               <InventoriesContent>
                  <InventoriesProducts>
                     {!products.length && <EmptyCard />}
                     {products.map(data => (
                        <ProductCard data={data} key={data._id} setRender={setRender} />
                     ))}
                  </InventoriesProducts>
               </InventoriesContent>
            </MainContainer>
         </InventoriesContainer>
      </React.Fragment>
   );
}
