import React from 'react';
import {Icon} from '@iconify/react';
import Backdrop from '@coreComp/backdrop';
import {ConfirmButton, ConfirmButtons, ConfirmContainer, ConfirmPara, ConfirmTitle} from '@baseStyle/confirm.styles';

export default function Confirm({setActive, id, button, message}) {
   function cancelHandler() {
      setActive(false);
   }

   function mainHandler() {
      console.log(id);
      setActive(false);
   }

   return (
      <Backdrop>
         <ConfirmContainer>
            <ConfirmTitle>
               confirmation!
               <Icon onClick={cancelHandler} icon='ion:close-circle-outline' />
            </ConfirmTitle>
            <ConfirmPara>{message}</ConfirmPara>
            <ConfirmButtons>
               <ConfirmButton onClick={cancelHandler}>cancel</ConfirmButton>
               <ConfirmButton onClick={mainHandler} danger>
                  {button}
               </ConfirmButton>
            </ConfirmButtons>
         </ConfirmContainer>
      </Backdrop>
   );
}
