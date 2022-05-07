import React from 'react';
import HomeBanner from '@baseComp/homeBanner';
import HomeFeature from '@baseComp/homeFeature';
import SectionTitle from '@coreComp/sectionTitle';

export default function Home() {
   return (
      <React.Fragment>
         <HomeBanner />
         <div style={{padding: '8rem 0'}}></div>
         <SectionTitle />
         <HomeFeature />
      </React.Fragment>
   );
}
