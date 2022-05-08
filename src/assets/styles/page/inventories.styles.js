import styled from 'styled-components';

export const InventoriesContainer = styled.section`
   padding-bottom: 8rem;
`;

export const InventoriesContent = styled.article`
   padding: 8rem 5rem;
   background-color: ${({theme}) => theme.back.card0};
   border-radius: 3rem;

   @media screen and (max-width: 550px) {
      padding: 5rem 4rem;
   }

   @media screen and (max-width: 450px) {
      padding: 4rem 3rem;
   }

   @media screen and (max-width: 380px) {
      padding: 3rem 2rem;
   }
`;

export const InventoriesProducts = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 5rem;

   @media screen and (max-width: 1250px) {
      grid-template-columns: repeat(2, 1fr);
   }

   @media screen and (max-width: 890px) {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      align-items: center;
      justify-content: center;
   }
`;
