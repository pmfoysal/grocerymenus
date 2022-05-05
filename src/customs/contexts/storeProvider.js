import '@config/firebase.config';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import React, {createContext, useEffect, useState} from 'react';

const auth = getAuth();
export const StoreContext = createContext();

export default function StoreProvider({children}) {
   const deftUser = {};
   const [store, setStore] = useState({user: deftUser});

   useEffect(() => {
      onAuthStateChanged(auth, user => {
         if (user) {
            setStore(prev => ({...prev, user}));
         } else {
            setStore(prev => ({...prev, user: deftUser}));
         }
      });
   }, []);

   return <StoreContext.Provider value={{...store, setStore}}>{children}</StoreContext.Provider>;
}
