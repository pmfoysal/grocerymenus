import {lazy} from 'react';

const getPages = {
   Home: lazy(() => import('@pageComp/home')),
   About: lazy(() => import('@pageComp/about')),
   Blogs: lazy(() => import('@pageComp/blogs')),
   Footer: lazy(() => import('@baseComp/footer')),
   Signin: lazy(() => import('@pageComp/signin')),
   Signup: lazy(() => import('@pageComp/signup')),
   Forget: lazy(() => import('@pageComp/forget')),
   Contact: lazy(() => import('@pageComp/contact')),
   NotFound: lazy(() => import('@pageComp/notFound')),
   MegaFooter: lazy(() => import('@baseComp/megaFooter')),
   Inventories: lazy(() => import('@pageComp/inventories')),
   BlogDetails: lazy(() => import('@pageComp/blogDetails')),
   AddInventory: lazy(() => import('@pageComp/addInventory')),
   UserInventory: lazy(() => import('@pageComp/userInventory')),
   EditInventory: lazy(() => import('@pageComp/editInventory')),
   InventoryDetails: lazy(() => import('@pageComp/inventoryDetails')),
};

export default getPages;
