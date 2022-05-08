import React, {useContext} from 'react';
import SetTitle from '@helper/setTitle';
import PageTitle from '@coreComp/pageTitle';
import EmptyCard from '@coreComp/emptyCard';
import {useNavigate} from 'react-router-dom';
import ProductCard from '@coreComp/productCard';
import MainContainer from '@coreComp/mainContainer';
import {StoreContext} from '@context/storeProvider';
import useUserProducts from '@hook/useUserProducts';
import {InventoriesContainer, InventoriesContent, InventoriesProducts, InventoryAddButton} from '@pageStyle/inventories.styles';

export default function UserInventories() {
   const {user} = useContext(StoreContext);
   const {products, setRender} = useUserProducts(user.email);
   const navigate = useNavigate();

   function clickHandler() {
      navigate('/inventory/add');
   }

   return (
      <React.Fragment>
         <SetTitle title='Inventories - See Your Inventories!' />
         <InventoriesContainer>
            <MainContainer>
               <PageTitle>
                  my <span>items</span>
               </PageTitle>
               <InventoryAddButton onClick={clickHandler}>add new inventory</InventoryAddButton>
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
