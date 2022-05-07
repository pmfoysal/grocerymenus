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
   const [email, setEmail] = useState('');
   const [address, setAddress] = useState('');
   const [subject, setSubject] = useState('');
   const [message, setMessage] = useState('');

   function inputHandler(setter) {
      return event => {
         setter(event.target.value);
      };
   }

   function resetData() {
      setName('');
      setEmail('');
      setAddress('');
      setSubject('');
      setMessage('');
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
                           <InputBox name='your name' type='text' handler={inputHandler(setName)} value={name} />
                           <InputBox name='your email' type='email' handler={inputHandler(setEmail)} value={email} />
                        </ContactFormInputGroup>
                        <InputBox name='your address' type='text' handler={inputHandler(setAddress)} value={address} />
                        <InputBox name='your subject' type='text' handler={inputHandler(setSubject)} value={subject} />
                        <MessageBox name='your message' handler={inputHandler(setMessage)} value={message} />
                        <ContactFormButtons>
                           <ContactFormButton onClick={resetData} reset>
                              reset
                           </ContactFormButton>
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
