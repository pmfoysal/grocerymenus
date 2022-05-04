import styled from 'styled-components';
import {css} from 'styled-components';

export const HeaderContainer = styled.header`
   background-color: ${({theme}) => theme.back.card1};
   padding: 2.5rem 0;

   & > * {
      display: grid;
      grid-template-columns: 25rem 1fr 25rem;
   }
`;

export const HeaderButtons = styled.nav`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   gap: 1rem;
`;

export const HeaderButton = styled.button`
   height: 4rem;
   width: 9rem;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   text-transform: capitalize;
   font-weight: 550;
   background-color: ${({theme}) => theme.back.accent};
   border-radius: 10rem;
   transition: 0.1s ease;

   &:hover {
      opacity: 0.85;
   }

   &:active {
      transform: scale(0.95);
   }

   ${({theme, sub}) =>
      sub
         ? css`
              background-color: transparent;
              border: 0.2rem solid ${({theme}) => theme.back.accent};

              &:hover {
                 background-color: ${({theme}) => theme.back.accent};
              }
           `
         : null}
`;
