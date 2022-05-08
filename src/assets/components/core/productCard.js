import React from 'react';
import {Icon} from '@iconify/react';
import image from '@image/product.png';
import ImgLoader from '@baseComp/imgLoader';
import {useNavigate} from 'react-router-dom';
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
   const navigate = useNavigate();

   function editHandler() {
      navigate('/inventory/edit/idhere');
   }

   function updateHandler() {
      navigate('/inventory/idhere');
   }

   function deleteHandler() {}

   return (
      <ProductCardContainer>
         <ImgLoader src={image} />
         <ProductCardTexts>
            <ProductCardTitle>spicy tomato</ProductCardTitle>
            <ProductCardDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis! (95)</ProductCardDesc>
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
               <ProductCardButton onClick={editHandler} edit>
                  edit
               </ProductCardButton>
               <ProductCardButton onClick={updateHandler}>update</ProductCardButton>
               {!home && (
                  <ProductCardButton onClick={deleteHandler} danger>
                     delete
                  </ProductCardButton>
               )}
            </ProductCardButtons>
         </ProductCardTexts>
      </ProductCardContainer>
   );
}
