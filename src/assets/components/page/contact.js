import React, {useState} from 'react';
import SetTitle from '@helper/setTitle';
import InputBox from '@coreComp/inputBox';
import contactData from '@data/contactData';
import PageTitle from '@coreComp/pageTitle';
import MessageBox from '@coreComp/messageBox';
import ContactCard from '@coreComp/contactCard';
import MainContainer from '@coreComp/mainContainer';
import {
   ContactContainer,
   ContactContent,
   ContactForm,
   ContactFormButton,
   ContactFormButtons,
   ContactFormInputGroup,
   ContactPara,
   ContactTouchArea,
   ContactTouchCards,
   ContactTouchTitle,
} from '@pageStyle/contact.styles';

export default function Contact() {
   const [name, setName] = useState('');

   function inputHandler(setter) {
      return event => {
         const value = event.target.value;
         event.target.setAttribute('data-text', Boolean(value));
         setter(value);
      };
   }

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
                  <ContactTouchArea>
                     <ContactTouchTitle>give your feedback</ContactTouchTitle>
                     <ContactPara>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur qui quidem perspiciatis nisi
                        maiores error cumque dolor repellat quasi.
                     </ContactPara>
                     <ContactForm>
                        <ContactFormInputGroup>
                           <InputBox name='your name' type='text' handler={inputHandler(setName)} />
                           <InputBox name='your email' type='email' handler={inputHandler(setName)} />
                        </ContactFormInputGroup>
                        <InputBox name='your address' type='text' handler={inputHandler(setName)} />
                        <InputBox name='your subject' type='text' handler={inputHandler(setName)} />
                        <MessageBox name='your message' handler={inputHandler(setName)} />
                        <ContactFormButtons>
                           <ContactFormButton reset>reset</ContactFormButton>
                           <ContactFormButton>send</ContactFormButton>
                        </ContactFormButtons>
                     </ContactForm>
                  </ContactTouchArea>
               </ContactContent>
            </MainContainer>
         </ContactContainer>
      </React.Fragment>
   );
}
