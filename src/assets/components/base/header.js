import React from 'react';
import Logo from '@coreComp/logo';
import NavLinks from './navLinks';
import MainContainer from '@coreComp/mainContainer';
import {HeaderContainer} from '@baseStyle/header.styles';

export default function Header() {
   return (
      <HeaderContainer>
         <MainContainer>
            <Logo>
               brand <span>name</span>
            </Logo>
            <NavLinks />
         </MainContainer>
      </HeaderContainer>
   );
}
