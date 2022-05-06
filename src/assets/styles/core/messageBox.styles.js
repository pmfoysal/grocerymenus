import styled, {css} from 'styled-components';

export const MessageBoxInput = styled.textarea`
   height: 20rem;
   width: 100%;
   border-radius: 0.75rem;
   border: 0.2rem solid rgba(0, 0, 0, 0.4);
   background-color: transparent;
   padding: 1.5rem;
   font-weight: 700;
   transition: 0.2s ease;
   color: ${({theme}) => theme.text.main.head};

   &[data-text='true'] {
      background-color: ${({theme}) => theme.back.page};

      & + p {
         top: 0.1rem;
         opacity: 1;
      }
   }

   &:focus {
      border-color: ${({theme}) => theme.back.accent};
      background-color: ${({theme}) => theme.back.page};

      & + p {
         color: ${({theme}) => theme.text.sub.para};
         background-color: ${({theme}) => theme.back.accent};
      }
   }

   ${({none}) =>
      none
         ? css`
              text-transform: none;
           `
         : null}
`;
