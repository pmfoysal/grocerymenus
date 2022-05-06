import ImgLoader from '@baseComp/imgLoader';
import {useNavigate} from 'react-router-dom';
import React, {useEffect, useRef} from 'react';
import {BlogCardContainer, BlogCardDetails, BlogCardPara, BlogCardTags, BlogCardTitle} from '@coreStyle/blogCard.styles';

export default function BlogCard({data}) {
   const navigate = useNavigate();
   const descRef = useRef();
   const {_id, author, date, title, body, image} = data;

   useEffect(() => {
      descRef.current.innerHTML = `
      ${body.slice(0, 140)}... <button id=${_id}>read more</button>`;
      document.getElementById(_id).addEventListener('click', () => {
         navigate(`/blog/${_id}`);
         window.scrollTo({top: 0});
      });
   }, [body, _id, navigate]);

   return (
      <BlogCardContainer>
         <ImgLoader src={image} />
         <BlogCardDetails>
            <BlogCardTags>
               <span className='date'>{new Date(date).toLocaleDateString(undefined, {dateStyle: 'full'})}</span>
               &bull;
               <span className='author'>@{author}</span>
            </BlogCardTags>
            <BlogCardTitle>{title}</BlogCardTitle>
            <BlogCardPara ref={descRef}></BlogCardPara>
         </BlogCardDetails>
      </BlogCardContainer>
   );
}
