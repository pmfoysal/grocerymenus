import React from 'react';
import SetTitle from '@helper/setTitle';
import contactData from '@data/contactData';
import PageTitle from '@coreComp/pageTitle';
import ContactCard from '@coreComp/contactCard';
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
                        {contactData.map(data => (
                           <ContactCard data={data} key={data.id} />
                        ))}
                     </ContactTouchCards>
                  </ContactTouchArea>
                  <ContactFormArea></ContactFormArea>
               </ContactContent>
            </MainContainer>
         </ContactContainer>
      </React.Fragment>
   );
}
