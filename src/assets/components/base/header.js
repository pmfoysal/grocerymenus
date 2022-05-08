import HamMenu from './hamMenu';
import Logo from '@coreComp/logo';
import NavLinks from './navLinks';
import HamIcon from '@coreComp/hamIcon';
import UserIcon from '@coreComp/userIcon';
import {useNavigate} from 'react-router-dom';
import React, {useContext, useState} from 'react';
import MainContainer from '@coreComp/mainContainer';
import {StoreContext} from '@context/storeProvider';
import {HeaderButton, HeaderButtons, HeaderContainer} from '@baseStyle/header.styles';

export default function Header() {
   const {user} = useContext(StoreContext);
   const navigate = useNavigate();
   const [active, setActive] = useState(false);

   function clickHandler(link) {
      return function () {
         navigate(link);
      };
   }

   return (
      <HeaderContainer>
         <MainContainer>
            <Logo />
            <HamIcon active={active} setActive={setActive} />
            <NavLinks user={user} />
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
         {active && <HamMenu user={user} active={active} />}
      </HeaderContainer>
   );
}
