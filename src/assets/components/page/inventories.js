import React from 'react';
import SetTitle from '@helper/setTitle';
import PageTitle from '@coreComp/pageTitle';
import useProducts from '@hook/useProducts';
import EmptyCard from '@coreComp/emptyCard';
import {useNavigate} from 'react-router-dom';
import ProductCard from '@coreComp/productCard';
import MainContainer from '@coreComp/mainContainer';
import {InventoriesContainer, InventoriesContent, InventoriesProducts, InventoryAddButton} from '@pageStyle/inventories.styles';

export default function Inventories() {
   const {products, setRender} = useProducts();
   const navigate = useNavigate();

   function clickHandler() {
      navigate('/inventory/add');
   }

   return (
      <React.Fragment>
         <SetTitle title='Inventories - Manage All Inventories!' />
         <InventoriesContainer>
            <MainContainer>
               <PageTitle>
                  manage <span>inventories</span>
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
