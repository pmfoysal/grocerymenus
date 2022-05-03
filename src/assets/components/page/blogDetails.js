import {Icon} from '@iconify/react';
import SetTitle from '@helper/setTitle';
import PageTitle from '@coreComp/pageTitle';
import ImgLoader from '@baseComp/imgLoader';
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

   const data = {
      _id: 1,
      author: 'pmfoysal',
      date: Date.now(),
      title: 'When should you use NodeJS and when should you use MongoDB?',
      para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas dolor nemo architecto? Impedit, sapiente molestiae. Dignissimos, repudiandae similique. Dolorem exercitationem adipisci quibusdam quod et perferendis itaque ratione eos praesentium atque necessitatibus ea similique, corrupti eveniet dolores tempore quia beatae facere voluptatibus expedita ab laboriosam hic illum? Laborum nihil eveniet culpa quas, eaque minima? Sit magnam illo animi hic enim quo voluptate iste aut et nemo cum, laboriosam nesciunt voluptatibus accusamus. Id porro quo ab, eos nesciunt sit ratione? Tenetur officiis consequatur veniam impedit nihil mollitia, voluptatem aliquam, fuga perferendis at dicta saepe blanditiis commodi, molestias numquam omnis possimus quo iure!',
      image: 'https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
      text: 'ami ami ami <h1>ami</h1> ami <br/> ami &bull; ami ami ami',
   };

   const {author, date, title, image, text} = data;

   useEffect(() => {
      descRef.current.innerHTML = text;
   }, [text]);

   return (
      <React.Fragment>
         <SetTitle title={'Blogs - ' + title} />
         <BlogDetailsContainer>
            <MainContainer>
               <PageTitle>
                  blog <span>details!</span>
               </PageTitle>
               <BlogDetailsContent>
                  <ImgLoader src={image} />
                  <BlogDetailsTitle>{title}</BlogDetailsTitle>
                  <BlogDetailsInfo>
                     <p>
                        <span>
                           <Icon icon='fa6-solid:calendar-check' />
                           Posted on:
                        </span>
                        {new Date(date).toLocaleDateString(undefined, {dateStyle: 'full'})}
                     </p>
                     <p>
                        <span>
                           <Icon icon='fa:user-circle-o' />
                           Author:
                        </span>
                        @{author}
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
