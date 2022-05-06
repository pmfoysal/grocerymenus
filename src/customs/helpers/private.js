import React, {useContext} from 'react';
import {StoreContext} from '@context/storeProvider';
import {Navigate, useLocation} from 'react-router-dom';

export default function Private({page: Page}) {
   const {user} = useContext(StoreContext);
   const location = useLocation();

   if (!user.uid) {
      return <Navigate to='/signin' state={{from: location}} replace />;
   }
   return <Page />;
}
