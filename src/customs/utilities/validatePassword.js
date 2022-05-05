import {toast} from 'react-toastify';

export default function validatePassword(text) {
   if (!text) {
      toast.error(`Please provide a strong password!`, {autoClose: 3000});
      return false;
   }
   const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
   if (!regex.test(text)) {
      toast.error(`Your password is weak, try another!`, {autoClose: 3000});
      return false;
   }
   return true;
}
