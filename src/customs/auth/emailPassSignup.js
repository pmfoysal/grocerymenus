import {toast} from 'react-toastify';
import {getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification} from 'firebase/auth';

const auth = getAuth();

export default function emailPassSignup(data) {
   const {email, password} = data;
   const id = toast.loading('Wait... Connecting to the server!');
   createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
         const options = {
            render: 'Account created! Now Updating...!',
         };
         toast.update(id, options);
         updateUserProfile(data, id);
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

function updateUserProfile(data, id) {
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
         verifyUserEmail(id);
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

function verifyUserEmail(id) {
   sendEmailVerification(auth.currentUser).then(() => {
      const options = {
         render: 'Your account verification email sent!',
         type: 'success',
         isLoading: false,
         autoClose: 3000,
      };
      toast.update(id, options);
   });
}
