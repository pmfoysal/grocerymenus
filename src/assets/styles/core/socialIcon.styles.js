import styled from 'styled-components';

export const SocialIconContainer = styled.span`
   width: 100%;
   height: auto;
   aspect-ratio: 2/1;
   border: 0.2rem solid ${({theme}) => theme.back.accent};
   display: flex;
   align-items: center;
   justify-content: center;
   transition: 0.1s ease;

   svg {
      pointer-events: none;
      height: 80%;
      width: auto;
      opacity: 0.9;
      color: inherit;
      transition: 0.1s ease;
   }

   &:hover {
      background-color: ${({theme}) => theme.back.accent};

      svg {
         color: ${({theme}) => theme.back.page};
      }
   }

   &:active {
      transform: scale(0.95);
   }
`;
