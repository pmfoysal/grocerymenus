import {Icon} from '@iconify/react';
import React, {useState} from 'react';
import Confirm from '@baseComp/confirm';
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

export default function ProductCard({home, data}) {
   const navigate = useNavigate();
   const [active, setActive] = useState(false);
   const {_id, title, price, quantity, unit, details, supplier, image} = data;
   const stock = Boolean(quantity);

   function editHandler() {
      navigate(`/inventory/edit/${_id}`);
   }

   function updateHandler() {
      navigate(`/inventory/${_id}`);
   }

   function deleteHandler() {
      setActive(true);
   }

   return (
      <ProductCardContainer>
         <ImgLoader src={image} />
         <ProductCardTexts>
            <ProductCardTitle>{title}</ProductCardTitle>
            <ProductCardDesc>{details.slice(0, 95) + '...'}</ProductCardDesc>
            <ProductCardInfos>
               <ProductCardInfo>
                  <ProductCardPrice>
                     price:{' '}
                     <span>
                        ${Number(price).toFixed(2)}
                        <span>/{unit}</span>
                     </span>
                  </ProductCardPrice>
                  <ProductCardPara>
                     supplier: <span>{supplier}</span>
                  </ProductCardPara>
               </ProductCardInfo>
               <ProductCardInfo>
                  <ProductCardPara>
                     quantity: <span>{quantity}</span>
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
         {active && (
            <Confirm
               button='delete'
               message={`Are you sure you want to delete it? Once deleted, this item can't be possible to bring back again!`}
               setActive={setActive}
               id={_id}
            />
         )}
      </ProductCardContainer>
   );
}
