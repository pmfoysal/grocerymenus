import styled from 'styled-components';

export const HomeProductContainer = styled.section``;

export const HomeProductContent = styled.article`
   padding: 8rem 5rem;
   background-color: ${({theme}) => theme.back.card0};
   border-radius: 3rem;
`;

export const HomeContentProducts = styled.article`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 5rem;
`;

export const HomeProductButton = styled.button`
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
`;
