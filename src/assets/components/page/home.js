import React from 'react';
import HomeBanner from '@baseComp/homeBanner';
import HomeProduct from '@baseComp/homeProduct';
import HomeFeature from '@baseComp/homeFeature';
import SectionTitle from '@coreComp/sectionTitle';
import HomeCategory from '@baseComp/homeCategory';
import HomeSubscribe from '@coreComp/homeSubscribe';

export default function Home() {
   return (
      <React.Fragment>
         <HomeBanner />
         <SectionTitle>features</SectionTitle>
         <HomeFeature />
         {/* <SectionTitle>categories</SectionTitle>
         <HomeCategory />
         <SectionTitle>inventories</SectionTitle>
         <HomeProduct />
         <SectionTitle>newsletter</SectionTitle>
         <HomeSubscribe /> */}
      </React.Fragment>
   );
}
