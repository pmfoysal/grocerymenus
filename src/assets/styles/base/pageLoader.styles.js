import styled from 'styled-components';

export const PageLoaderContainer = styled.section`
   width: 100%;
   height: calc(100vh - 7.75rem);

   & > * {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5rem;
      height: 100%;
   }
`;

export const PageLoaderTitle = styled.h1`
   font-size: 2rem;
   font-weight: 550;
   color: ${({theme}) => theme.text.main.para};
`;
