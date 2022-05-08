import React from 'react';
import PageLink from '@coreComp/pageLink';
import UserIcon from '@coreComp/userIcon';
import {HamMenuContainer} from '@baseStyle/hamMenu.styles';
import {HeaderButton, HeaderButtons} from '@baseStyle/header.styles';
import {useNavigate} from 'react-router-dom';

export default function HamMenu({user, active}) {
   const navigate = useNavigate();

   function clickHandler(link) {
      return function () {
         navigate(link);
      };
   }
   return (
      <HamMenuContainer>
         {user.uid && <UserIcon user={user} active={active} />}
         <PageLink link='/' name='home' />
         {user.uid && <PageLink link='/inventories' name='inventories' />}
         <PageLink link='/blogs' name='blogs' />
         <PageLink link='/about' name='about' />
         <PageLink link='/contact' name='contact' />
         {!user.uid && (
            <HeaderButtons className={active}>
               <HeaderButton onClick={clickHandler('/signin')} sub>
                  signin
               </HeaderButton>
               <HeaderButton onClick={clickHandler('/signup')}>signup</HeaderButton>
            </HeaderButtons>
         )}
      </HamMenuContainer>
   );
}
