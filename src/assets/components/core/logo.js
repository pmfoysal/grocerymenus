import React from 'react';
import image from '@image/logo.svg';
import {LogoContainer} from '@coreStyle/logo.styles';

export default function Logo() {
   function clickHandler() {
      window.scrollTo({top: 0});
   }

   return <LogoContainer onClick={clickHandler} src={image} alt='brand-logo' />;
}
