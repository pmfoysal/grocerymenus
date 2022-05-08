import axios from 'axios';
import {useEffect, useState} from 'react';

export default function useBlog(id) {
   const [blog, setBlog] = useState({});

   useEffect(() => {
      const url = `https://pmphas11.herokuapp.com/blog/${id}`;
      axios.get(url).then(result => setBlog(result.data));
   }, []);

   return {blog};
}
