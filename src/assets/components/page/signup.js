import React from 'react';
import image from '@image/authbg.jpg';
import PageTitle from '@coreComp/pageTitle';
import MainContainer from '@coreComp/mainContainer';
import {SignupContainer, SignupContent, SignupForm, SignupTitle, SignupHead, SignupPara} from '@pageStyle/signup.styles';
import {Link} from 'react-router-dom';

export default function Signup() {
   return (
      <SignupContainer>
         <MainContainer>
            <PageTitle>
               new <span>account</span>
            </PageTitle>
            <SignupContent>
               <img src={image} alt='background' />
               <SignupForm>
                  <SignupTitle>hey, good morning!</SignupTitle>
                  <SignupHead>Create an Account</SignupHead>
                  <SignupPara>
                     Already have an account? <Link to='/signin'>Signin</Link>
                  </SignupPara>
               </SignupForm>
            </SignupContent>
         </MainContainer>
      </SignupContainer>
   );
}
