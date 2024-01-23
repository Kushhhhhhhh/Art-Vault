'use client';
import UploadButton from "./upload-button";
import { Button } from '@/components/ui/button';
import { CldUploadButton } from 'next-cloudinary';

export default function Gallery() {
    return ( 
    <section>
       <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
           <UploadButton />
        </div>
        </div>
    </section>
    );
}