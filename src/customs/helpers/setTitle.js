import React from 'react';
import {Helmet} from 'react-helmet-async';

export default function SetTitle({title, children}) {
   return (
      <React.Fragment>
         <Helmet>
            <title>{title} - Welcome</title>
         </Helmet>
         {children}
      </React.Fragment>
   );
}
