import React from 'react';
import SetTitle from '@helper/setTitle';
import image from '@image/error404.svg';
import PageTitle from '@coreComp/pageTitle';
import {useNavigate} from 'react-router-dom';
import MainContainer from '@coreComp/mainContainer';
import {NotFoundButton, NotFoundContainer, NotFoundContent} from '@pageStyle/notFound.styles';

export default function NotFound() {
   const navigate = useNavigate();

   function clickHandler() {
      navigate('/');
   }

   return (
      <React.Fragment>
         <SetTitle title='404 - Page Not Found' />
         <NotFoundContainer>
            <MainContainer>
               <PageTitle>
                  error <span>404</span>
               </PageTitle>
               <NotFoundContent>
                  <img src={image} alt='error-404' />
                  <NotFoundButton onClick={clickHandler}>back to home</NotFoundButton>
               </NotFoundContent>
            </MainContainer>
         </NotFoundContainer>
      </React.Fragment>
   );
}
