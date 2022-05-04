import React from 'react';
import {MenuLinkContainer} from '@coreStyle/menuLink.styles';

export default function MenuLink({name, link}) {
   return <MenuLinkContainer to={link}>{name}</MenuLinkContainer>;
}
