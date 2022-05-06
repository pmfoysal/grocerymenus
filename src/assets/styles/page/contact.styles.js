import styled from 'styled-components';

export const ContactContainer = styled.section``;

export const ContactContent = styled.div``;

export const ContactTouchArea = styled.article`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   background-color: ${({theme}) => theme.back.card0};
   padding: 8rem;
   border-radius: 3rem;
`;

export const ContactFormArea = styled.article``;

export const ContactTouchTitle = styled.h1`
   font-size: 3.2rem;
   color: ${({theme}) => theme.text.main.head};
   margin-bottom: 2rem;
`;

export const ContactPara = styled.p`
   max-width: 70rem;
   color: ${({theme}) => theme.text.main.para};
`;

export const ContactTouchCards = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 5rem;
   width: 100rem;
   margin-top: 5rem;
`;
