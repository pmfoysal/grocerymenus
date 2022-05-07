import React from 'react';
import HomeBanner from '@baseComp/homeBanner';
import HomeFeature from '@baseComp/homeFeature';
import SectionTitle from '@coreComp/sectionTitle';
import HomeCategory from '@baseComp/homeCategory';

export default function Home() {
   return (
      <React.Fragment>
         <HomeBanner />
         <SectionTitle>features</SectionTitle>
         <HomeFeature />
         <SectionTitle>categories</SectionTitle>
         <HomeCategory />
         <SectionTitle>newsletter</SectionTitle>
      </React.Fragment>
   );
}
