import React from 'react';
import image from '@image/leaf.webp';
import {SectionTitleArt, SectionTitleContainer, SectionTitleText} from '@coreStyle/sectionTitle.styles';

export default function SectionTitle({name}) {
   return (
      <SectionTitleContainer>
         <SectionTitleArt src={image} alt='decoration' />
         <SectionTitleText>{name}</SectionTitleText>
      </SectionTitleContainer>
   );
}
