import React, {Suspense} from 'react';
import Footer from '@baseComp/footer';
import Toaster from '@baseComp/toaster';
import {Route, Routes} from 'react-router-dom';
import PageLoader from '@baseComp/pageLoader';
const Blogs = React.lazy(() => import('@pageComp/blogs'));
const BlogDetails = React.lazy(() => import('@pageComp/blogDetails'));

export default function App() {
   return (
      <React.Fragment>
         <Footer />
         <Suspense fallback={<PageLoader />}>
            <Routes>
               <Route path='/blogs' element={<Blogs />} />
               <Route path='/blog/:urlId' element={<BlogDetails />} />
            </Routes>
         </Suspense>
         <Footer />
         <Toaster />
      </React.Fragment>
   );
}
