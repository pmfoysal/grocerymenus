import styled from 'styled-components';

export const HomeCategoryContainer = styled.section`
   & > * {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3rem;

      @media screen and (max-width: 1400px) {
         flex-wrap: wrap;
         justify-content: center;
      }
   }
`;
