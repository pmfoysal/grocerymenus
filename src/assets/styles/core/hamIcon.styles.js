import styled from 'styled-components';

export const HamIconContainer = styled.nav`
   height: 4.2rem;
   width: 6rem;
   margin-left: auto;
   border: 0.2rem solid ${({theme}) => theme.text.main.head};
   display: none;
   align-items: center;
   justify-content: center;
   border-radius: 0.75rem;
   cursor: pointer;
   user-select: none;
   transition: 0.2s ease;

   &.true {
      border-color: ${({theme}) => theme.back.accent};

      span {
         background-color: transparent;

         &::before,
         &::after {
            top: 50%;
            left: 50%;
            background-color: ${({theme}) => theme.back.accent};
         }

         &::before {
            transform: translate(-50%, -50%) rotate(45deg);
         }

         &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
         }
      }
   }

   @media screen and (max-width: 800px) {
      display: flex;
   }
`;

export const HamIconLine = styled.span`
   height: 0.2rem;
   width: 3.5rem;
   border-radius: 1rem;
   background-color: ${({theme}) => theme.text.main.head};
   pointer-events: none;
   transition: 0.2s ease;

   &::before,
   &::after {
      content: '';
      position: absolute;
      left: 0;
      background-color: ${({theme}) => theme.text.main.head};
      border-radius: inherit;
      height: inherit;
      width: inherit;
      transition: 0.2s ease;
   }

   &::before {
      top: -0.8rem;
   }

   &::after {
      top: 0.8rem;
   }
`;
