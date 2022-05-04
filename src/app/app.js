import Footer from '@baseComp/footer';
import Toaster from '@baseComp/toaster';
import React, {Suspense, lazy} from 'react';
import PageLoader from '@baseComp/pageLoader';
import {Route, Routes} from 'react-router-dom';
import UserIcon from '@coreComp/userIcon';
const Home = lazy(() => import('@pageComp/home'));
const About = lazy(() => import('@pageComp/about'));
const Blogs = lazy(() => import('@pageComp/blogs'));
const Signin = lazy(() => import('@pageComp/signin'));
const Signup = lazy(() => import('@pageComp/signup'));
const Forget = lazy(() => import('@pageComp/forget'));
const Contact = lazy(() => import('@pageComp/contact'));
const Inventories = lazy(() => import('@pageComp/inventories'));
const BlogDetails = lazy(() => import('@pageComp/blogDetails'));
const AddInventory = lazy(() => import('@pageComp/addInventory'));
const UserInventory = lazy(() => import('@pageComp/userInventory'));
const EditInventory = lazy(() => import('@pageComp/editInventory'));
const InventoryDetails = lazy(() => import('@pageComp/inventoryDetails'));

export default function App() {
   return (
      <React.Fragment>
         <Footer />
         <div style={{padding: '5rem 35rem'}}>
            <UserIcon />
         </div>
         <Suspense fallback={<PageLoader />}>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/about' element={<About />} />
               <Route path='/blogs' element={<Blogs />} />
               <Route path='/signin' element={<Signin />} />
               <Route path='/signup' element={<Signup />} />
               <Route path='/forget' element={<Forget />} />
               <Route path='/contact' element={<Contact />} />
               <Route path='/blog/:id' element={<BlogDetails />} />
               <Route path='/inventories' element={<Inventories />} />
               <Route path='/inventory/add' element={<AddInventory />} />
               <Route path='/inventories/:user' element={<UserInventory />} />
               <Route path='/inventory/:id' element={<InventoryDetails />} />
               <Route path='/inventory/edit/:id' element={<EditInventory />} />
            </Routes>
         </Suspense>
         <Footer />
         <Toaster />
      </React.Fragment>
   );
}
