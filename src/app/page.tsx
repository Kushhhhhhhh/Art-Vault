'use client';
import { CldUploadButton, CldUploadWidgetResults } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from "react";

export default function Home() {

  const [imageId, setImageId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <CldUploadButton 
    onUpload={(result: CldUploadWidgetResults) => {
      if (result.info && typeof result.info !== 'string') {
        setImageId(result.info.public_id);
      }
    }}
    uploadPreset="my-pic"
    />
      {imageId && (
    <CldImage
      width="400"
      height="300"
      src={imageId}
      sizes="100vw"
      quality={100}
      alt="Description of my image"
      className='rounded-lg hover:shadow-xl'
    />
      )}
    </main>
  );
}