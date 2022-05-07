import styled, {css} from 'styled-components';

export const ProductCardContainer = styled.summary`
   padding: 2rem;
   width: 100%;
   border-radius: 2rem;
   background-color: ${({theme}) => theme.back.page};
   box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);

   figure {
      width: 100%;
      height: auto;
      aspect-ratio: 2/1.5;
      background-color: ${({theme}) => theme.back.card0};
      border-radius: 2rem;
      overflow: hidden;
      padding: 5rem;
   }
`;

export const ProductCardTexts = styled.div`
   padding-top: 2rem;
   display: flex;
   flex-direction: column;
`;

export const ProductCardTitle = styled.h1`
   font-size: 3rem;
   color: ${({theme}) => theme.text.main.head};
   line-height: 1;
`;

export const ProductCardPrice = styled.h2`
   font-size: 1.7rem;
   font-weight: 550;
   color: ${({theme}) => theme.text.main.head};

   & > span {
      font-weight: 700;
      line-height: inherit;
      font-size: 1.8rem;
      color: ${({theme}) => theme.text.main.title};

      & > span {
         font-size: 1.5rem;
         font-weight: 550;
         text-transform: lowercase;
         margin-left: 0.25rem;
      }
   }
`;

export const ProductCardDesc = styled.p`
   color: ${({theme}) => theme.text.main.para};
   margin-top: 1.25rem;
`;

export const ProductCardInfos = styled.div`
   display: flex;
   align-items: center;
   gap: 3rem;
   margin-top: 1.5rem;
`;

export const ProductCardInfo = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.75rem;

   * {
      line-height: 1;
   }
`;

export const ProductCardPara = styled.p`
   font-size: 1.7rem;
   font-weight: 550;
   text-transform: capitalize;
   color: ${({theme}) => theme.text.main.head};

   span {
      font-size: 1.6rem;
      line-height: inherit;
      font-weight: 400;
      color: ${({theme}) => theme.text.main.para};
   }
`;

export const ProductCardStock = styled.p`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   text-transform: capitalize;

   ${({stock}) => {
      if (stock) {
         return css`
            &,
            * {
               color: #00b800;
            }
         `;
      } else {
         return css`
            &,
            * {
               color: #ff4500;
            }
         `;
      }
   }}
`;

export const ProductCardButtons = styled.span`
   display: flex;
   gap: 1rem;
   width: 100%;
   margin-top: 2.5rem;
`;

export const ProductCardButton = styled.button`
   flex-grow: 1;
   height: 3.6rem;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.4rem;
   text-transform: capitalize;
   font-weight: 550;
   color: ${({theme}) => theme.text.sub.head};
   border-radius: 1rem;
   transition: 0.1s ease;
   ${({theme, danger, edit}) => {
      if (danger) {
         return css`
            background-color: #ff4500;
         `;
      } else if (edit) {
         return css`
            background-color: ${theme.text.main.head};
         `;
      } else {
         return css`
            background-color: ${theme.back.accent};
         `;
      }
   }}

   &:hover {
      opacity: 0.85;
   }

   &:active {
      transform: scale(0.95);
   }
`;
