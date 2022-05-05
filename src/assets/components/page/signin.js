import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import InputBox from '@coreComp/inputBox';
import CheckBox from '@coreComp/checkBox';
import PageTitle from '@coreComp/pageTitle';
import SocialSignin from '@baseComp/socialSignin';
import MainContainer from '@coreComp/mainContainer';
import {SigninCheckBoxGroup, SigninOr, SigninWarning} from '@pageStyle/signin.styles';
import {
   SignupContainer,
   SignupContent,
   SignupForm,
   SignupTitle,
   SignupHead,
   SignupPara,
   SignupInputArea,
   SignupButton,
} from '@pageStyle/signup.styles';
import {toast} from 'react-toastify';
import emailPassSignin from '@auth/emailPassSignin';

export default function Signin() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   function inputHandler(setter) {
      return event => {
         const value = event.target.value;
         event.target.setAttribute('data-text', Boolean(value));
         setter(value);
      };
   }

   function validateInput(text, name) {
      if (!text) {
         toast.error(`Please provide your ${name}!`, {autoClose: 3000});
         return false;
      }
      return true;
   }

   function signinHandler() {
      const emailOk = validateInput(email, 'email address');
      const passOk = validateInput(password, 'password');
      if (emailOk && passOk) {
         emailPassSignin({email, password});
      }
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
                     <InputBox name='your email' type='email' handler={inputHandler(setEmail)} />
                     <InputBox name='password' none type='password' handler={inputHandler(setPassword)} />
                     <SigninCheckBoxGroup>
                        <CheckBox>Keep me signed in!</CheckBox>
                        <Link to='/forget'>forget password?</Link>
                     </SigninCheckBoxGroup>
                  </SignupInputArea>
                  <SignupButton onClick={signinHandler}>signin</SignupButton>
                  <SigninOr>
                     <span className='line'></span>
                     <span className='text'>or</span>
                     <span className='line'></span>
                  </SigninOr>
                  <SocialSignin />
                  <SigninWarning>
                     <strong>Note: </strong>
                     By signing in you agree our <Link to='/terms'>Terms and Conditions!</Link> Please read our{' '}
                     <Link to='/privacy'>Privacy and Policy</Link> carefully.
                  </SigninWarning>
               </SignupForm>
            </SignupContent>
         </MainContainer>
      </SignupContainer>
   );
}
