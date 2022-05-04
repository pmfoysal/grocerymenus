import React from 'react';
import MenuLink from '@coreComp/menuLink';
import {MegaMenuContainer, MegaMenuTitle} from '@baseStyle/megaMenu.styles';

export default function MegaMenu({name, data = []}) {
   return (
      <MegaMenuContainer>
         <MegaMenuTitle>{name}</MegaMenuTitle>
         {data.map((item, index) => (
            <MenuLink name={item.name} link={item.link} key={`navmenu-${index}`} />
         ))}
      </MegaMenuContainer>
   );
}
