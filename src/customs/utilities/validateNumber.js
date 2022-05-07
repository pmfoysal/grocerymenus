import {toast} from 'react-toastify';

export default function validateNumber(text, name) {
   if (!text) {
      toast.error(`Please provide the ${name}!`, {autoClose: 3000});
      return false;
   }
   for (const char of text) {
      if (isNaN(char)) {
         toast.error(`${name} should only be a Number!`, {autoClose: 3000});
         return false;
      }
   }
   return true;
}
