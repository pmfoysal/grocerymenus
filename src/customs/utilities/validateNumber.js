import {toast} from 'react-toastify';

export default function validateNumber(text, name) {
   if (!text) {
      toast.error(`Please provide the ${name}!`, {autoClose: 3000});
      return false;
   }
   if (Number(text) < 1) {
      toast.error(`Please provide valid ${name}!`, {autoClose: 3000});
      return false;
   }
   for (const char of String(text)) {
      if (isNaN(char)) {
         toast.error(`${name} should only be a Number!`, {autoClose: 3000});
         return false;
      }
   }
   return true;
}
