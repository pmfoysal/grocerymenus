import React from 'react';
import MainContainer from './mainContainer';
import {BackdropContainer} from '@coreStyle/backdrop.styles';

export default function Backdrop({children}) {
   return (
      <BackdropContainer>
         <MainContainer>{children}</MainContainer>
      </BackdropContainer>
   );
}
