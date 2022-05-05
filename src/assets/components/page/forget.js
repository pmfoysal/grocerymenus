import React, {useState} from 'react';
import InputBox from '@coreComp/inputBox';
import PageTitle from '@coreComp/pageTitle';
import MainContainer from '@coreComp/mainContainer';
import {
   SignupContainer,
   SignupContent,
   SignupForm,
   SignupTitle,
   SignupHead,
   SignupInputArea,
   SignupButton,
} from '@pageStyle/signup.styles';

export default function Forget() {
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
               forget <span>password</span>
            </PageTitle>
            <SignupContent>
               <SignupForm>
                  <SignupTitle>hey, don't worry!</SignupTitle>
                  <SignupHead>Reset your Password</SignupHead>
                  <SignupInputArea>
                     <InputBox name='your email' type='email' handler={inputHandler(setFirstName)} />
                  </SignupInputArea>
                  <SignupButton>send reset email</SignupButton>
               </SignupForm>
            </SignupContent>
         </MainContainer>
      </SignupContainer>
   );
}
