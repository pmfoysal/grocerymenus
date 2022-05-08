import {toast} from 'react-toastify';
import SetTitle from '@helper/setTitle';
import InputBox from '@coreComp/inputBox';
import CheckBox from '@coreComp/checkBox';
import PageTitle from '@coreComp/pageTitle';
import SocialSignin from '@baseComp/socialSignin';
import React, {useContext, useState} from 'react';
import emailPassSignin from '@auth/emailPassSignin';
import {StoreContext} from '@context/storeProvider';
import MainContainer from '@coreComp/mainContainer';
import {Link, Navigate, useLocation} from 'react-router-dom';
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
   const {user} = useContext(StoreContext);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const location = useLocation();

   function inputHandler(setter) {
      return event => {
         setter(event.target.value);
      };
   }

   function validateInput(text, name) {
      if (!text) {
         toast.error(`Please provide the ${name}!`, {autoClose: 3000});
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

   if (user.uid) {
      const from = location?.state?.from?.pathname || '/';
      return <Navigate to={from} replace />;
   }

   return (
      <React.Fragment>
         <SetTitle title='Signin - Welcome Back!' />
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
                        <InputBox name='your email' type='email' handler={inputHandler(setEmail)} value={email} />
                        <InputBox name='password' none type='password' handler={inputHandler(setPassword)} value={password} />
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
      </React.Fragment>
   );
}
