import React from 'react';
import {EmptyCardContainer, EmptyCardText} from '@coreStyle/emptyCard.styles';

export default function EmptyCard() {
   return (
      <EmptyCardContainer>
         <EmptyCardText>no data found from database!</EmptyCardText>
      </EmptyCardContainer>
   );
}
