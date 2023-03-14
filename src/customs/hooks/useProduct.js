import { useEffect, useState } from 'react';
import pmAxios from 'customs/middlewares/pmAxios';

export default function useProduct(id) {
   const [product, setProduct] = useState({});
   const [render, setRender] = useState(0);

   useEffect(() => {
      const url = `https://grocerymenus-1-i4533289.deta.app/product/${id}`;
      pmAxios.get(url).then(result => setProduct(result.data));
   }, [render, id]);

   return { product, setRender };
}
