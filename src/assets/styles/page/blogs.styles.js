import styled from 'styled-components';

export const BlogsContainer = styled.section`
   padding-bottom: 8rem;
   background-color: ${({theme}) => theme.back.page};

   @media screen and (max-width: 700px) {
      padding-bottom: 6rem;
   }

   @media screen and (max-width: 600px) {
      padding-bottom: 5rem;
   }

   @media screen and (max-width: 500px) {
      padding-bottom: 4rem;
   }

   @media screen and (max-width: 400px) {
      padding-bottom: 3rem;
   }
`;

export const BlogsContent = styled.div`
   background-color: ${({theme}) => theme.back.card0};
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 4rem;
   padding: 8rem 5rem;
   border-radius: 3rem;

   @media screen and (max-width: 1300px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 5;
   }

   @media screen and (max-width: 850px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }

   @media screen and (max-width: 600px) {
      padding: 6rem 4rem;
   }

   @media screen and (max-width: 400px) {
      padding: 5rem 3rem;
   }

   @media screen and (max-width: 350px) {
      padding: 4rem 2rem;
   }
`;
