import {toast} from 'react-toastify';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';

const auth = getAuth();

export default function userPassReset(email) {
   const id = toast.loading('Wait... Connecting to the server!');
   sendPasswordResetEmail(auth, email)
      .then(() => {
         const options = {
            render: 'Your password reset email sent!',
            type: 'success',
            isLoading: false,
            autoClose: 3000,
         };
         toast.update(id, options);
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
