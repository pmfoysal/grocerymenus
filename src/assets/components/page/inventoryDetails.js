import ImgLoader from '@baseComp/imgLoader';
import MainContainer from '@coreComp/mainContainer';
import PageTitle from '@coreComp/pageTitle';
import image from '@image/product.png';
import SectionTitle from '@coreComp/sectionTitle';
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
   InventoryUpdateArea,
   InventoryUpdateButton,
   InventoryUpdateButtons,
} from '@pageStyle/inventoryDetails.styles';
import React, {useState} from 'react';
import {Icon} from '@iconify/react';
import InputBox from '@coreComp/inputBox';

export default function InventoryDetails() {
   const stock = true;
   const [restock, setRestock] = useState('');

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
                     <InventoryDetailsInfo>
                        <InventoryDetailsTag>
                           price:{' '}
                           <span className='price'>
                              $30.00<span>/kg</span>
                           </span>
                        </InventoryDetailsTag>
                        <InventoryDetailsTag>
                           supplier: <span>google</span>
                        </InventoryDetailsTag>
                     </InventoryDetailsInfo>
                     <InventoryDetailsInfo>
                        <InventoryDetailsTag>
                           quantity: <span>20</span>
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
                           author: <span className='user'>@pmfoysal</span>
                        </InventoryDetailsTag>
                        <InventoryDetailsTag>
                           date: <span>monday, 20 may, 2022</span>
                        </InventoryDetailsTag>
                     </InventoryDetailsInfo>
                  </InventoryDetailsInfos>
               </InventoryImageArea>
               <InventoryDetailsTitle>description:</InventoryDetailsTitle>
               <InventoryDetailsPara>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis deserunt magnam nesciunt a itaque possimus
                  enim error architecto, amet esse similique quia numquam, distinctio iusto illum perspiciatis rem, mollitia
                  facilis sapiente blanditiis quidem recusandae. Quia error possimus molestias culpa reiciendis fugiat cupiditate
                  quod voluptatem? Consequuntur, sunt ut a veniam neque iure dicta vitae facilis sequi consequatur repellat, odit
                  reiciendis enim laudantium! Maxime dolorum facilis, consequatur aspernatur asperiores quidem non quas. Nemo in
                  quam dolorem illo iste. Veniam iure nobis possimus delectus, vel quos porro quis tenetur optio, quae expedita
                  ipsa enim quasi omnis sit debitis nihil non dolor! Sunt, quibusdam qui iusto saepe quisquam nulla nisi nihil
                  voluptatum dolor facere culpa delectus illo odit, veritatis error? Quo natus suscipit cum itaque ut quaerat
                  error dolorum aut ipsam odit, molestiae voluptas est beatae repellat at enim id voluptatum unde officia saepe
                  nulla reprehenderit! Itaque adipisci aliquid soluta officiis tenetur,
               </InventoryDetailsPara>
            </InventoryDetailsArea>
            <SectionTitle>update inventory</SectionTitle>
            <InventoryUpdateArea>
               <InventoryUpdateButtons>
                  <InputBox type='text' value={`inStock:  ${20}`} readOnly />
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
