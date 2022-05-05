import {toast} from 'react-toastify';

export default function validateText(text, name) {
   if (!text) {
      toast.error(`Please provide your ${name}!`, {autoClose: 3000});
      return false;
   }
   if (name === 'username') {
      const space = text.includes(' ');
      if (space) {
         toast.error(`Username couldn't contain whitespace!`, {autoClose: 3000});
         return false;
      }
   }
   return true;
}
