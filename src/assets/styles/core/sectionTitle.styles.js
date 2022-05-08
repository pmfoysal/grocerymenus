import styled from 'styled-components';

export const SectionTitleContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 8rem 0;
`;

export const SectionTitleText = styled.h1`
   display: inline-block;
   font-size: 4rem;
   text-align: center;
   color: ${({theme}) => theme.text.main.para};
   line-height: 1;
   padding-top: 1rem;

   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 0.3rem;
      width: 50%;
      border-radius: 1rem;
      background-color: ${({theme}) => theme.back.card2};
   }
`;

export const SectionTitleArt = styled.img`
   position: absolute;
   top: 0;
   left: 50%;
   transform: translateX(-50%);
   height: 200%;
   width: auto;
`;
