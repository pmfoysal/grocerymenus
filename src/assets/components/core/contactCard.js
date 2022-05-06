import React from 'react';
import {
   ContactCardButton,
   ContactCardContainer,
   ContactCardIcon,
   ContactCardPara,
   ContactCardTitle,
} from '@coreStyle/contactCard.styles';

export default function ContactCard() {
   const data = {
      icon: 'eva:phone-call-fill',
      title: 'talk to sales',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      button: {
         name: 'contact sales',
         link: '',
      },
   };

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
