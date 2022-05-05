import styled from 'styled-components';

export const SigninCheckBoxGroup = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 1rem;

   a {
      color: ${({theme}) => theme.back.accent};
      font-weight: 550;
      text-transform: capitalize;
      transition: 0.1s ease;

      &:hover {
         opacity: 0.85;
      }

      &:active {
         transform: scale(0.95);
      }
   }
`;
