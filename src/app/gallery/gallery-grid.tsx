"use client";

import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "./page";
import { CloudinaryImage } from "@/components/cloudinary-image";

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imagedata: SearchResult) => {
        return (
          <CloudinaryImage
            key={imagedata.public_id}
            imagedata={imagedata}
            width="400"
            height="300"
            alt="my image"
          />
        );
      }}
    />
  );
}