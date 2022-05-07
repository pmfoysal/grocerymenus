import React from 'react';
import {InputBoxContainer, InputBoxInput, InputBoxName} from '@coreStyle/inputBox.styles';

export default function InputBox({value, name, type, none, handler, ...rest}) {
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
            {...rest}
         />
         <InputBoxName>{name}</InputBoxName>
      </InputBoxContainer>
   );
}
