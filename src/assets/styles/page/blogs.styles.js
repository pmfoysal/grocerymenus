import styled from 'styled-components';

export const BlogsContainer = styled.section`
   padding-bottom: 8rem;
   background-color: ${({theme}) => theme.back.card0};
`;

export const BlogsContent = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 4rem;
`;
