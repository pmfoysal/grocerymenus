import React from 'react';
import useBlogs from '@hook/useBlogs';
import SetTitle from '@helper/setTitle';
import BlogCard from '@coreComp/blogCard';
import PageTitle from '@coreComp/pageTitle';
import MainContainer from '@coreComp/mainContainer';
import {BlogsContainer, BlogsContent} from '@pageStyle/blogs.styles';

export default function Blogs() {
   const [blogs] = useBlogs();
   return (
      <React.Fragment>
         <SetTitle title='Blogs - Latest Blogs Archived' />
         <BlogsContainer>
            <MainContainer>
               <PageTitle>
                  latest <span>blogs!</span>
               </PageTitle>
               <BlogsContent>
                  {blogs.map(data => (
                     <BlogCard data={data} key={data._id} />
                  ))}
               </BlogsContent>
            </MainContainer>
         </BlogsContainer>
      </React.Fragment>
   );
}
