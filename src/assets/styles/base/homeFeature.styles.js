import styled from 'styled-components';

export const HomeFeatureContainer = styled.section`
   padding: 8rem;
   margin: 8rem 0;
   background-color: ${({theme}) => theme.back.card0};
`;

export const HomeFeatureContent = styled.article`
   padding: 5rem;
   background-color: ${({theme}) => theme.back.page};
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 3rem;
   border-radius: 3rem;
   box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);
`;
