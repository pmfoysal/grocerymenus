import React from 'react';
import {MessageBoxInput} from '@coreStyle/messageBox.styles';
import {InputBoxContainer, InputBoxName} from '@coreStyle/inputBox.styles';

export default function MessageBox({name, handler}) {
   return (
      <InputBoxContainer>
         <MessageBoxInput onInput={handler} placeholder={name} required></MessageBoxInput>
         <InputBoxName>{name}</InputBoxName>
      </InputBoxContainer>
   );
}
