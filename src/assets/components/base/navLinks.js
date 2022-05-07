import React from 'react';
import PageLink from '@coreComp/pageLink';
import {NavLinksContainer} from '@baseStyle/navLinks.styles';

export default function NavLinks() {
   return (
      <NavLinksContainer>
         <PageLink link='/' name='home' />
         <PageLink link='/inventories' name='inventories' />
         <PageLink link='/blogs' name='blogs' />
         <PageLink link='/about' name='about' />
         <PageLink link='/contact' name='contact' />
      </NavLinksContainer>
   );
}