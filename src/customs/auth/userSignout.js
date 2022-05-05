import {toast} from 'react-toastify';
import {getAuth, signOut} from 'firebase/auth';

const auth = getAuth();

export default function userSignout() {
   signOut(auth)
      .then(() => {
         toast.warning('You have successfully signed out!', {autoClose: 3000});
      })
      .catch(error => {
         toast.error(error.message, {autoClose: 3000});
      });
}
