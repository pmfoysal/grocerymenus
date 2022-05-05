import React from 'react';
import {CheckBoxContainer} from '@coreStyle/checkBox.styles';

export default function CheckBox({children, handler}) {
   function clickHandler(event) {
      if (handler) handler(event);
      else return false;
   }

   return (
      <CheckBoxContainer>
         <input type='checkbox' onInput={clickHandler} required />
         <p>{children}</p>
      </CheckBoxContainer>
   );
}
