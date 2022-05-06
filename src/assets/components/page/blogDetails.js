import {Icon} from '@iconify/react';
import SetTitle from '@helper/setTitle';
import {useParams} from 'react-router-dom';
import PageTitle from '@coreComp/pageTitle';
import ImgLoader from '@baseComp/imgLoader';
import MainContainer from '@coreComp/mainContainer';
import React, {useEffect, useRef, useState} from 'react';
import {
   BlogDetailsContainer,
   BlogDetailsContent,
   BlogDetailsDescription,
   BlogDetailsInfo,
   BlogDetailsLine,
   BlogDetailsTitle,
} from '@pageStyle/blogDetails.styles';

export default function BlogDetails() {
   const descRef = useRef();
   const {id: blogId} = useParams();
   const [blog, setBlog] = useState({});
   const {author, date, title, image, body} = blog;

   useEffect(() => {
      descRef.current.innerHTML = body || 'Amazing blog description goes here...';
   }, [body]);

   useEffect(() => {
      const url = `https://pmphas11.herokuapp.com/blog/${blogId}`;
   }, []);

   return (
      <React.Fragment>
         <SetTitle title={'Blogs - ' + (title || 'Amazing Blog Title Goes Here...')} />
         <BlogDetailsContainer>
            <MainContainer>
               <PageTitle>
                  blog <span>details!</span>
               </PageTitle>
               <BlogDetailsContent>
                  <ImgLoader src={image || 'https://raw.githubusercontent.com/pmfoysal/data/main/images/blog-001.jpg'} />
                  <BlogDetailsTitle>{title || 'Amazing Blog Title Goes Here...'}</BlogDetailsTitle>
                  <BlogDetailsInfo>
                     <p>
                        <span>
                           <Icon icon='fa6-solid:calendar-check' />
                           Posted on:
                        </span>
                        {new Date(date || Date.now()).toLocaleDateString(undefined, {dateStyle: 'full'})}
                     </p>
                     <p>
                        <span>
                           <Icon icon='fa:user-circle-o' />
                           Author:
                        </span>
                        @{author || 'unknown'}
                     </p>
                  </BlogDetailsInfo>
                  <BlogDetailsLine />
                  <BlogDetailsDescription ref={descRef}></BlogDetailsDescription>
               </BlogDetailsContent>
            </MainContainer>
         </BlogDetailsContainer>
      </React.Fragment>
   );
}
