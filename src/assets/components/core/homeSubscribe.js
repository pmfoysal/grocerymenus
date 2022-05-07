import React from 'react';
import MainContainer from './mainContainer';
import {
   HomeSubscribeContainer,
   HomeSubscribeContent,
   HomeSubscribeInputArea,
   HomeSubscribePara,
   HomeSubscribeTitle,
   SubscribeButton,
} from '@coreStyle/homeSubscribe.styles';

export default function HomeSubscribe() {
   return (
      <HomeSubscribeContainer>
         <MainContainer>
            <HomeSubscribeContent>
               <HomeSubscribeTitle>subscribe for newsletter</HomeSubscribeTitle>
               <HomeSubscribePara>
                  Subscribe and find super attractive price quotes from me. I wait for you at the best destinations.
               </HomeSubscribePara>
               <HomeSubscribeInputArea>
                  <input type='email' required placeholder='your email address' />
                  <SubscribeButton>subscribe</SubscribeButton>
               </HomeSubscribeInputArea>
            </HomeSubscribeContent>
         </MainContainer>
      </HomeSubscribeContainer>
   );
}
