import React from 'react';
import {Icon} from '@iconify/react';
import Backdrop from '@coreComp/backdrop';
import deleteFromDB from '@utility/deleteFromDB';
import {ConfirmButton, ConfirmButtons, ConfirmContainer, ConfirmPara, ConfirmTitle} from '@baseStyle/confirm.styles';

export default function Confirm({setActive, id, button, message, setRender}) {
   function cancelHandler() {
      setActive(false);
   }

   function mainHandler() {
      setActive(false);
      deleteFromDB(id, setRender);
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
