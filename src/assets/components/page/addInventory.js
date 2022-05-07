import logo from '@image/logo.svg';
import React, {useContext, useRef, useState} from 'react';
import PageTitle from '@coreComp/pageTitle';
import MainContainer from '@coreComp/mainContainer';
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
import InputBox from '@coreComp/inputBox';
import {StoreContext} from '@context/storeProvider';
import MessageBox from '@coreComp/messageBox';
import validateText from '@utility/validateText';
import validateNumber from '@utility/validateNumber';

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
         const value = event.target.value;
         event.target.setAttribute('data-text', Boolean(value));
         setter(value);
      };
   }

   function getData() {
      return {
         email: user.email,
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

      const inputs = formRef.current.querySelectorAll('input');
      const textAreas = formRef.current.querySelectorAll('textarea');
      inputs.forEach(input => {
         input.value = '';
         input.setAttribute('data-text', false);
      });
      textAreas.forEach(input => {
         input.value = '';
         input.setAttribute('data-text', false);
      });
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
         console.log(data);
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
                     <InputBox name='title' type='text' handler={inputHandler(setTitle)} />
                     <AddInventoryInputGroup>
                        <InputBox name='price' type='number' handler={inputHandler(setPrice)} />
                        <InputBox name='measure' type='text' handler={inputHandler(setUnit)} />
                     </AddInventoryInputGroup>
                     <InputBox name='image' type='text' handler={inputHandler(setImage)} />
                     <AddInventoryInputGroup>
                        <InputBox name='supplier' type='text' handler={inputHandler(setSupplier)} />
                        <InputBox name='quantity' type='number' handler={inputHandler(setQuantity)} />
                     </AddInventoryInputGroup>
                     <MessageBox name='details' handler={inputHandler(setDetails)} />
                  </AddInventoryInputs>
                  <AddInventoryButtons>
                     <AddInventoryButton onClick={resetData} reset>
                        delete
                     </AddInventoryButton>
                     <AddInventoryButton onClick={submitHandler}>submit</AddInventoryButton>
                  </AddInventoryButtons>
               </AddInventoryForm>
            </AddInventoryContent>
         </MainContainer>
      </AddInventoryContainer>
   );
}
