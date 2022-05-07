import React from 'react';
import {InputBoxContainer, InputBoxInput, InputBoxName} from '@coreStyle/inputBox.styles';

export default function InputBox({value, name, type, none, handler}) {
   return (
      <InputBoxContainer>
         <InputBoxInput
            type={type}
            onChange={handler}
            none={none}
            placeholder={name}
            spellCheck='false'
            autoComplete='off'
            value={value}
            required
            data-on={Boolean(value)}
         />
         <InputBoxName>{name}</InputBoxName>
      </InputBoxContainer>
   );
}
