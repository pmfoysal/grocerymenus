import styled from 'styled-components';

export const HomeBannerContainer = styled.section`
   width: 100%;
   height: calc(100vh - 9.5rem);
`;

export const BannerSlide = styled.article`
   width: 100%;
   height: 100%;

   & > *:not(figure) {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
   }

   figure {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
   }
`;

export const BannerContent = styled.div`
   width: 100rem;
   height: 45rem;
   background-color: rgba(255, 255, 255, 0.75);
   z-index: 5;
   backdrop-filter: blur(0.75rem);
   border-radius: 2rem;
   padding: 5rem;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   text-align: center;
`;

export const BannerHead = styled.h1`
   font-size: 7rem;
   line-height: 1.2;
   color: ${({theme}) => theme.text.main.head};
   padding: 1.5rem 0 2rem;

   span {
      font-size: 7rem;
      line-height: 1.2;
      font-weight: inherit;
      font-family: inherit;
      color: ${({theme}) => theme.back.accent};
   }
`;

export const BannerPara = styled.p`
   font-size: 2rem;
   font-weight: 550;
   color: ${({theme}) => theme.text.main.title};
`;

export const BannerButton = styled.button`
   margin-top: 4rem;
   height: 4.6rem;
   width: 16rem;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   text-transform: capitalize;
   font-weight: 550;
   background-color: ${({theme}) => theme.back.accent};
   color: ${({theme}) => theme.text.sub.head};
   border-radius: 10rem;
   transition: 0.1s ease;

   &:hover {
      opacity: 0.85;
   }

   &:active {
      transform: scale(0.95);
   }
`;

export const SliderButton = styled.button`
   height: 7rem;
   width: 7rem;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   text-transform: capitalize;
   font-weight: 550;
   background-color: ${({theme}) => theme.back.card1};
   border-radius: 100%;
   transition: 0.1s ease;
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   z-index: 10;
   ${({right}) => (right ? 'right: 0' : 'left: 0')};

   &:hover {
      background-color: ${({theme}) => theme.back.card2};
   }

   &:active {
      transform: scale(0.95) translateY(-50%);
   }

   svg {
      height: 3.6rem;
      width: auto;
      color: ${({theme}) => theme.text.main.head};
   }
`;
