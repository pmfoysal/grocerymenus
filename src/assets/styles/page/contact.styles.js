import styled from 'styled-components';
import {css} from 'styled-components';

export const ContactContainer = styled.section`
   padding-bottom: 8rem;
`;

export const ContactContent = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8rem;
`;

export const ContactTouchArea = styled.article`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   background-color: ${({theme}) => theme.back.card0};
   padding: 8rem;
   border-radius: 3rem;

   @media screen and (max-width: 700px) {
      padding: 6rem;
   }

   @media screen and (max-width: 600px) {
      padding: 5rem;
   }

   @media screen and (max-width: 500px) {
      padding: 3.5rem;
   }

   @media screen and (max-width: 400px) {
      padding: 2rem;
   }
`;

export const ContactForm = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2.5rem;
   width: 100rem;
   margin-top: 5rem;
   padding: 5rem;
   border-radius: 3rem;
   background-color: ${({theme}) => theme.back.page};
   box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);

   @media screen and (max-width: 1200px) {
      width: 100%;
   }

   @media screen and (max-width: 600px) {
      padding: 5rem;
   }

   @media screen and (max-width: 500px) {
      padding: 4rem;
   }

   @media screen and (max-width: 400px) {
      padding: 3rem;
   }
`;

export const ContactTouchTitle = styled.h1`
   font-size: 3.2rem;
   color: ${({theme}) => theme.text.main.head};
   margin-bottom: 2rem;
`;

export const ContactPara = styled.p`
   max-width: 70rem;
   color: ${({theme}) => theme.text.main.para};
`;

export const ContactTouchCards = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 5rem;
   width: 100rem;
   margin-top: 5rem;

   @media screen and (max-width: 1200px) {
      width: 100%;
   }

   @media screen and (max-width: 750px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }

   @media screen and (max-width: 500px) {
      gap: 4rem;
   }
`;

export const ContactFormInputGroup = styled.span`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 2.5rem;

   @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
   }
`;

export const ContactFormButtons = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 3rem;

   @media screen and (max-width: 450px) {
      flex-wrap: wrap;
      gap: 2rem;
   }
`;

export const ContactFormButton = styled.button`
   height: 4.5rem;
   width: 12rem;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   text-transform: capitalize;
   font-weight: 550;
   background-color: ${({theme}) => theme.back.accent};
   color: ${({theme}) => theme.text.sub.head};
   border-radius: 1rem;
   transition: 0.1s ease;

   &:hover {
      opacity: 0.85;
   }

   &:active {
      transform: scale(0.95);
   }

   ${({theme, reset}) =>
      reset
         ? css`
              background-color: ${theme.text.main.head};
              color: ${theme.text.sub.head};
           `
         : null}
`;
