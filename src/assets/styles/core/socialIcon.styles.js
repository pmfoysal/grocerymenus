import styled from 'styled-components';

export const SocialIconContainer = styled.span`
   width: 100%;
   height: auto;
   aspect-ratio: 2/1.1;
   border: 0.2rem solid ${({theme}) => theme.back.accent};
   display: flex;
   align-items: center;
   justify-content: center;
   transition: 0.1s ease;
   border-radius: 1rem;
   cursor: pointer;

   svg {
      pointer-events: none;
      height: 50%;
      width: auto;
      opacity: 0.9;
      color: inherit;
      transition: 0.1s ease;
      color: ${({theme}) => theme.back.accent};
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
