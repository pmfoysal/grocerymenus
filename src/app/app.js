import Header from '@baseComp/header';
import Private from '@helper/private';
import React, {Suspense} from 'react';
import Toaster from '@baseComp/toaster';
import getPages from '@helper/getPages';
import PageLoader from '@baseComp/pageLoader';
import {Route, Routes} from 'react-router-dom';

export default function App() {
   const {Home, About, Blogs, Signin, Signup, Forget, Contact} = getPages;
   const {BlogDetails, Inventories, AddInventory, InventoryDetails} = getPages;
   const {UserInventory, EditInventory, NotFound, Footer, MegaFooter} = getPages;

   return (
      <React.Fragment>
         <Header />
         <Suspense fallback={<PageLoader />}>
            {/* <Routes>
               <Route path='/' index element={<Home />} />
               <Route path='/about' element={<About />} />
               <Route path='/blogs' element={<Blogs />} />
               <Route path='/signin' element={<Signin />} />
               <Route path='/signup' element={<Signup />} />
               <Route path='/forget' element={<Forget />} />
               <Route path='/contact' element={<Contact />} />
               <Route path='/blog/:id' element={<BlogDetails />} />
               <Route path='/inventories' element={<Private page={Inventories} />} />
               <Route path='/inventory/add' element={<Private page={AddInventory} />} />
               <Route path='/inventory/:id' element={<Private page={InventoryDetails} />} />
               <Route path='/inventories/:user' element={<Private page={UserInventory} />} />
               <Route path='/inventory/edit/:id' element={<Private page={EditInventory} />} />
               <Route path='*' element={<NotFound />} />
            </Routes> */}
            <MegaFooter />
            <Footer />
            <Toaster />
         </Suspense>
      </React.Fragment>
   );
}
