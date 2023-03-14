import { useEffect, useState } from 'react';
import pmAxios from 'customs/middlewares/pmAxios';

export default function useBlogs() {
   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      const url = `https://grocerymenus-1-i4533289.deta.app/blogs`;
      pmAxios.get(url).then(result => setBlogs(result.data));
   }, []);

   return { blogs };
}
