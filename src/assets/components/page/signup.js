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

   function inputHandler(setter) {
      return event => {
         const value = event.target.value;
         event.target.setAttribute('data-text', Boolean(value));
         setter(value);
      };
   }

   return (
      <SignupContainer>
         <MainContainer>
            <PageTitle>
               new <span>account</span>
            </PageTitle>
            <SignupContent>
               <SignupForm>
                  <SignupTitle>hey, good morning!</SignupTitle>
                  <SignupHead>Create an Account</SignupHead>
                  <SignupPara>
                     Already have an account? <Link to='/signin'>Signin</Link>
                  </SignupPara>
                  <SignupInputArea>
                     <SignupInputGroup>
                        <InputBox name='first name' type='text' handler={inputHandler(setFirstName)} />
                        <InputBox name='last name' type='text' handler={inputHandler(setFirstName)} />
                     </SignupInputGroup>
                     <InputBox name='your email' type='email' handler={inputHandler(setFirstName)} />
                     <SignupInputGroup>
                        <InputBox name='your phone' type='tel' handler={inputHandler(setFirstName)} />
                        <InputBox name='username' type='text' handler={inputHandler(setFirstName)} />
                     </SignupInputGroup>
                     <InputBox name='your address' type='text' handler={inputHandler(setFirstName)} />
                     <CheckBox>
                        Accept our <Link to='/terms'>Terms and Conditions!</Link>
                     </CheckBox>
                  </SignupInputArea>
                  <SignupButton>signup</SignupButton>
               </SignupForm>
            </SignupContent>
         </MainContainer>
      </SignupContainer>
   );
}
