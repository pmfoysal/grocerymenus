import styled from 'styled-components';

export const LogoContainer = styled.h1`
   display: inline-flex;
   align-items: center;
   cursor: pointer;
   transition: 0.1s ease;
   user-select: none;

   &,
   span {
      font-size: 3.6rem;
      line-height: 1;
      font-weight: 700;
      color: ${({theme}) => theme.text.main.head};
      text-transform: capitalize;
   }

   span {
      color: ${({theme}) => theme.back.accent};
   }

   &:hover {
      opacity: 0.85;
   }

   &:active {
      transform: scale(0.95);
   }
`;
