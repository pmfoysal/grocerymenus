import styled from 'styled-components';

export const SignupContainer = styled.section`
   background-color: ${({theme}) => theme.back.card0};
   padding-bottom: 8rem;
`;

export const SignupContent = styled.article`
   padding: 8rem 0;
   border-radius: 3rem;
   overflow: hidden;

   &::after {
      content: '';
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.1);
   }

   & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
   }
`;

export const SignupForm = styled.div`
   width: 50rem;
   padding: 3rem;
   background-color: rgba(255, 255, 255, 0.75);
   backdrop-filter: blur(0.75rem);
   margin: 0 auto;
   box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.5);
   border-radius: 2rem;
   z-index: 2;
`;

export const SignupHead = styled.h1`
   font-size: 3rem;
   text-transform: none;
   text-align: center;
   line-height: 1;
   color: ${({theme}) => theme.text.main.head};
`;

export const SignupTitle = styled.p`
   font-size: 2rem;
   text-transform: capitalize;
   text-align: center;
   width: 100%;
   margin-bottom: 0.5rem;
   color: ${({theme}) => theme.text.main.para};
`;

export const SignupPara = styled.p`
   text-align: center;
   width: 100%;
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
