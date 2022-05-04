import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const PageLinkContainer = styled(NavLink)`
   font-size: 2rem;
   font-weight: 550;
   color: ${({theme}) => theme.text.main.head};
   text-transform: capitalize;
   transition: 0.1s ease;

   &:hover,
   &.active {
      color: ${({theme}) => theme.back.accent};
   }

   &:active {
      transform: scale(0.925);
   }
`;
