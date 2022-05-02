import React, {useState} from 'react';
import {ImgLoaderContainer} from '@baseStyle/imgLoader.styles';
import {SyncLoader} from 'react-spinners';
import {useTheme} from 'styled-components';

export default function ImgLoader({src}) {
   const [loading, setLoading] = useState(true);
   const theme = useTheme();

   function loadHandler() {
      setLoading(false);
   }

   return (
      <React.Fragment>
         <ImgLoaderContainer>
            <img src={src} alt='product-overview' onLoad={loadHandler} />
            {loading && <SyncLoader color={theme.back.accent} size='17' margin='5' speedMultiplier={1.5} />}
         </ImgLoaderContainer>
      </React.Fragment>
   );
}
