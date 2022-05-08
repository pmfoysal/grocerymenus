import styled from 'styled-components';

export const SocialSigninContainer = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 2.5rem;

   @media screen and (max-width: 600px) {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
   }
`;
