import React from 'react';
import useProducts from '@hook/useProducts';
import {useNavigate} from 'react-router-dom';
import ProductCard from '@coreComp/productCard';
import MainContainer from '@coreComp/mainContainer';
import {HomeContentProducts, HomeProductButton, HomeProductContainer, HomeProductContent} from '@baseStyle/homeProduct.styles';
import PageLoader from './pageLoader';

export default function HomeProduct() {
   const {products} = useProducts();
   const navigate = useNavigate();

   function clickHandler() {
      navigate('/inventories');
   }

   return (
      <HomeProductContainer>
         {!products.length && <PageLoader />}
         <MainContainer>
            <HomeProductContent>
               <HomeContentProducts>
                  {products.slice(undefined, 6).map(data => (
                     <ProductCard data={data} key={data._id} home />
                  ))}
               </HomeContentProducts>
               <HomeProductButton onClick={clickHandler}>manage inventories</HomeProductButton>
            </HomeProductContent>
         </MainContainer>
      </HomeProductContainer>
   );
}
