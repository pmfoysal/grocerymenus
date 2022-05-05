import styled from 'styled-components';

export const SignupContainer = styled.section`
   background-color: ${({theme}) => theme.back.page};
   padding-bottom: 8rem;
`;

export const SignupContent = styled.article`
   padding: 8rem 0;
   border-radius: 3rem;
   overflow: hidden;
   background-color: ${({theme}) => theme.back.card1};
`;

export const SignupForm = styled.div`
   width: 47rem;
   padding: 4rem 5rem;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   text-align: center;
   background-color: rgba(255, 255, 255, 0.75);
   margin: 0 auto;
   box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);
   border-radius: 2rem;
   z-index: 2;
`;

export const SignupHead = styled.h1`
   font-size: 3rem;
   text-transform: none;
   line-height: 1;
   color: ${({theme}) => theme.text.main.head};
`;

export const SignupTitle = styled.p`
   font-size: 2rem;
   text-transform: capitalize;
   margin-bottom: 0.5rem;
   color: ${({theme}) => theme.text.main.para};
`;

export const SignupPara = styled.p`
   margin-top: 1rem;
   color: ${({theme}) => theme.text.main.para};

   a {
      color: ${({theme}) => theme.back.accent};
      font-weight: 550;
      transition: 0.1s ease;

      &:hover {
         opacity: 0.85;
      }

      &:active {
         transform: scale(0.95);
      }
   }
`;

export const SignupInputArea = styled.div`
   padding: 3rem 0;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 2rem;
`;

export const SignupInputGroup = styled.span`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 2rem;
`;

export const SignupButton = styled.button`
   height: 4.5rem;
   width: 100%;
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
