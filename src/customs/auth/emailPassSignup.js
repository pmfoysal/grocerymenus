import getToken from './getToken';
import {toast} from 'react-toastify';
import {getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification} from 'firebase/auth';

const auth = getAuth();

export default function emailPassSignup(data) {
   const {email, password} = data;
   const id = toast.loading('Wait... Connecting to the server!');
   createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
         const options = {
            render: 'Account created! Now Updating...!',
         };
         toast.update(id, options);
         updateUserProfile(result, data, id);
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

function updateUserProfile(result, data, id) {
   const {firstName, lastName, profilePic} = data;
   updateProfile(auth.currentUser, {
      displayName: `${firstName} ${lastName}`,
      photoURL: profilePic,
   })
      .then(() => {
         const options = {
            render: 'Profile Updated! Now sending verification...',
         };
         toast.update(id, options);
         verifyUserEmail(result, id);
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

function verifyUserEmail(result, id) {
   sendEmailVerification(auth.currentUser).then(() => {
      toast.update(id, {
         render: 'Verification Sent! Now getting access token...!',
      });
      getToken(result, id);
   });
}
