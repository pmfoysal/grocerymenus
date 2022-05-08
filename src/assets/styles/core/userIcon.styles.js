import styled from 'styled-components';

export const UserIconContainer = styled.div`
   display: inline-block;

   @media screen and (max-width: 800px) {
      display: none;
   }
`;

export const UserIconImage = styled.img`
   border-radius: 100%;
   height: 3.6rem;
   width: 3.6rem;
   cursor: pointer;
   transition: 0.1s ease;
   transform: scale(1.2);

   &:hover {
      opacity: 0.85;
   }

   &:active {
      transform: scale(1.1);
   }
`;

export const UserIconWindow = styled.div`
   position: absolute;
   top: calc(100% + 1.5rem);
   right: 0;
   border-radius: 1.5rem;
   background-color: ${({theme}) => theme.back.page};
   z-index: 10;
   box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 2.5rem;
`;

export const UserIconWindowImg = styled.img`
   height: 8rem;
   width: 8rem;
   border-radius: 100%;
`;

export const UserIconWindowName = styled.h1`
   font-size: 2rem;
   color: ${({theme}) => theme.text.main.para};
   white-space: nowrap;
   margin-top: 1.5rem;
   font-weight: 700;
   padding-right: 1rem;
`;

export const UserIconWindowRole = styled.h3`
   color: ${({theme}) => theme.back.accent};
   white-space: nowrap;
   font-weight: 550;
   font-size: 1.4rem;
   margin-top: 0.25rem;
`;

export const UserIconWindowMenu = styled.nav`
   display: flex;
   flex-direction: column;
   gap: 0.85rem;
   width: 100%;
   margin-top: 2rem;
   align-items: flex-start;
`;

export const UserIconWindowItem = styled.button`
   display: flex;
   align-items: center;
   white-space: nowrap;
   gap: 0.75rem;
   padding: 0.3rem 0;
   text-transform: capitalize;
   color: ${({theme, hovered}) => (hovered ? theme.back.accent : theme.text.main.para)};

   svg {
      color: inherit;
      opacity: 0.9;
      height: 1em;
      transform: scale(1.1);
   }

   &:hover {
      color: ${({theme}) => theme.back.accent};
   }
`;
