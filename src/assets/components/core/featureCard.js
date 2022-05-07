import React from 'react';
import {
   FeatureCardContainer,
   FeatureCardImage,
   FeatureCardPara,
   FeatureCardTexts,
   FeatureCardTitle,
} from '@coreStyle/featureCard.styles';

export default function FeatureCard({data}) {
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
