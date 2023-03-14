import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useBlogs() {
   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      const url = `https://grocerymenus-1-i4533289.deta.app/blogs`;
      axios.get(url).then(result => setBlogs(result.data));
   }, []);

   return { blogs };
}
