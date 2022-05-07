import React from 'react';
import featureData from '@data/featureData';
import FeatureCard from '@coreComp/featureCard';
import MainContainer from '@coreComp/mainContainer';
import {HomeFeatureContainer, HomeFeatureContent} from '@baseStyle/homeFeature.styles';

export default function HomeFeature() {
   return (
      <HomeFeatureContainer>
         <MainContainer>
            <HomeFeatureContent>
               {featureData.map(data => (
                  <FeatureCard data={data} key={data.id} />
               ))}
            </HomeFeatureContent>
         </MainContainer>
      </HomeFeatureContainer>
   );
}
