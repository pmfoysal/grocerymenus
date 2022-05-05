import Logo from '@coreComp/logo';
import NavLinks from './navLinks';
import React, {useContext} from 'react';
import UserIcon from '@coreComp/userIcon';
import {useNavigate} from 'react-router-dom';
import MainContainer from '@coreComp/mainContainer';
import {StoreContext} from '@context/storeProvider';
import {HeaderButton, HeaderButtons, HeaderContainer} from '@baseStyle/header.styles';

export default function Header() {
   const {user} = useContext(StoreContext);
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
               {!user.uid ? (
                  <React.Fragment>
                     <HeaderButton onClick={clickHandler('/signin')} sub>
                        signin
                     </HeaderButton>
                     <HeaderButton onClick={clickHandler('/signup')}>signup</HeaderButton>
                  </React.Fragment>
               ) : (
                  <UserIcon user={user} />
               )}
            </HeaderButtons>
         </MainContainer>
      </HeaderContainer>
   );
}
