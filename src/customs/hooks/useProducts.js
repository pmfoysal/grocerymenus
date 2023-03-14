import { useEffect, useState } from 'react';
import pmAxios from 'customs/middlewares/pmAxios';

export default function useProducts() {
   const [products, setProducts] = useState([]);
   const [render, setRender] = useState(0);

   useEffect(() => {
      const url = `https://grocerymenus-1-i4533289.deta.app/products`;
      pmAxios.get(url).then(result => setProducts(result.data));
   }, [render]);

   return { products, setRender };
}
