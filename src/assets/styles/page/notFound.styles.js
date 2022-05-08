import styled from 'styled-components';

export const NotFoundContainer = styled.section`
   padding-bottom: 8rem;
`;

export const NotFoundContent = styled.article`
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;

   img {
      width: 78rem;
      height: auto;

      @media screen and (max-width: 1000px) {
         width: 80%;
      }
   }
`;

export const NotFoundButton = styled.button`
   margin-top: 4rem;
   height: 4.5rem;
   padding: 0 2.5rem;
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
