import React from 'react';
import Logo from '@coreComp/logo';
import NavLinks from './navLinks';
import MainContainer from '@coreComp/mainContainer';
import {HeaderButton, HeaderButtons, HeaderContainer} from '@baseStyle/header.styles';
import UserIcon from '@coreComp/userIcon';

export default function Header() {
   const user = true;

   return (
      <HeaderContainer>
         <MainContainer>
            <Logo>
               brand <span>name</span>
            </Logo>
            <NavLinks />
            <HeaderButtons>
               {!user ? (
                  <React.Fragment>
                     <HeaderButton sub>signin</HeaderButton>
                     <HeaderButton>signup</HeaderButton>
                  </React.Fragment>
               ) : (
                  <UserIcon />
               )}
            </HeaderButtons>
         </MainContainer>
      </HeaderContainer>
   );
}
