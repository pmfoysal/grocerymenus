import React from 'react';
import SetTitle from '@helper/setTitle';
import {BlogsContainer, BlogsContent} from '@pageStyle/blogs.styles';
import MainContainer from '@coreComp/mainContainer';
import PageTitle from '@coreComp/pageTitle';

export default function Blogs() {
   return (
      <React.Fragment>
         <SetTitle title='Blogs - Latest Blogs Archived' />
         <BlogsContainer>
            <MainContainer>
               <PageTitle>
                  latest <span>blogs!</span>
               </PageTitle>
               <BlogsContent></BlogsContent>
            </MainContainer>
         </BlogsContainer>
      </React.Fragment>
   );
}
