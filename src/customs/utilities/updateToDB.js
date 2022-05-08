import axios from 'axios';
import {toast} from 'react-toastify';

export default function updateToDB(id, data, reloader, resetter, disabler) {
   if (disabler) disabler(true);
   const tId = toast.loading('Updating to Database! Please wait...');
   const url = `https://pmphas11.herokuapp.com/product/${id}`;
   axios
      .put(url, data)
      .then(result => {
         console.log(result.data);
         if (result.data.acknowledged) {
            toast.update(tId, {
               render: 'Product quantity successfully added!',
               type: 'success',
               isLoading: false,
               autoClose: 3000,
            });
            reloader(Math.random().toFixed(2));
            if (resetter) resetter('');
            if (disabler) disabler(false);
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
