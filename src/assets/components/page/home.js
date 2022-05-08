import React from 'react';
import SetTitle from '@helper/setTitle';
import HomeBlogs from '@baseComp/homeBlogs';
import HomeBanner from '@baseComp/homeBanner';
import HomeProduct from '@baseComp/homeProduct';
import HomeFeature from '@baseComp/homeFeature';
import SectionTitle from '@coreComp/sectionTitle';
import HomeCategory from '@baseComp/homeCategory';
import HomeSubscribe from '@coreComp/homeSubscribe';

export default function Home() {
   return (
      <React.Fragment>
         <SetTitle title='Home - Modern Inventory Management!' />
         <HomeBanner />
         <SectionTitle>features</SectionTitle>
         <HomeFeature />
         <SectionTitle>categories</SectionTitle>
         <HomeCategory />
         <SectionTitle>inventories</SectionTitle>
         <HomeProduct />
         <SectionTitle>latest blogs</SectionTitle>
         <HomeBlogs />
         <SectionTitle>newsletter</SectionTitle>
         <HomeSubscribe />
      </React.Fragment>
   );
}
