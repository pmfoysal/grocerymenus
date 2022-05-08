import React from 'react';
import useProducts from '@hook/useProducts';
import EmptyCard from '@coreComp/emptyCard';
import {useNavigate} from 'react-router-dom';
import ProductCard from '@coreComp/productCard';
import MainContainer from '@coreComp/mainContainer';
import {HomeContentProducts, HomeProductButton, HomeProductContainer, HomeProductContent} from '@baseStyle/homeProduct.styles';

export default function HomeProduct() {
   const {products, setRender} = useProducts();
   const navigate = useNavigate();

   function clickHandler() {
      navigate('/inventories');
   }

   return (
      <HomeProductContainer>
         <MainContainer>
            <HomeProductContent>
               {!products.length && <EmptyCard />}
               <HomeContentProducts>
                  {products.slice(undefined, 6).map(data => (
                     <ProductCard data={data} key={data._id} setRender={setRender} home />
                  ))}
               </HomeContentProducts>
               {products.length && <HomeProductButton onClick={clickHandler}>manage inventories</HomeProductButton>}
            </HomeProductContent>
         </MainContainer>
      </HomeProductContainer>
   );
}
