import React, {useState} from 'react';
import SetTitle from '@helper/setTitle';
import InputBox from '@coreComp/inputBox';
import PageTitle from '@coreComp/pageTitle';
import userPassReset from '@auth/userPassReset';
import validateEmail from '@utility/validateEmail';
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
   const [email, setEmail] = useState('');

   function inputHandler(setter) {
      return event => {
         setter(event.target.value);
      };
   }

   function resetHandler() {
      const emailOk = validateEmail(email);
      if (emailOk) {
         userPassReset(email);
      }
   }

   return (
      <React.Fragment>
         <SetTitle title='Forget - Reset Your Password!' />
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
                        <InputBox name='your email' type='email' handler={inputHandler(setEmail)} value={email} />
                     </SignupInputArea>
                     <SignupButton onClick={resetHandler}>send reset email</SignupButton>
                  </SignupForm>
               </SignupContent>
            </MainContainer>
         </SignupContainer>
      </React.Fragment>
   );
}
