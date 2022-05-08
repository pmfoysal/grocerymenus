import styled from 'styled-components';
import {css} from 'styled-components';

export const InventoryDetailsContainer = styled.section`
   padding-bottom: 8rem;
`;

export const InventoryDetailsArea = styled.div`
   padding: 8rem;
   border-radius: 3rem;
   background-color: ${({theme}) => theme.back.card0};
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

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

   @media screen and (max-width: 300px) {
      padding: 2.5rem;
   }
`;

export const InventoryName = styled.h1`
   font-size: 3.2rem;
   color: ${({theme}) => theme.text.main.head};
   grid-column: span 2;
`;

export const InventoryImageArea = styled.div`
   background-color: ${({theme}) => theme.back.page};
   box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);
   border-radius: 2rem;
   padding: 3rem;
   display: flex;
   align-items: center;
   gap: 5rem;
   width: 100rem;

   figure {
      height: 30rem;
      width: auto;
      aspect-ratio: 2/1.5;
      background-color: ${({theme}) => theme.back.card0};
      border-radius: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
         width: 70%;
         height: auto;
      }
   }

   @media screen and (max-width: 1250px) {
      width: 100%;
   }

   @media screen and (max-width: 900px) {
      flex-wrap: wrap;
      justify-content: center;
      padding: 5rem;
   }

   @media screen and (max-width: 700px) {
      padding: 4rem;
   }

   @media screen and (max-width: 500px) {
      padding: 3rem;
   }

   @media screen and (max-width: 400px) {
      padding: 2.5rem;
   }
`;

export const InventoryDetailsInfos = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 3rem;
   flex-grow: 1;

   & > *:last-child {
      grid-column: span 2;
   }

   @media screen and (max-width: 1150px) {
      display: flex;
      flex-direction: column;
   }
`;

export const InventoryDetailsTitle = styled.h1`
   width: 100%;
   margin-top: 8rem;
   font-size: 2.5rem;
   color: ${({theme}) => theme.text.main.head};
   padding-bottom: 1.5rem;
   margin-bottom: 2rem;
   width: 100rem;

   &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0.3rem;
      width: 10rem;
      background-color: ${({theme}) => theme.back.card2};
   }

   @media screen and (max-width: 1250px) {
      width: 100%;
   }
`;

export const InventoryDetailsPara = styled.p`
   color: ${({theme}) => theme.text.main.para};
   width: 100rem;

   @media screen and (max-width: 1250px) {
      width: 100%;
   }
`;

export const InventoryDetailsInfo = styled.span`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
`;

export const InventoryDetailsTag = styled.p`
   font-size: 2rem;
   font-weight: 700;
   color: ${({theme}) => theme.text.main.title};
   text-transform: capitalize;
   line-height: 1;

   span {
      font-size: inherit;
      font-weight: 400;
      line-height: inherit;
      white-space: nowrap;

      @media screen and (max-width: 400px) {
         white-space: pre-wrap;
      }
   }

   .price {
      font-weight: 700;
      font-size: 2.2rem;

      span {
         font-size: 1.6rem;
         font-weight: 550;
         margin-left: 0.25rem;
         text-transform: lowercase;
      }
   }

   .user {
      text-transform: lowercase;
   }
`;

export const InventoryDetailsStock = styled.p`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   font-size: 2rem;
   line-height: 1;
   text-transform: capitalize;

   ${({stock}) => {
      if (stock) {
         return css`
            &,
            * {
               color: #00b800;
            }
         `;
      } else {
         return css`
            &,
            * {
               color: #ff4500;
            }
         `;
      }
   }}
`;

export const InventoryUpdateArea = styled.div`
   padding: 8rem;
   border-radius: 3rem;
   background-color: ${({theme}) => theme.back.card0};
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 5rem;

   @media screen and (max-width: 750px) {
      flex-wrap: wrap;
   }

   @media screen and (max-width: 700px) {
      flex-wrap: wrap;
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

   @media screen and (max-width: 300px) {
      padding: 2.5rem;
   }
`;

export const InventoryUpdateButtons = styled.div`
   height: 28rem;
   width: 40rem;
   background-color: ${({theme}) => theme.back.page};
   border-radius: 2rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 2.5rem;
   box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);

   div {
      width: 17rem;
   }

   @media screen and (max-width: 800px) {
      width: 100%;
      height: unset;
      padding: 5rem;
   }
`;

export const InventoryUpdateButton = styled.button`
   height: 4.6rem;
   width: 17rem;
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

   &:hover:not(:disabled) {
      opacity: 0.85;
   }

   &:active:not(:disabled) {
      transform: scale(0.95);
   }

   &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
   }
`;
