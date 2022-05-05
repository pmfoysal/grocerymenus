import {toast} from 'react-toastify';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const auth = getAuth();

export default function emailPassSignin(data) {
   const {email, password} = data;
   const id = toast.loading('Wait... Connecting to the server!');
   signInWithEmailAndPassword(auth, email, password)
      .then(() => {
         const options = {
            render: 'You have successfully signed in!',
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
