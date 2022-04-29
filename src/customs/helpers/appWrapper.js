import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import ThemeProvider from '@context/themeProvider';
import StoreProvider from '@context/storeProvider';

export default function AppWrapper({children}) {
   useEffect(() => {
      window.localStorage.setItem(
         'author',
         JSON.stringify({
            username: 'pmfoysal',
            name: 'Foysal Ahmmed',
            email: 'pmfoysal@gmail.com',
            github: 'https://github.com/pmfoysal',
            facebook: 'https://facebook.com/pmfoysalz',
         })
      );
   }, []);

   return (
      <React.Fragment>
         <ThemeProvider>
            <StoreProvider>
               <BrowserRouter>
                  <HelmetProvider>{children}</HelmetProvider>
               </BrowserRouter>
            </StoreProvider>
         </ThemeProvider>
      </React.Fragment>
   );
}
