import styled from 'styled-components';

export const HomeFeatureContainer = styled.section`
   padding: 8rem 0;
   background-color: ${({theme}) => theme.back.card0};
`;

export const HomeFeatureContent = styled.article`
   padding: 5rem;
   background-color: ${({theme}) => theme.back.page};
   display: flex;
   justify-content: space-between;
   gap: 3rem;
   border-radius: 3rem;
   box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);

   @media screen and (max-width: 1100px) {
      flex-wrap: wrap;
      justify-content: center;
   }
`;
