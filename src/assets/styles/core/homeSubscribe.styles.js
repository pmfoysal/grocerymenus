import styled from 'styled-components';

export const HomeSubscribeContainer = styled.section`
   background-color: ${({theme}) => theme.back.card0};
   padding: 8rem 0;
`;

export const HomeSubscribeContent = styled.article`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 8rem;
   background-color: ${({theme}) => theme.back.page};
   box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);
   border-radius: 3rem;

   @media screen and (max-width: 1000px) {
      padding: 6rem;
   }

   @media screen and (max-width: 800px) {
      padding: 5rem;
   }

   @media screen and (max-width: 600px) {
      padding: 4rem;
   }

   @media screen and (max-width: 400px) {
      padding: 3rem;
   }
`;

export const HomeSubscribeTitle = styled.h1`
   color: ${({theme}) => theme.text.main.head};
   font-size: 2.5rem;
   text-align: center;
`;

export const HomeSubscribePara = styled.p`
   color: ${({theme}) => theme.text.main.para};
   font-size: 1.8rem;
   margin-top: 2rem;
   max-width: 50rem;
   text-align: center;

   @media screen and (max-width: 650px) {
      max-width: 100%;
   }

   @media screen and (max-width: 450px) {
      font-size: 1.6rem;
   }
`;

export const HomeSubscribeInputArea = styled.div`
   height: 6.2rem;
   width: 50rem;
   margin-top: 4rem;

   @media screen and (max-width: 650px) {
      max-width: 100%;
   }

   @media screen and (max-width: 550px) {
      height: unset;
      display: flex;
      flex-direction: column;
      gap: 2rem;
   }

   input {
      height: 100%;
      width: 100%;
      border: 0.2rem solid ${({theme}) => theme.back.accent};
      border-radius: 10rem;
      padding-left: 2rem;
      padding-right: 15rem;
      color: ${({theme}) => theme.text.main.head};
      font-size: 2rem;
      font-weight: 550;
      text-transform: lowercase;
      background-color: ${({theme}) => theme.back.card0};

      @media screen and (max-width: 550px) {
         height: 4.5rem;
         width: 100%;
         padding: 0 1.5rem;
      }
   }

   button {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);

      &:active {
         transform: translateY(-50%) scale(0.95);
      }

      @media screen and (max-width: 550px) {
         position: relative;
         top: unset;
         right: unset;
         width: 100%;
         transform: unset;

         &:active {
            transform: scale(0.95);
         }
      }
   }
`;

export const SubscribeButton = styled.button`
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
