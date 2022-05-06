import React from 'react';
import {
   ContactCardButton,
   ContactCardContainer,
   ContactCardIcon,
   ContactCardPara,
   ContactCardTitle,
} from '@coreStyle/contactCard.styles';

export default function ContactCard({data}) {
   const {icon, title, para, button} = data;

   return (
      <ContactCardContainer>
         <ContactCardIcon icon={icon} />
         <ContactCardTitle>{title}</ContactCardTitle>
         <ContactCardPara>{para}</ContactCardPara>
         <ContactCardButton>{button.name}</ContactCardButton>
      </ContactCardContainer>
   );
}
