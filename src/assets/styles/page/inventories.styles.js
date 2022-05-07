import styled from 'styled-components';

export const InventoriesContainer = styled.section`
   padding-bottom: 8rem;
`;

export const InventoriesContent = styled.article`
   padding: 8rem 5rem;
   background-color: ${({theme}) => theme.back.card0};
   border-radius: 3rem;
`;

export const InventoriesProducts = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 5rem;
`;
