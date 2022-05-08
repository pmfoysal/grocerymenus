import axios from 'axios';
import {toast} from 'react-toastify';

export default function addToDB(data, resetter) {
   const id = toast.loading('Adding to Database! Please wait...');
   const url = 'https://pmphas11.herokuapp.com/product';
   axios
      .post(url, data)
      .then(result => {
         if (result.data.insertedId) {
            toast.update(id, {
               render: 'Your product successfully added!',
               type: 'success',
               isLoading: false,
               autoClose: 3000,
            });
            resetter();
         }
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
