import ImgLoader from './imgLoader';
import {Icon} from '@iconify/react';
import React, {useState} from 'react';
import image1 from '@image/banner-001.jpg';
import image2 from '@image/banner-002.jpg';
import image3 from '@image/banner-003.jpg';
import image4 from '@image/banner-004.jpg';
import image5 from '@image/banner-005.jpg';
import image6 from '@image/banner-006.jpg';
import image7 from '@image/banner-007.jpg';
import {useNavigate} from 'react-router-dom';
import MainContainer from '@coreComp/mainContainer';
import {
   BannerButton,
   BannerContent,
   BannerHead,
   BannerPara,
   BannerSlide,
   HomeBannerContainer,
   SliderButton,
} from '@baseStyle/homeBanner.styles';

export default function HomeBanner() {
   const navigate = useNavigate();
   const [active, setActive] = useState(0);
   const images = [image1, image2, image3, image4, image5, image6, image7];

   function clickHandler() {
      navigate('/inventories');
   }

   function prevHandler() {
      if (active > 0) setActive(active - 1);
      else setActive(images.length - 1);
   }

   function nextHandler() {
      if (active < images.length - 1) setActive(active + 1);
      else setActive(0);
   }

   return (
      <HomeBannerContainer>
         <BannerSlide>
            <ImgLoader src={images[active]} />
            <MainContainer>
               <SliderButton onClick={prevHandler}>
                  <Icon icon='akar-icons:chevron-left' />
               </SliderButton>
               <SliderButton onClick={nextHandler} right>
                  <Icon icon='akar-icons:chevron-right' />
               </SliderButton>
               <BannerContent>
                  <BannerPara>100% Healthy and Affordable</BannerPara>
                  <BannerHead>
                     Modern Grocery <span>Management</span> Application!
                  </BannerHead>
                  <BannerPara>Natural Health Care Ingredients</BannerPara>
                  <BannerButton onClick={clickHandler}>manage now</BannerButton>
               </BannerContent>
            </MainContainer>
         </BannerSlide>
      </HomeBannerContainer>
   );
}
