import React from 'react';
import HomeBanner from '@baseComp/homeBanner';
import HomeFeature from '@baseComp/homeFeature';
import SectionTitle from '@coreComp/sectionTitle';
import CategoryCard from '@coreComp/categoryCard';

export default function Home() {
   return (
      <React.Fragment>
         <HomeBanner />
         <SectionTitle>features</SectionTitle>
         <HomeFeature />
         <SectionTitle>categories</SectionTitle>
         <div style={{padding: '10rem'}}>
            <CategoryCard />
         </div>
      </React.Fragment>
   );
}
