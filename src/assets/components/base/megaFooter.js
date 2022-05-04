import React from 'react';
import Logo from '@coreComp/logo';
import MegaMenu from './megaMenu';
import menuData from '@data/menuData';
import MainContainer from '@coreComp/mainContainer';
import {MegaFooterContainer, MegaFooterIconArea} from '@baseStyle/megaFooter.styles';

export default function MegaFooter() {
   function generateMenu(megaData) {
      const arr = [];
      for (const menu in megaData) {
         arr.push(<MegaMenu name={menu} data={megaData[menu]} key={`megamenu-${menu}`} />);
      }
      return arr;
   }

   return (
      <MegaFooterContainer>
         <MainContainer>
            <MegaFooterIconArea>
               <Logo />
               <p>
                  My mission is to make everyone able to feel the attachment back to nature by providing an unforgettable
                  experience!
               </p>
            </MegaFooterIconArea>
            {generateMenu(menuData)}
         </MainContainer>
      </MegaFooterContainer>
   );
}
