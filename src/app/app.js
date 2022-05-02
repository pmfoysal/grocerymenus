import React from 'react';
import Footer from '@baseComp/footer';
import {ToastContainer, Zoom} from 'react-toastify';

export default function App() {
   return (
      <React.Fragment>
         <Footer />
         <ToastContainer
            position='top-center'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            transition={Zoom}
         />
      </React.Fragment>
   );
}
