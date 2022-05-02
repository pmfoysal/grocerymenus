import React from 'react';
import Footer from '@baseComp/footer';
import ImgLoader from '@baseComp/imgLoader';

export default function App() {
   return (
      <React.Fragment>
         <Footer />
         <div style={{padding: '10rem'}}>
            <ImgLoader />
         </div>
      </React.Fragment>
   );
}
