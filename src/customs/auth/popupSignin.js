import getToken from './getToken';
import {toast} from 'react-toastify';
import {getAuth, signInWithPopup} from 'firebase/auth';

const auth = getAuth();

export default function popupSignin(provider) {
   const id = toast.loading('Wait... Connecting to the server!');
   signInWithPopup(auth, provider)
      .then(result => {
         toast.update(id, {
            render: 'Signed in! Now getting access token...!',
         });
         getToken(result, id);
      })
      .catch(error => {
         const options = {
            render: error.message,
            type: 'error',
            isLoading: false,
            autoClose: 3000,
         };
         toast.update(id, options);
      });
}
