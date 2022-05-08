import styled from 'styled-components';

export const SigninCheckBoxGroup = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 1rem;
   flex-wrap: wrap;

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

export const SigninOr = styled.div`
   width: 70%;
   display: flex;
   align-items: center;
   gap: 1rem;
   padding: 2.5rem 0;

   .text {
      display: inline-block;
      font-size: 1.5rem;
      font-weight: 550;
      color: ${({theme}) => theme.text.main.head};
      text-transform: uppercase;
      line-height: 1;
      opacity: 0.7;
   }

   .line {
      height: 0.2rem;
      flex-grow: 1;
      background-color: ${({theme}) => theme.text.main.head};
      border-radius: 1rem;
      opacity: 0.4;
   }
`;

export const SigninWarning = styled.p`
   color: ${({theme}) => theme.text.main.para};
   width: 100%;
   text-align: left;
   font-size: 1.5rem;
   margin-top: 2.5rem;

   strong {
      font-weight: 700;
      font-size: inherit;
      color: inherit;
      line-height: inherit;
      margin-right: 0.5rem;
   }

   a {
      color: ${({theme}) => theme.back.accent};
      font-weight: 550;
      font-size: inherit;
      transition: 0.1s ease;

      &:hover {
         opacity: 0.85;
      }

      &:active {
         transform: scale(0.95);
      }
   }
`;
