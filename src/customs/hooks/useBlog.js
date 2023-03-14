import { useEffect, useState } from 'react';
import pmAxios from 'customs/middlewares/pmAxios';

export default function useBlog(id) {
   const [blog, setBlog] = useState({});

   useEffect(() => {
      const url = `https://grocerymenus-1-i4533289.deta.app/blog/${id}`;
      pmAxios.get(url).then(result => setBlog(result.data));
   }, [id]);

   return { blog };
}
