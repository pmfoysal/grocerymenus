import React from 'react';
import {InputBoxContainer, InputBoxInput, InputBoxName} from '@coreStyle/inputBox.styles';

export default function InputBox({name, type, handler}) {
   return (
      <InputBoxContainer>
         <InputBoxInput type={type} onInput={handler} placeholder={name} spellCheck='false' autoComplete='off' required />
         <InputBoxName>{name}</InputBoxName>
      </InputBoxContainer>
   );
}
