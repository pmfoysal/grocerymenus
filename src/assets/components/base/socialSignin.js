import React from 'react';
import SocialIcon from '@coreComp/socialIcon';
import {SocialSigninContainer} from '@baseStyle/socialSignin.styles';
import googleSignin from '@auth/googleSignin';

export default function SocialSignin() {
   function googleHandler() {
      googleSignin();
   }

   function microsoftHandler() {
      return false;
   }

   function facebookHandler() {
      return false;
   }

   function githubHandler() {
      return false;
   }

   return (
      <SocialSigninContainer>
         <SocialIcon icon='cib:google' handler={googleHandler} />
         <SocialIcon icon='cib:microsoft' handler={microsoftHandler} />
         <SocialIcon icon='cib:facebook-f' handler={facebookHandler} />
         <SocialIcon icon='cib:github' handler={githubHandler} />
      </SocialSigninContainer>
   );
}
