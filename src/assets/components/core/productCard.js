import React from 'react';
import {Icon} from '@iconify/react';
import image from '@image/product.png';
import ImgLoader from '@baseComp/imgLoader';
import {
   ProductCardButton,
   ProductCardButtons,
   ProductCardContainer,
   ProductCardDesc,
   ProductCardInfo,
   ProductCardInfos,
   ProductCardPara,
   ProductCardPrice,
   ProductCardStock,
   ProductCardTexts,
   ProductCardTitle,
} from '@coreStyle/productCard.styles';

export default function ProductCard({home}) {
   const stock = true;

   return (
      <ProductCardContainer>
         <ImgLoader src={image} />
         <ProductCardTexts>
            <ProductCardTitle>spicy tomato</ProductCardTitle>
            <ProductCardDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis!</ProductCardDesc>
            <ProductCardInfos>
               <ProductCardInfo>
                  <ProductCardPrice>
                     price:{' '}
                     <span>
                        $30.00<span>/kg</span>
                     </span>
                  </ProductCardPrice>
                  <ProductCardPara>
                     supplier: <span>google</span>
                  </ProductCardPara>
               </ProductCardInfo>
               <ProductCardInfo>
                  <ProductCardPara>
                     quantity: <span>20</span>
                  </ProductCardPara>
                  <ProductCardStock stock={stock}>
                     {stock ? (
                        <React.Fragment>
                           <Icon icon='ep:circle-check-filled' />
                           in stock
                        </React.Fragment>
                     ) : (
                        <React.Fragment>
                           <Icon icon='ep:circle-close-filled' />
                           stock out
                        </React.Fragment>
                     )}
                  </ProductCardStock>
               </ProductCardInfo>
            </ProductCardInfos>
            <ProductCardButtons>
               <ProductCardButton edit>edit</ProductCardButton>
               <ProductCardButton>update</ProductCardButton>
               {!home && <ProductCardButton danger>delete</ProductCardButton>}
            </ProductCardButtons>
         </ProductCardTexts>
      </ProductCardContainer>
   );
}
