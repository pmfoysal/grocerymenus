import styled from 'styled-components';

export const HomeBlogsContainer = styled.section``;

export const HomeBlogsContent = styled.article`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
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

export const HomeBlogsBlogs = styled.div`
   display: grid;
   width: 100%;
   background-color: ${({theme}) => theme.back.card0};
   grid-template-columns: repeat(3, 1fr);
   gap: 5rem;

   @media screen and (max-width: 1300px) {
      grid-template-columns: repeat(4, 1fr);

      & > * {
         grid-column: span 2;
      }

      & > *:last-child {
         grid-column: 2/4;
      }
   }

   @media screen and (max-width: 890px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      & > * {
         max-width: 50rem;
      }
   }

   @media screen and (max-width: 600px) {
      gap: 4rem;
   }

   @media screen and (max-width: 450px) {
      gap: 3rem;
   }
`;

export const HomeBlogsButton = styled.button`
   margin: 0 auto;
   margin-top: 6rem;
   height: 4.8rem;
   padding: 0 4rem;
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

   @media screen and (max-width: 500px) {
      margin-top: 5rem;
   }

   @media screen and (max-width: 400px) {
      margin-top: 4rem;
   }

   @media screen and (max-width: 300px) {
      margin-top: 3rem;
   }
`;
