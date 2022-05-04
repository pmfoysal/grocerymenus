import {Icon} from '@iconify/react';
import React, {useState} from 'react';
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

export default function UserIcon() {
   const navigate = useNavigate();
   const [active, setActive] = useState(true);
   const img = 'https://avatars.githubusercontent.com/u/79983010?v=4';

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
      setActive(!active);
   }

   return (
      <UserIconContainer>
         <UserIconImage onClick={clickHandler} src={img} alt='user' />
         {active && (
            <UserIconWindow>
               <UserIconWindowImg src={img} alt='user' />
               <UserIconWindowName>foysal ahmmed</UserIconWindowName>
               <UserIconWindowRole>react developer</UserIconWindowRole>
               <UserIconWindowMenu>
                  <UserIconWindowItem onClick={linkHandler('/inventories')}>
                     <Icon icon='fluent:receipt-cube-24-filled' />
                     all items
                  </UserIconWindowItem>
                  <UserIconWindowItem onClick={linkHandler('/inventories/pmfoysal')}>
                     <Icon icon='fluent:receipt-bag-24-filled' />
                     my items
                  </UserIconWindowItem>
                  <UserIconWindowItem onClick={linkHandler('/inventory/add')}>
                     <Icon icon='fluent:receipt-add-24-filled' />
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
