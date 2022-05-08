import styled from 'styled-components';

export const EmptyCardContainer = styled.summary`
   background-color: ${({theme}) => theme.back.page};
   box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);
   border-radius: 2.5rem;
   padding: 6rem 8rem;
   margin: 0 auto;
   max-width: 45rem;
`;

export const EmptyCardText = styled.h1`
   font-size: 2rem;
   color: ${({theme}) => theme.text.main.para};
   text-align: center;
`;
