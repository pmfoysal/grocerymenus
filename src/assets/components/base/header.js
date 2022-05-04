import React from 'react';
import Logo from '@coreComp/logo';
import NavLinks from './navLinks';
import UserIcon from '@coreComp/userIcon';
import {useNavigate} from 'react-router-dom';
import MainContainer from '@coreComp/mainContainer';
import {HeaderButton, HeaderButtons, HeaderContainer} from '@baseStyle/header.styles';

export default function Header() {
   const user = false;
   const navigate = useNavigate();

   function clickHandler(link) {
      return function () {
         navigate(link);
      };
   }

   return (
      <HeaderContainer>
         <MainContainer>
            <Logo />
            <NavLinks />
            <HeaderButtons>
               {!user ? (
                  <React.Fragment>
                     <HeaderButton onClick={clickHandler('/signin')} sub>
                        signin
                     </HeaderButton>
                     <HeaderButton onClick={clickHandler('/signup')}>signup</HeaderButton>
                  </React.Fragment>
               ) : (
                  <UserIcon />
               )}
            </HeaderButtons>
         </MainContainer>
      </HeaderContainer>
   );
}
