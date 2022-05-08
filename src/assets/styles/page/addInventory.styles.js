import styled from 'styled-components';

export const AddInventoryContainer = styled.section`
   padding-bottom: 8rem;
`;

export const AddInventoryContent = styled.article`
   padding: 8rem;
   border-radius: 3rem;
   background-color: ${({theme}) => theme.back.card0};
   display: flex;
   align-items: center;
   justify-content: center;

   @media screen and (max-width: 700px) {
      padding: 6rem;
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

   @media screen and (max-width: 350px) {
      padding: 2.5rem;
   }
`;

export const AddInventoryForm = styled.div`
   width: 60rem;
   padding: 5rem;
   background-color: ${({theme}) => theme.back.page};
   box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);
   border-radius: 2.5rem;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   @media screen and (max-width: 600px) {
      width: 100%;
   }

   @media screen and (max-width: 500px) {
      padding: 4rem;
   }

   @media screen and (max-width: 400px) {
      padding: 3rem;
   }

   @media screen and (max-width: 350px) {
      padding: 2.5rem;
   }
`;

export const AddInventoryLogo = styled.img`
   height: 5rem;
   width: auto;
`;

export const AddInventoryTitle = styled.h1`
   font-size: 3.6rem;
   color: ${({theme}) => theme.text.main.head};
   line-height: 1;
   margin-top: 1.5rem;
   text-align: center;

   @media screen and (max-width: 450px) {
      margin-top: 2rem;
   }
`;

export const AddInventoryPara = styled.p`
   font-size: 2rem;
   color: ${({theme}) => theme.text.main.para};
   line-height: 1;
   text-transform: capitalize;
   margin-top: 2.5rem;
   text-align: center;

   span {
      font-size: inherit;
      line-height: inherit;
      font-weight: inherit;
      color: inherit;
      text-transform: lowercase;
   }
`;

export const AddInventoryInputs = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2.5rem;
   margin-top: 3rem;
   width: 100%;
`;

export const AddInventoryInputGroup = styled.span`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 2.5rem;
   width: 100%;

   @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
   }
`;

export const AddInventoryButtons = styled.div`
   display: flex;
   align-items: center;
   gap: 2rem;
   margin-top: 3rem;
   flex-wrap: wrap;
   justify-content: center;
`;

export const AddInventoryButton = styled.button`
   height: 4.2rem;
   width: 12rem;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   text-transform: capitalize;
   font-weight: 550;
   background-color: ${({theme, reset}) => (reset ? theme.text.main.head : theme.back.accent)};
   color: ${({theme}) => theme.text.sub.head};
   border-radius: 1rem;
   transition: 0.1s ease;

   &:hover {
      opacity: 0.85;
   }

   &:active {
      transform: scale(0.95);
   }
`;
