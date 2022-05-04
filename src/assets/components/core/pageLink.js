import React from 'react';
import {PageLinkContainer} from '@coreStyle/pageLink.styles';

export default function PageLink({name, link}) {
   return <PageLinkContainer to={link}>{name}</PageLinkContainer>;
}
