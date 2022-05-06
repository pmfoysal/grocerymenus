import styled from 'styled-components';

export const BlogsContainer = styled.section`
   padding-bottom: 8rem;
   background-color: ${({theme}) => theme.back.page};
`;

export const BlogsContent = styled.div`
   background-color: ${({theme}) => theme.back.card0};
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 4rem;
   padding: 8rem 4rem;
   border-radius: 3rem;
`;
