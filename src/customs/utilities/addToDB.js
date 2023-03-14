import axios from 'axios';
import { toast } from 'react-toastify';

export default function addToDB(data, resetter) {
   const id = toast.loading('Adding to Database! Please wait...');
   const url = 'https://grocerymenus-1-i4533289.deta.app/product';
   axios
      .post(url, data)
      .then(result => {
         if (result.data.acknowledged) {
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
