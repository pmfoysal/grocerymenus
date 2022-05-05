import React from 'react';
import {Icon} from '@iconify/react';
import {SocialIconContainer} from '@coreStyle/socialIcon.styles';

export default function SocialIcon({icon, handler}) {
   return (
      <SocialIconContainer onClick={handler}>
         <Icon icon={icon} />
      </SocialIconContainer>
   );
}
