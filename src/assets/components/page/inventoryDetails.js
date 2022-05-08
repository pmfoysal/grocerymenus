import {Icon} from '@iconify/react';
import React, {useState} from 'react';
import InputBox from '@coreComp/inputBox';
import useProduct from '@hook/useProduct';
import {useParams} from 'react-router-dom';
import ImgLoader from '@baseComp/imgLoader';
import PageTitle from '@coreComp/pageTitle';
import SectionTitle from '@coreComp/sectionTitle';
import MainContainer from '@coreComp/mainContainer';
import {
   InventoryDetailsArea,
   InventoryDetailsContainer,
   InventoryDetailsInfo,
   InventoryDetailsInfos,
   InventoryDetailsPara,
   InventoryDetailsStock,
   InventoryDetailsTag,
   InventoryDetailsTitle,
   InventoryImageArea,
   InventoryName,
   InventoryUpdateArea,
   InventoryUpdateButton,
   InventoryUpdateButtons,
} from '@pageStyle/inventoryDetails.styles';

export default function InventoryDetails() {
   const {id: urlId} = useParams();
   const {product} = useProduct(urlId);
   const [restock, setRestock] = useState('');
   const {_id, title, email, date, price, quantity, unit, details, supplier, image} = product;
   const stock = Boolean(quantity);

   function inputRestock(event) {
      setRestock(event.target.value);
   }

   return (
      <InventoryDetailsContainer>
         <MainContainer>
            <PageTitle>
               inventory <span>details</span>
            </PageTitle>
            <InventoryDetailsArea>
               <InventoryImageArea>
                  <ImgLoader src={image} />
                  <InventoryDetailsInfos>
                     <InventoryName>{title}</InventoryName>
                     <InventoryDetailsInfo>
                        <InventoryDetailsTag>
                           price:{' '}
                           <span className='price'>
                              ${Number(price).toFixed(2)}
                              <span>/{unit}</span>
                           </span>
                        </InventoryDetailsTag>
                        <InventoryDetailsTag>
                           supplier: <span>{supplier}</span>
                        </InventoryDetailsTag>
                     </InventoryDetailsInfo>
                     <InventoryDetailsInfo>
                        <InventoryDetailsTag>
                           quantity: <span>{quantity}</span>
                        </InventoryDetailsTag>
                        <InventoryDetailsStock stock={stock}>
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
                        </InventoryDetailsStock>
                     </InventoryDetailsInfo>
                     <InventoryDetailsInfo>
                        <InventoryDetailsTag small>
                           author: <span className='user'>@{email?.split('@')[0]}</span>
                        </InventoryDetailsTag>
                        <InventoryDetailsTag>
                           date: <span>{new Date(date).toLocaleDateString(undefined, {dateStyle: 'long'})}</span>
                        </InventoryDetailsTag>
                     </InventoryDetailsInfo>
                  </InventoryDetailsInfos>
               </InventoryImageArea>
               <InventoryDetailsTitle>description:</InventoryDetailsTitle>
               <InventoryDetailsPara>{details}</InventoryDetailsPara>
            </InventoryDetailsArea>
            <SectionTitle>update inventory</SectionTitle>
            <InventoryUpdateArea>
               <InventoryUpdateButtons>
                  <InputBox type='text' value={`inStock:  ${quantity}`} readOnly />
                  <InventoryUpdateButton>delivered</InventoryUpdateButton>
               </InventoryUpdateButtons>
               <InventoryUpdateButtons>
                  <InputBox name='quantity' type='number' handler={inputRestock} value={restock} />
                  <InventoryUpdateButton reset>restock</InventoryUpdateButton>
               </InventoryUpdateButtons>
            </InventoryUpdateArea>
         </MainContainer>
      </InventoryDetailsContainer>
   );
}
