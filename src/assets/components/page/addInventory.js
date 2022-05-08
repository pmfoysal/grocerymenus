import logo from '@image/logo.svg';
import addToDB from '@utility/addToDB';
import InputBox from '@coreComp/inputBox';
import PageTitle from '@coreComp/pageTitle';
import MessageBox from '@coreComp/messageBox';
import validateText from '@utility/validateText';
import {StoreContext} from '@context/storeProvider';
import validateNumber from '@utility/validateNumber';
import MainContainer from '@coreComp/mainContainer';
import React, {useContext, useRef, useState} from 'react';
import {
   AddInventoryButton,
   AddInventoryButtons,
   AddInventoryContainer,
   AddInventoryContent,
   AddInventoryForm,
   AddInventoryInputGroup,
   AddInventoryInputs,
   AddInventoryLogo,
   AddInventoryPara,
   AddInventoryTitle,
} from '@pageStyle/addInventory.styles';

export default function AddInventory() {
   const formRef = useRef();
   const {user} = useContext(StoreContext);
   const [title, setTitle] = useState('');
   const [price, setPrice] = useState('');
   const [unit, setUnit] = useState('');
   const [details, setDetails] = useState('');
   const [supplier, setSupplier] = useState('');
   const [quantity, setQuantity] = useState('');
   const [image, setImage] = useState('');

   function inputHandler(setter) {
      return event => {
         setter(event.target.value);
      };
   }

   function getData() {
      return {
         email: user.email,
         date: Date.now(),
         title,
         price,
         quantity,
         unit,
         details,
         supplier,
         image,
      };
   }

   function resetData() {
      setTitle('');
      setDetails('');
      setImage('');
      setPrice('');
      setQuantity('');
      setSupplier('');
      setUnit('');
   }

   function validateInputs() {
      const titleOk = validateText(title, 'product title');
      const detailsOk = validateText(details, 'product details');
      const imageOk = validateText(image, 'product image');
      const unitOk = validateText(unit, 'product measure');
      const supplierOk = validateText(supplier, 'product supplier');
      const priceOk = validateNumber(price, 'product price');
      const quantityOk = validateNumber(quantity, 'product quantity');
      return {titleOk, detailsOk, imageOk, unitOk, supplierOk, priceOk, quantityOk};
   }

   function getUsername(email) {
      const arr = email.split('@');
      return arr[0];
   }

   function submitHandler() {
      const allOk = validateInputs();
      const {titleOk, detailsOk, quantityOk} = allOk;
      const {imageOk, unitOk, supplierOk, priceOk} = allOk;
      const test1 = titleOk && detailsOk && quantityOk;
      const test2 = priceOk && imageOk && unitOk && supplierOk;

      if (test1 && test2) {
         const data = getData();
         addToDB(data, resetData);
      }
   }

   return (
      <AddInventoryContainer>
         <MainContainer>
            <PageTitle>
               add <span>item</span>
            </PageTitle>
            <AddInventoryContent>
               <AddInventoryForm>
                  <AddInventoryLogo src={logo} alt='brand-logo' />
                  <AddInventoryPara>
                     hey, welcome <span>{getUsername(user.email)}!</span>
                  </AddInventoryPara>
                  <AddInventoryTitle>add new item</AddInventoryTitle>
                  <AddInventoryInputs ref={formRef}>
                     <InputBox name='title' type='text' handler={inputHandler(setTitle)} value={title} />
                     <AddInventoryInputGroup>
                        <InputBox name='price' type='number' handler={inputHandler(setPrice)} value={price} />
                        <InputBox name='measure' type='text' handler={inputHandler(setUnit)} value={unit} />
                     </AddInventoryInputGroup>
                     <InputBox name='image' type='text' handler={inputHandler(setImage)} value={image} />
                     <AddInventoryInputGroup>
                        <InputBox name='supplier' type='text' handler={inputHandler(setSupplier)} value={supplier} />
                        <InputBox name='quantity' type='number' handler={inputHandler(setQuantity)} value={quantity} />
                     </AddInventoryInputGroup>
                     <MessageBox name='details' handler={inputHandler(setDetails)} value={details} />
                  </AddInventoryInputs>
                  <AddInventoryButtons>
                     <AddInventoryButton onClick={resetData} reset>
                        reset
                     </AddInventoryButton>
                     <AddInventoryButton onClick={submitHandler}>submit</AddInventoryButton>
                  </AddInventoryButtons>
               </AddInventoryForm>
            </AddInventoryContent>
         </MainContainer>
      </AddInventoryContainer>
   );
}
