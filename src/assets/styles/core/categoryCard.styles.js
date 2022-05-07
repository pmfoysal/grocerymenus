import mask from '@image/mask.webp';
import styled from 'styled-components';

export const CategoryCardContainer = styled.summary`
   background-color: ${({bg}) => bg};
   display: inline-flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   mask-image: url(${mask});
   mask-repeat: no-repeat;
   mask-position: center;
   mask-size: cover;
   height: 20rem;
   width: 20rem;
`;

export const CategoryCardImage = styled.img`
   height: 8rem;
   width: auto;
`;

export const CategoryCardText = styled.h1`
   font-size: 2.5rem;
   color: ${({theme}) => theme.text.main.head};
   line-height: 1;
   margin-top: 1.5rem;
`;
