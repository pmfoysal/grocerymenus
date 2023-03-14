import { useEffect, useState } from 'react';
import pmAxios from 'customs/middlewares/pmAxios';
import { toast } from 'react-toastify';
import userSignout from '@auth/userSignout';

export default function useUserProducts(email) {
   const [products, setProducts] = useState([]);
   const [render, setRender] = useState(0);

   useEffect(() => {
      const url = `https://grocerymenus-1-i4533289.deta.app/products/${email}`;
      pmAxios
         .get(url)
         .then(result => setProducts(result.data))
         .catch(error => {
            userSignout();
            toast.error(error.message);
         });
   }, [render, email]);

   return { products, setRender };
}
