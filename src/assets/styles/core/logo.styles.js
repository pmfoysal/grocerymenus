import styled from 'styled-components';

export const LogoContainer = styled.img`
   height: 4.5rem;
   width: auto;
   cursor: pointer;

   &:hover {
      opacity: 0.85;
   }

   &:active {
      transform: scale(0.95);
   }
`;
