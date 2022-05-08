import useBlog from '@hook/useBlog';
import {Icon} from '@iconify/react';
import SetTitle from '@helper/setTitle';
import {useParams} from 'react-router-dom';
import PageTitle from '@coreComp/pageTitle';
import ImgLoader from '@baseComp/imgLoader';
import PageLoader from '@baseComp/pageLoader';
import React, {useEffect, useRef} from 'react';
import MainContainer from '@coreComp/mainContainer';
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
   const {blog} = useBlog(blogId);
   const {author, date, title, image, body} = blog;

   useEffect(() => {
      descRef.current.innerHTML = body || 'Amazing blog description goes here...';
   }, [body]);

   return (
      <React.Fragment>
         <SetTitle title={'Blogs - ' + (title || 'Amazing Blog Title Goes Here...')} />
         <BlogDetailsContainer>
            <MainContainer>
               <BlogDetailsContent>
                  <PageTitle>
                     blog <span>details!</span>
                  </PageTitle>
                  {!blog._id && <PageLoader />}
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
