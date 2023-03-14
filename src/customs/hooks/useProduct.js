import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useProduct(id) {
   const [product, setProduct] = useState({});
   const [render, setRender] = useState(0);

   useEffect(() => {
      const url = `https://grocerymenus-1-i4533289.deta.app/product/${id}`;
      axios.get(url).then(result => setProduct(result.data));
   }, [render, id]);

   return { product, setRender };
}
