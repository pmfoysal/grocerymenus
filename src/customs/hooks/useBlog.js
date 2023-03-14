import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useBlog(id) {
   const [blog, setBlog] = useState({});

   useEffect(() => {
      const url = `https://grocerymenus-1-i4533289.deta.app/blog/${id}`;
      axios.get(url).then(result => setBlog(result.data));
   }, [id]);

   return { blog };
}
