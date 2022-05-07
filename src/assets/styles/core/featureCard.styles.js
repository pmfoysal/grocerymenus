import styled from 'styled-components';

export const FeatureCardContainer = styled.summary`
   display: flex;
   align-items: center;
   gap: 1.5rem;
`;

export const FeatureCardImage = styled.img`
   width: 5.5rem;
   height: auto;
`;

export const FeatureCardTexts = styled.div``;

export const FeatureCardTitle = styled.h1`
   font-size: 2.5rem;
   color: ${({theme}) => theme.back.accent};
`;

export const FeatureCardPara = styled.p`
   color: ${({theme}) => theme.text.main.para};
   text-transform: capitalize;
   margin-top: 0.5rem;
`;
