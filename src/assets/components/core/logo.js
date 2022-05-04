import React from 'react';
import {LogoContainer} from '@coreStyle/logo.styles';

export default function Logo() {
   function clickHandler() {
      window.scrollTo({top: 0});
   }

   return (
      <LogoContainer onClick={clickHandler}>
         brand <span>name</span>
      </LogoContainer>
   );
}
