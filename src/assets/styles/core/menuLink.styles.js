import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const MenuLinkContainer = styled(NavLink)`
   font-size: 1.6rem;
   font-weight: 550;
   color: ${({theme}) => theme.text.main.para};
   text-transform: capitalize;
   padding: 0.25rem 0;

   &.active,
   &:hover {
      color: ${({theme}) => theme.back.accent};
   }
`;
