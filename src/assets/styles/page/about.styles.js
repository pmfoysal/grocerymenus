import styled from 'styled-components';

export const AboutContainer = styled.section`
   background-color: ${({theme}) => theme.back.card0};
   padding-bottom: 8rem;
`;

export const AboutCard = styled.article`
   width: 120rem;
   margin: 0 auto;
   padding: 4rem;
   border-radius: 2rem;
   background-color: ${({theme}) => theme.back.page};
   box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.1);
   display: flex;
   align-items: center;
   gap: 4rem;
`;

export const AboutCardLeft = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding-right: 4rem;

   &::after {
      content: '';
      width: 0.3rem;
      height: 50%;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      background-color: ${({theme}) => theme.back.card2};
   }
`;

export const AboutCardImage = styled.img`
   height: 17.5rem;
   width: 17.5rem;
   border-radius: 100%;
`;

export const AboutCardName = styled.h1`
   font-size: 2.2rem;
   color: ${({theme}) => theme.text.main.head};
   white-space: nowrap;
   margin-top: 2rem;
`;

export const AboutCardRole = styled.h3`
   font-size: 1.5rem;
   font-weight: 550;
   color: ${({theme}) => theme.back.accent};
   margin-top: 0.25rem;
`;

export const AboutCardIcons = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   gap: 1.5rem;
`;

export const AboutCardIcon = styled.a`
   margin-top: 2rem;
   height: 3.5rem;
   width: 3.5rem;
   border-radius: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${({theme}) => theme.back.card1};
   transition: 0.1s ease;

   svg {
      color: ${({theme}) => theme.back.accent};
      transition: 0.1s ease;
      height: 1.8rem;
      width: auto;
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

export const AboutCardPara = styled.p`
   flex-grow: 1;
   color: ${({theme}) => theme.text.main.para};
   line-height: 1.6;

   .title {
      font-size: 2rem;
      font-weight: 700;
      text-transform: capitalize;
      line-height: 1;
      margin-bottom: 1.5rem;
      padding-bottom: 2rem;

      &::after {
         content: '';
         position: absolute;
         bottom: 0;
         left: 0;
         height: 0.3rem;
         width: 5rem;
         border-radius: 1rem;
         background-color: ${({theme}) => theme.back.card2};
      }
   }

   .name {
      font-weight: 700;
      line-height: inherit;
      font-size: inherit;
      color: inherit;
   }
`;
