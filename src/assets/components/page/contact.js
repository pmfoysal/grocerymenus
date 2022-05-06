import React from 'react';
import PageTitle from '@coreComp/pageTitle';
import MainContainer from '@coreComp/mainContainer';
import {
   ContactContainer,
   ContactContent,
   ContactFormArea,
   ContactPara,
   ContactTouchArea,
   ContactTouchCards,
   ContactTouchTitle,
} from '@pageStyle/contact.styles';
import SetTitle from '@helper/setTitle';
import ContactCard from '@coreComp/contactCard';

export default function Contact() {
   return (
      <React.Fragment>
         <SetTitle title='Contact - Share What You Think!' />
         <ContactContainer>
            <MainContainer>
               <PageTitle>
                  contact <span>us</span>
               </PageTitle>
               <ContactContent>
                  <ContactTouchArea>
                     <ContactTouchTitle>get in touch</ContactTouchTitle>
                     <ContactPara>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur qui quidem perspiciatis nisi
                        maiores error cumque dolor repellat quasi.
                     </ContactPara>
                     <ContactTouchCards>
                        <ContactCard />
                        <ContactCard />
                     </ContactTouchCards>
                  </ContactTouchArea>
                  <ContactFormArea></ContactFormArea>
               </ContactContent>
            </MainContainer>
         </ContactContainer>
      </React.Fragment>
   );
}
