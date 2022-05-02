import React from 'react';
import {HashLoader} from 'react-spinners';
import {useTheme} from 'styled-components';
import MainContainer from '@coreComp/mainContainer';
import {PageLoaderContainer, PageLoaderTitle} from '@baseStyle/pageLoader.styles';

export default function PageLoader() {
   const theme = useTheme();

   return (
      <PageLoaderContainer>
         <MainContainer>
            <HashLoader speedMultiplier={2} color={theme.back.accent} size={100} />
            <PageLoaderTitle>loading... Please wait!</PageLoaderTitle>
         </MainContainer>
      </PageLoaderContainer>
   );
}
