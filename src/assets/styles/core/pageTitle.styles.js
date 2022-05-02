import styled from 'styled-components';

export const PageTitleContainer = styled.h1`
   padding: 5rem 0;
   font-size: 4.5rem;
   line-height: 1;
   font-weight: 400;
   color: ${({theme}) => theme.text.main.head};
   font-family: 'Bungee Inline', cursive;

   span {
      color: ${({theme}) => theme.back.accent};
      font-size: inherit;
      line-height: inherit;
      font-family: inherit;
      font-weight: inherit;
   }
`;
