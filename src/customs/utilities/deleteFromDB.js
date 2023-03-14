import axios from 'axios';
import { toast } from 'react-toastify';

export default function deleteFromDB(id, reloader) {
   const tId = toast.loading('Deleting from Database! Please wait...');
   const url = `https://grocerymenus-1-i4533289.deta.app/product/${id}`;
   axios
      .delete(url)
      .then(result => {
         console.log(result.data);
         if (result.data.acknowledged) {
            toast.update(tId, {
               render: 'Product successfully deleted from Database!',
               type: 'success',
               isLoading: false,
               autoClose: 3000,
            });
            reloader(Math.random().toFixed(2));
         }
      })
      .catch(error => {
         toast.update(tId, {
            render: error.message,
            type: 'error',
            isLoading: false,
            autoClose: 3000,
         });
      });
}
