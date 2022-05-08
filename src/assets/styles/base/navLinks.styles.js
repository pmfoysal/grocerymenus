import styled from 'styled-components';

export const NavLinksContainer = styled.nav`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 3rem;

   @media screen and (max-width: 1050px) {
      & a[href='/inventories'] {
         display: none;
      }
   }

   @media screen and (max-width: 800px) {
      display: none;
   }
`;
