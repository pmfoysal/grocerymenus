import {toast} from 'react-toastify';

export default function validatePhone(text) {
   if (!text) {
      toast.error(`Please provide your phone number!`, {autoClose: 3000});
      return false;
   }
   const newText = text.replaceAll(/[ \-\+]+/g, '');
   for (const char of newText) {
      if (isNaN(char)) {
         toast.error('Phone number should only be a Number!', {autoClose: 3000});
         return false;
      }
   }
   return true;
}
