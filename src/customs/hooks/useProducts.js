import axios from 'axios';
import {useEffect, useState} from 'react';

export default function useProducts() {
   const [products, setProducts] = useState([]);
   const [render, setRender] = useState(0);

   useEffect(() => {
      const url = `https://pmphas11.herokuapp.com/products`;
      axios.get(url).then(result => setProducts(result.data));
   }, [render]);

   return {products, setRender};
}
