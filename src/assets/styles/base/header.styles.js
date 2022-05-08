import styled from 'styled-components';
import {css} from 'styled-components';

export const HeaderContainer = styled.header`
   padding: 2.5rem 0;
   position: sticky;
   top: 0;
   left: 0;
   z-index: 20;
   background-color: rgba(255, 255, 255, 0.85);
   backdrop-filter: blur(0.75rem);
   box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.15);

   & > * {
      display: grid;
      grid-template-columns: 25rem 1fr 25rem;

      @media screen and (max-width: 900px) {
         grid-template-columns: 20rem 1fr 20rem;
      }

      @media screen and (max-width: 800px) {
         display: flex;
         align-items: center;
         justify-content: space-between;
      }
   }
`;

export const HeaderButtons = styled.nav`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   gap: 1rem;

   @media screen and (max-width: 800px) {
      display: none;

      &.true {
         display: flex;
         flex-wrap: wrap;
         align-items: center;
         justify-content: center;
         width: 100%;
      }
   }
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
   color: ${({theme}) => theme.text.sub.head};
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
              border: 0.2rem solid ${theme.back.accent};
              color: ${theme.text.main.head};

              &:hover {
                 background-color: ${theme.back.accent};
                 color: ${theme.text.sub.head};
              }
           `
         : null}
`;
