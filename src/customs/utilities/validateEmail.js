import {toast} from 'react-toastify';

export default function validateEmail(text) {
   if (!text) {
      toast.error(`Please provide your email address!`, {autoClose: 3000});
      return false;
   }
   const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   if (!regex.test(text)) {
      toast.error(`Provide a valid email address!`, {autoClose: 3000});
      return false;
   }
   return true;
}
