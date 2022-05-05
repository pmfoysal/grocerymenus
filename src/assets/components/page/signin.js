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
import {SigninCheckBoxGroup} from '@pageStyle/signin.styles';
import SocialSignin from '@baseComp/socialSignin';

export default function Signin() {
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
               signin <span>form</span>
            </PageTitle>
            <SignupContent>
               <SignupForm>
                  <SignupTitle>hey, welcome back!</SignupTitle>
                  <SignupHead>Signin an Account</SignupHead>
                  <SignupPara>
                     Don't have an account? <Link to='/signup'>Signup</Link>
                  </SignupPara>
                  <SignupInputArea>
                     <InputBox name='your email' type='email' handler={inputHandler(setFirstName)} />
                     <InputBox name='password' none type='password' handler={inputHandler(setFirstName)} />
                     <SigninCheckBoxGroup>
                        <CheckBox>Keep me signed in!</CheckBox>
                        <Link to='/forget'>forget password?</Link>
                     </SigninCheckBoxGroup>
                  </SignupInputArea>
                  <SignupButton>signin</SignupButton>
                  <SocialSignin />
               </SignupForm>
            </SignupContent>
         </MainContainer>
      </SignupContainer>
   );
}
