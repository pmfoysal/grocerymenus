import axios from 'axios';
import {toast} from 'react-toastify';

export default function getToken(result, id) {
   const email = result.user.email;
   const url = `https://pmphas11.herokuapp.com/token`;
   axios
      .post(url, {email})
      .then(result => {
         const token = result.data.token;
         window.localStorage.setItem('bearer', token);
         toast.update(id, {
            render: 'Your access token successfully added!',
            type: 'success',
            isLoading: false,
            autoClose: 3000,
         });
      })
      .catch(error => {
         toast.update(id, {
            render: error.message,
            type: 'error',
            isLoading: false,
            autoClose: 3000,
         });
      });
}
