import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useProducts() {
   const [products, setProducts] = useState([]);
   const [render, setRender] = useState(0);

   useEffect(() => {
      const url = `https://grocerymenus-1-i4533289.deta.app/products`;
      axios.get(url).then(result => setProducts(result.data));
   }, [render]);

   return { products, setRender };
}
