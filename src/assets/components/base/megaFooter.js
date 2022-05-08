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
                  Suitable for Grocery Market, Store, Organic Food, Online Shop, Agriculture and Natural Foods related management
                  Website.
               </p>
            </MegaFooterIconArea>
            {generateMenu(menuData)}
         </MainContainer>
      </MegaFooterContainer>
   );
}
