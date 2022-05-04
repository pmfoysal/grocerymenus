import React from 'react';
import {Icon} from '@iconify/react';
import PageTitle from '@coreComp/pageTitle';
import MainContainer from '@coreComp/mainContainer';
import {
   AboutCard,
   AboutCardIcon,
   AboutCardIcons,
   AboutCardImage,
   AboutCardLeft,
   AboutCardName,
   AboutCardPara,
   AboutCardRole,
   AboutContainer,
} from '@pageStyle/about.styles';

export default function About() {
   return (
      <AboutContainer>
         <MainContainer>
            <PageTitle>
               about <span>me</span>
            </PageTitle>
            <AboutCard>
               <AboutCardLeft>
                  <AboutCardImage src='https://avatars.githubusercontent.com/u/79983010?v=4' alt='site-author' />
                  <AboutCardName>foysal ahmmed</AboutCardName>
                  <AboutCardRole>react developer</AboutCardRole>
                  <AboutCardIcons>
                     <AboutCardIcon href='https://facebook.com/pmfoysalz' target='_blank'>
                        <Icon icon='cib:facebook-f' />
                     </AboutCardIcon>
                     <AboutCardIcon href='https://linkedin.com/in/pmfoysal' target='_blank'>
                        <Icon icon='cib:linkedin-in' />
                     </AboutCardIcon>
                     <AboutCardIcon href='https://instagram.com/pmfoysal' target='_blank'>
                        <Icon icon='cib:instagram' />
                     </AboutCardIcon>
                     <AboutCardIcon href='https://twitter.com/pmfoysal' target='_blank'>
                        <Icon icon='cib:twitter' />
                     </AboutCardIcon>
                     <AboutCardIcon href='https://github.com/pmfoysal' target='_blank'>
                        <Icon icon='cib:github' />
                     </AboutCardIcon>
                  </AboutCardIcons>
               </AboutCardLeft>
               <AboutCardPara>
                  <span className='title'>about me</span>
                  <br />
                  Hi, I am <span className='name'>Foysal Ahmmed</span>, a Bengali based Web Developer & Designer. Currently I am
                  focusing on Full Stack & MERN Stack Development. I have completed 12 years of education based on Science
                  Depertment. Last 1.5 years I have learned many Languages, Tools & Technologies like HTML, CSS, JavaScript,
                  ReactJS, NodeJS, ExpressJS, MongoDB, GitHub, Netlify, Yarn, NPM, Visual Studio Code etc. I have completed 55+
                  projects with the help of these Technologies. I have 1.5+ years of Coding Experience with Bug Fixing. I have few
                  knowledge about Java, Android Studio, NextJS, ReduxJS. I am an experienced Web Development Specialist with a
                  demonstrated history of working in the Computer Software Industry!
               </AboutCardPara>
            </AboutCard>
         </MainContainer>
      </AboutContainer>
   );
}
