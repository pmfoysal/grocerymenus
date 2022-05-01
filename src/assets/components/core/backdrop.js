import React from 'react';
import {BackdropContainer} from '@coreStyle/backdrop.styles';

export default function Backdrop({children}) {
   return <BackdropContainer>{children}</BackdropContainer>;
}
