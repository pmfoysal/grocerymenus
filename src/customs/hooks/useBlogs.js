import {useEffect, useState} from 'react';

export default function useBlogs() {
   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      fetch('https://pmphas11.herokuapp.com/blogs')
         .then(res => res.json())
         .then(data => setBlogs(data));
   }, []);

   return [blogs, setBlogs];
}
