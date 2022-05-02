import React from 'react';
import Footer from '@baseComp/footer';
import Toaster from '@baseComp/toaster';
import BlogCard from '@coreComp/blogCard';

export default function App() {
   return (
      <React.Fragment>
         <Footer />
         <div style={{padding: '10rem'}}>
            <BlogCard />
         </div>
         <Toaster />
      </React.Fragment>
   );
}
