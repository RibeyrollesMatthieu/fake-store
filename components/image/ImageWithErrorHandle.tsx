import React, { useState } from 'react';
import Image from 'next/image';

interface I_image {
  alt: string;
  src?: string;
  height?: string;
  width?: string;
}

export const ImageWithErrorHandle = ({ alt, ...props}: I_image) => {

  const [ imageSrc, setImageSrc ] = useState(props.src);

  return (
    <Image 
      {...props}
      src={imageSrc as string} 
      alt="" 
      placeholder='blur' 
      blurDataURL='/image-not-found.jpg'
      onError={() => setImageSrc('/image-not-found.jpg')} />
  )
};
