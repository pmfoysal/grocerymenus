import '@config/firebase.config';
import {Icon} from '@iconify/react';
import image from '@image/user.png';
import React, {useState} from 'react';
import userSignout from '@auth/userSignout';
import {useNavigate} from 'react-router-dom';
import {
   UserIconContainer,
   UserIconImage,
   UserIconWindow,
   UserIconWindowImg,
   UserIconWindowItem,
   UserIconWindowMenu,
   UserIconWindowName,
   UserIconWindowRole,
} from '@coreStyle/userIcon.styles';

export default function UserIcon({user, active: prevActive}) {
   const navigate = useNavigate();
   const [active, setActive] = useState(false);
   const {displayName, photoURL, email, role} = user;

   function clickHandler() {
      setActive(!active);
   }

   function linkHandler(link) {
      return function () {
         navigate(link);
         setActive(!active);
      };
   }

   function signoutHandler() {
      userSignout();
      setActive(!active);
   }

   function getEmailName(email) {
      const arr = email.split('@');
      return arr[0];
   }

   return (
      <UserIconContainer className={prevActive}>
         <UserIconImage onClick={clickHandler} src={photoURL || image} alt='user' />
         {active && (
            <UserIconWindow>
               <UserIconWindowImg src={photoURL || image} alt='user' />
               <UserIconWindowName>{displayName || getEmailName(email)}</UserIconWindowName>
               <UserIconWindowRole>{role || 'not provided'}</UserIconWindowRole>
               <UserIconWindowMenu>
                  <UserIconWindowItem onClick={linkHandler('/inventories')}>
                     <Icon icon='fluent:task-list-square-database-20-filled' />
                     manage items
                  </UserIconWindowItem>
                  <UserIconWindowItem onClick={linkHandler(`/inventories/${getEmailName(email)}`)}>
                     <Icon icon='fluent:collections-add-20-filled' />
                     my items
                  </UserIconWindowItem>
                  <UserIconWindowItem onClick={linkHandler('/inventory/add')}>
                     <Icon icon='fluent:add-circle-20-filled' />
                     add item
                  </UserIconWindowItem>
                  <UserIconWindowItem onClick={signoutHandler} hovered>
                     <Icon icon='fluent:sign-out-24-filled' />
                     signout
                  </UserIconWindowItem>
               </UserIconWindowMenu>
            </UserIconWindow>
         )}
      </UserIconContainer>
   );
}
