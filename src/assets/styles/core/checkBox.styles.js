import styled from 'styled-components';

export const CheckBoxContainer = styled.label`
   display: inline-flex;
   align-items: center;
   gap: 0.75rem;
   cursor: pointer;
   user-select: none;

   p {
      color: ${({theme}) => theme.text.main.para};

      a {
         color: ${({theme}) => theme.back.accent};
         font-weight: 550;
      }
   }

   @media screen and (max-width: 350px) {
      flex-wrap: wrap;
      justify-content: center;
   }
`;
