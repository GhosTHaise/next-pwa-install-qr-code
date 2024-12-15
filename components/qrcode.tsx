import React from 'react';
import { useQRCode } from 'next-qrcode';

function Qr() {
  const { Image } = useQRCode();

  return (
   <div className='rounded-lg overflow-hidden'>
     <Image
      text={'https://next-pwa-qrcode.netlify.app'}
      options={{
        type: 'image/jpeg',
        quality: 0.3,
        errorCorrectionLevel: 'M',
        margin: 3,
        scale: 4,
        width: 200,
        color: {
          dark: '#000',
          light: '#FFF',
        },
      }}
    />
   </div>
  );
}

export default Qr;