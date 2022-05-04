import styled from 'styled-components';

export const HeaderContainer = styled.header`
   background-color: ${({theme}) => theme.back.card1};
   padding: 2.5rem 0;

   & > * {
      display: grid;
      grid-template-columns: 25rem 1fr 25rem;
   }
`;
