import styled from 'styled-components';

export const BlogCardContainer = styled.article`
   width: 100%;
   overflow: hidden;
   padding: 2rem;
   border-radius: 2rem;
   background-color: ${({theme}) => theme.back.page};
   box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);

   figure {
      border-radius: 1.5rem;
      width: 100%;
      height: auto;
      aspect-ratio: 2/1.3;
      overflow: hidden;
      background-color: white;

      @media screen and (max-width: 400px) {
         aspect-ratio: 2/1.5;
      }
   }

   &:hover {
      box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.15);
   }

   @media screen and (max-width: 850px) {
      max-width: 50rem;
   }
`;

export const BlogCardDetails = styled.summary``;

export const BlogCardTags = styled.p`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   padding: 1.5rem 0;
   color: ${({theme}) => theme.text.main.para};
   line-height: 1;
   flex-wrap: wrap;

   .date {
      font-size: 1.5rem;
   }

   .author {
      text-transform: lowercase;
      color: ${({theme}) => theme.text.main.title};
      font-weight: 550;
   }
`;

export const BlogCardTitle = styled.h1`
   font-size: 2.2rem;
   color: ${({theme}) => theme.text.main.head};
   text-transform: none;
`;

export const BlogCardPara = styled.p`
   margin-top: 1.5rem;
   color: ${({theme}) => theme.text.main.para};

   button {
      text-transform: capitalize;
      color: ${({theme}) => theme.back.accent};
      font-size: 1.5rem;
      margin-left: 0.5rem;

      &:hover {
         opacity: 0.85;
      }
   }
`;
