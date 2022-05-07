import React from 'react';
import featureData from '@data/featureData';
import {
   FeatureCardContainer,
   FeatureCardImage,
   FeatureCardPara,
   FeatureCardTexts,
   FeatureCardTitle,
} from '@coreStyle/featureCard.styles';

export default function FeatureCard() {
   const data = featureData[0];
   const {image, title, para} = data;
   return (
      <FeatureCardContainer>
         <FeatureCardImage src={image} alt='features' />
         <FeatureCardTexts>
            <FeatureCardTitle>{title}</FeatureCardTitle>
            <FeatureCardPara>{para}</FeatureCardPara>
         </FeatureCardTexts>
      </FeatureCardContainer>
   );
}
