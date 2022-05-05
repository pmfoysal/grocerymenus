import React, {useState} from 'react';
import image from '@image/authbg.jpg';
import PageTitle from '@coreComp/pageTitle';
import MainContainer from '@coreComp/mainContainer';
import {SignupContainer, SignupContent, SignupForm, SignupTitle, SignupHead, SignupPara} from '@pageStyle/signup.styles';
import {Link} from 'react-router-dom';
import InputBox from '@coreComp/inputBox';

export default function Signup() {
   const [firstName, setFirstName] = useState('');

   function inputHandler(setter) {
      return event => {
         event.target.setAttribute('data-text', event.target.value ? true : false);
         setter(event.target.value);
      };
   }

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
                  <InputBox name='first name' type='text' handler={inputHandler(setFirstName)} />
               </SignupForm>
            </SignupContent>
         </MainContainer>
      </SignupContainer>
   );
}
