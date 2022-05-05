import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import InputBox from '@coreComp/inputBox';
import CheckBox from '@coreComp/checkBox';
import PageTitle from '@coreComp/pageTitle';
import MainContainer from '@coreComp/mainContainer';
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
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [address, setAddress] = useState('');
   const [userName, setUserName] = useState('');
   const [profilePic, setProfilePic] = useState('');

   function inputHandler(setter) {
      return event => {
         const value = event.target.value;
         event.target.setAttribute('data-text', Boolean(value));
         setter(value);
      };
   }

   function signupHandler() {}

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
                        <InputBox name='username' type='text' handler={inputHandler(setUserName)} />
                     </SignupInputGroup>
                     <InputBox name='your address' type='text' handler={inputHandler(setAddress)} />
                     <CheckBox>
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
