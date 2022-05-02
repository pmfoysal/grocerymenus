import styled from 'styled-components';

export const ImgLoaderContainer = styled.figure`
   overflow: hidden;

   img {
      height: 100%;
      width: 100%;
      object-fit: cover;
   }

   & > span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
   }
`;
