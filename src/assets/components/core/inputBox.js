import React from 'react';
import {InputBoxContainer, InputBoxInput, InputBoxName} from '@coreStyle/inputBox.styles';

export default function InputBox({name, type, none, handler}) {
   return (
      <InputBoxContainer>
         <InputBoxInput
            type={type}
            onInput={handler}
            none={none}
            placeholder={name}
            spellCheck='false'
            autoComplete='off'
            required
         />
         <InputBoxName>{name}</InputBoxName>
      </InputBoxContainer>
   );
}
