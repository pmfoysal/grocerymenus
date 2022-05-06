import {toast} from 'react-toastify';
import InputBox from '@coreComp/inputBox';
import CheckBox from '@coreComp/checkBox';
import PageTitle from '@coreComp/pageTitle';
import validateText from '@utility/validateText';
import React, {useContext, useState} from 'react';
import validateEmail from '@utility/validateEmail';
import validatePhone from '@utility/validatePhone';
import emailPassSignup from '@auth/emailPassSignup';
import {StoreContext} from '@context/storeProvider';
import MainContainer from '@coreComp/mainContainer';
import validatePassword from '@utility/validatePassword';
import {Link, Navigate, useLocation} from 'react-router-dom';
import {
   SignupContainer,
   SignupContent,
   SignupForm,
   SignupTitle,
   SignupHead,
   SignupPara,
   SignupInputArea,
   SignupInputGroup,
   SignupButton,
} from '@pageStyle/signup.styles';

export default function Signup() {
   const {user} = useContext(StoreContext);
   const location = useLocation();

   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [phone, setPhone] = useState('');
   const [address, setAddress] = useState('');
   const [profilePic, setProfilePic] = useState('');
   const [accept, setAccept] = useState(false);

   function inputHandler(setter) {
      return event => {
         const value = event.target.value;
         event.target.setAttribute('data-text', Boolean(value));
         setter(value);
      };
   }

   function checkboxHandler(event) {
      setAccept(event.target.checked);
   }

   function validateInput() {
      const firstNameOk = validateText(firstName, 'first name');
      const lastNameOk = validateText(lastName, 'last name');
      const emailOk = validateEmail(email);
      const passwordOk = validatePassword(password);
      const phoneOk = validatePhone(phone);
      const addressOk = validateText(address, 'address');
      const profilePicOk = validateText(profilePic, 'profile picture');

      return {
         firstNameOk,
         lastNameOk,
         emailOk,
         phoneOk,
         passwordOk,
         addressOk,
         profilePicOk,
      };
   }

   function validateAccept() {
      if (!accept) {
         toast.error('Please accept our Terms & Conditions!', {autoClose: 3000});
         return false;
      }
      return true;
   }

   function getInputData() {
      return {
         firstName,
         lastName,
         email,
         password,
         phone,
         address,
         profilePic,
      };
   }

   function signupHandler() {
      const data = getInputData();
      const allOk = validateInput();
      const acceptOk = validateAccept();
      const {firstNameOk, lastNameOk, emailOk, passwordOk} = allOk;
      const {phoneOk, addressOk, profilePicOk} = allOk;
      const test1 = firstNameOk && lastNameOk && emailOk && passwordOk;
      const test2 = phoneOk && addressOk && profilePicOk;
      if (test1 && test2 && acceptOk) {
         emailPassSignup(data);
      }
   }

   if (user.uid) {
      const from = location?.state?.from?.pathname || '/';
      return <Navigate to={from} replace />;
   }

   return (
      <SignupContainer>
         <MainContainer>
            <PageTitle>
               signup <span>form</span>
            </PageTitle>
            <SignupContent>
               <SignupForm>
                  <SignupTitle>hey, good morning!</SignupTitle>
                  <SignupHead>Create an Account</SignupHead>
                  <SignupPara>
                     Already have an account? <Link to='/signin'>Signin</Link>
                  </SignupPara>
                  <SignupInputArea>
                     <InputBox name='your email' type='email' handler={inputHandler(setEmail)} />
                     <SignupInputGroup>
                        <InputBox name='first name' type='text' handler={inputHandler(setFirstName)} />
                        <InputBox name='last name' type='text' handler={inputHandler(setLastName)} />
                     </SignupInputGroup>
                     <InputBox name='profile pic' none type='text' handler={inputHandler(setProfilePic)} />
                     <SignupInputGroup>
                        <InputBox name='your phone' type='tel' handler={inputHandler(setPhone)} />
                        <InputBox name='password' type='password' handler={inputHandler(setPassword)} />
                     </SignupInputGroup>
                     <InputBox name='your address' type='text' handler={inputHandler(setAddress)} />
                     <CheckBox handler={checkboxHandler}>
                        Accept our <Link to='/terms'>Terms and Conditions!</Link>
                     </CheckBox>
                  </SignupInputArea>
                  <SignupButton onClick={signupHandler}>signup</SignupButton>
               </SignupForm>
            </SignupContent>
         </MainContainer>
      </SignupContainer>
   );
}
