import React from 'react';
import {MessageBoxInput} from '@coreStyle/messageBox.styles';
import {InputBoxContainer, InputBoxName} from '@coreStyle/inputBox.styles';

export default function MessageBox({name, value, handler}) {
   return (
      <InputBoxContainer>
         <MessageBoxInput
            onChange={handler}
            placeholder={name}
            value={value}
            data-on={Boolean(value)}
            spellCheck='off'
            autoComplete='false'
            required
         ></MessageBoxInput>
         <InputBoxName>{name}</InputBoxName>
      </InputBoxContainer>
   );
}
