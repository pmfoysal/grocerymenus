import React from 'react';
import MainContainer from '@coreComp/mainContainer';
import {FooterContainer, FooterLink, FooterPara} from '@baseStyle/footer.styles';

export default function Footer() {
   const year = new Date().getFullYear();
   return (
      <FooterContainer>
         <MainContainer>
            <FooterPara>
               &copy; {year} &bull; all rights reserved &bull;
               <FooterLink href='https://facebook.com/pmfoysalz' target='_blank'>
                  foysal ahmmed
               </FooterLink>
            </FooterPara>
         </MainContainer>
      </FooterContainer>
   );
}
