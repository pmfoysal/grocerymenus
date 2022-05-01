import React from 'react';
import Backdrop from '@coreComp/backdrop';
import {ConfirmButton, ConfirmButtons, ConfirmContainer, ConfirmPara, ConfirmTitle} from '@baseStyle/confirm.styles';
import {Icon} from '@iconify/react';

export default function Confirm({setConfirm, setActive}) {
   function clickHandler(name) {
      return function () {
         if (name === 'delete') {
            setConfirm(true);
         } else {
            setConfirm(false);
         }
         setActive(false);
      };
   }

   return (
      <Backdrop>
         <ConfirmContainer>
            <ConfirmTitle>
               confirmation!
               <Icon onClick={clickHandler('cancel')} icon='ion:close-circle-outline' />
            </ConfirmTitle>
            <ConfirmPara>
               Are you sure you want to delete it? Once deleted, this item can't be possible to bring back again!
            </ConfirmPara>
            <ConfirmButtons>
               <ConfirmButton onClick={clickHandler('cancel')}>cancel</ConfirmButton>
               <ConfirmButton onClick={clickHandler('delete')} danger>
                  delete
               </ConfirmButton>
            </ConfirmButtons>
         </ConfirmContainer>
      </Backdrop>
   );
}
