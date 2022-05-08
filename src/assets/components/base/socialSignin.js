import React from 'react';
import SocialIcon from '@coreComp/socialIcon';
import githubSignin from '@auth/githubSignin';
import googleSignin from '@auth/googleSignin';
import facebookSignin from '@auth/facebookSignin';
import microsoftSignin from '@auth/microsoftSignin';
import {SocialSigninContainer} from '@baseStyle/socialSignin.styles';

export default function SocialSignin() {
   function googleHandler() {
      googleSignin();
   }

   function microsoftHandler() {
      microsoftSignin();
   }

   function facebookHandler() {
      facebookSignin();
   }

   function githubHandler() {
      githubSignin();
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
