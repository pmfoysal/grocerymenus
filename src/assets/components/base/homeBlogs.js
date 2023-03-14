import React from 'react';
import useBlogs from '@hook/useBlogs';
import BlogCard from '@coreComp/blogCard';
import EmptyCard from '@coreComp/emptyCard';
import { useNavigate } from 'react-router-dom';
import MainContainer from '@coreComp/mainContainer';
import { HomeBlogsBlogs, HomeBlogsButton, HomeBlogsContainer, HomeBlogsContent } from '@baseStyle/homeBlogs.styles';

export default function HomeBlogs() {
   const { blogs } = useBlogs();
   const navigate = useNavigate();

   function clickHandler() {
      navigate('/blogs');
   }

   return (
      <HomeBlogsContainer>
         <MainContainer>
            <HomeBlogsContent>
               {!blogs.length ? <EmptyCard /> : null}
               <HomeBlogsBlogs>
                  {blogs.slice(undefined, 3).map(data => (
                     <BlogCard data={data} key={data._id} />
                  ))}
               </HomeBlogsBlogs>
               {blogs.length ? <HomeBlogsButton onClick={clickHandler}>see more</HomeBlogsButton> : null}
            </HomeBlogsContent>
         </MainContainer>
      </HomeBlogsContainer>
   );
}
