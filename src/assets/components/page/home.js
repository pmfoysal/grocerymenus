import React from 'react';
import HomeBanner from '@baseComp/homeBanner';
import FeatureCard from '@coreComp/featureCard';

export default function Home() {
   return (
      <React.Fragment>
         <HomeBanner />
         <div style={{padding: '10rem'}}>
            <FeatureCard />
         </div>
      </React.Fragment>
   );
}
