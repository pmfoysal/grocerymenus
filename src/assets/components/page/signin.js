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
