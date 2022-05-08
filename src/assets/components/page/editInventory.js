import logo from '@image/logo.svg';
import {toast} from 'react-toastify';
import InputBox from '@coreComp/inputBox';
import useProduct from '@hook/useProduct';
import PageTitle from '@coreComp/pageTitle';
import updateToDB from '@utility/updateToDB';
import MessageBox from '@coreComp/messageBox';
import PageLoader from '@baseComp/pageLoader';
import validateText from '@utility/validateText';
import MainContainer from '@coreComp/mainContainer';
import {StoreContext} from '@context/storeProvider';
import validateNumber from '@utility/validateNumber';
import {useNavigate, useParams} from 'react-router-dom';
import React, {useContext, useEffect, useRef, useState} from 'react';
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

export default function EditInventory() {
   const formRef = useRef();
   const navigate = useNavigate();
   const {id: urlId} = useParams();
   const {product, setRender} = useProduct(urlId);
   const {user} = useContext(StoreContext);
   const [title, setTitle] = useState('');
   const [price, setPrice] = useState('');
   const [unit, setUnit] = useState('');
   const [details, setDetails] = useState('');
   const [supplier, setSupplier] = useState('');
   const [quantity, setQuantity] = useState('');
   const [image, setImage] = useState('');
   const [disable, setDisable] = useState(false);

   const {title: dbTitle, price: dbPrice, unit: dbUnit, image: dbImage, _id} = product;
   const {details: dbDetails, supplier: dbSupplier, quantity: dbQuantity} = product;

   function inputHandler(setter) {
      return event => {
         setter(event.target.value);
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

   function setData() {
      setTitle(dbTitle);
      setDetails(dbDetails);
      setImage(dbImage);
      setPrice(dbPrice);
      setQuantity(dbQuantity);
      setSupplier(dbSupplier);
      setUnit(dbUnit);
   }

   function cancelHandler() {
      navigate(-1);
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

   function compareData() {
      const smTitle = title === dbTitle;
      const smPrice = price === dbPrice;
      const smImage = image === dbImage;
      const smDetails = details === dbDetails;
      const smSupplier = supplier === dbSupplier;
      const smQuantity = quantity === dbQuantity;
      const smUnit = unit === dbUnit;
      return {smTitle, smPrice, smImage, smDetails, smSupplier, smQuantity, smUnit};
   }

   function getUsername(email) {
      const arr = email.split('@');
      return arr[0];
   }

   function submitHandler() {
      const allOk = validateInputs();
      const smOk = compareData();
      const {titleOk, detailsOk, quantityOk} = allOk;
      const {imageOk, unitOk, supplierOk, priceOk} = allOk;

      const {smDetails, smImage, smPrice, smUnit} = smOk;
      const {smQuantity, smSupplier, smTitle} = smOk;

      const test1 = titleOk && detailsOk && quantityOk;
      const test2 = priceOk && imageOk && unitOk && supplierOk;
      const test3 = smDetails && smImage && smPrice && smUnit;
      const test4 = smQuantity && smSupplier && smTitle;
      const smTest = test3 && test4;

      if (test1 && test2) {
         if (!smTest) {
            const data = getData();
            updateToDB(_id, data, setRender, undefined, setDisable);
         } else {
            toast.warning('Nothing to change, Already up-to-date!');
         }
      }
   }

   useEffect(() => {
      if (product._id) {
         setData();
      }
   }, [product]);

   return (
      <AddInventoryContainer>
         <MainContainer>
            <PageTitle>
               edit <span>item</span>
            </PageTitle>
            {!product._id && <PageLoader />}
            <AddInventoryContent>
               <AddInventoryForm>
                  <AddInventoryLogo src={logo} alt='brand-logo' />
                  <AddInventoryPara>
                     hey, welcome <span>{getUsername(user.email)}!</span>
                  </AddInventoryPara>
                  <AddInventoryTitle>edit this item</AddInventoryTitle>
                  <AddInventoryInputs ref={formRef}>
                     <InputBox name='title' type='text' handler={inputHandler(setTitle)} value={title} />
                     <AddInventoryInputGroup>
                        <InputBox name='price' type='number' handler={inputHandler(setPrice)} value={price} />
                        <InputBox name='measure' type='text' handler={inputHandler(setUnit)} value={unit} />
                     </AddInventoryInputGroup>
                     <InputBox name='image' type='text' none handler={inputHandler(setImage)} value={image} />
                     <AddInventoryInputGroup>
                        <InputBox name='supplier' type='text' handler={inputHandler(setSupplier)} value={supplier} />
                        <InputBox name='quantity' type='number' handler={inputHandler(setQuantity)} value={quantity} />
                     </AddInventoryInputGroup>
                     <MessageBox name='details' handler={inputHandler(setDetails)} value={details} />
                  </AddInventoryInputs>
                  <AddInventoryButtons>
                     <AddInventoryButton onClick={cancelHandler} disabled={disable} reset>
                        cancel
                     </AddInventoryButton>
                     <AddInventoryButton onClick={submitHandler} disabled={disable}>
                        update
                     </AddInventoryButton>
                  </AddInventoryButtons>
               </AddInventoryForm>
            </AddInventoryContent>
         </MainContainer>
      </AddInventoryContainer>
   );
}
