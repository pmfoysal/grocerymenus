import {InputBoxContainer, InputBoxIcon, InputBoxInput, InputBoxName} from '@coreStyle/inputBox.styles';
import React from 'react';

export default function InputBox({name, icon, type, handler}) {
   return (
      <InputBoxContainer>
         <InputBoxInput type={type} onInput={handler} placeholder={name} spellCheck='false' autoComplete='off' required />
         <InputBoxName>{name}</InputBoxName>
         <InputBoxIcon icon={icon} />
      </InputBoxContainer>
   );
}
