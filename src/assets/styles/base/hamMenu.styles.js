import styled from 'styled-components';

export const HamMenuContainer = styled.nav`
   position: fixed;
   top: 12rem;
   left: 50%;
   transform: translateX(-50%);
   z-index: 10;
   background-color: ${({theme}) => theme.back.page};
   backdrop-filter: blur(1.5rem);
   display: none !important;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 2rem;
   width: 80%;
   padding: 3rem;
   border-radius: 1.5rem;
   box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);

   @media screen and (max-width: 800px) {
      display: flex !important;
   }
`;
