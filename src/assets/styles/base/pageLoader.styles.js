import styled from 'styled-components';

export const PageLoaderContainer = styled.section`
   position: fixed;
   top: 0;
   left: 0;
   height: 100vh;
   width: 100%;
   overflow: hidden;
   background-color: ${({theme}) => theme.back.page};

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
