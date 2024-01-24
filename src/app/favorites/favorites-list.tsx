"use client";

import { useEffect, useState } from "react";
import { SearchResult } from "../gallery/page";
import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "@/components/cloudinary-image";

export default function FavoritesList({
  initialResources,
}: {
  initialResources: SearchResult[];
}) {
  const [resources, setResources] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <ImageGrid
      images={resources}
      getImage={(imagedata: SearchResult) => {
        return (
          <CloudinaryImage
            key={imagedata.public_id}
            imagedata={imagedata}
            width="400"
            height="300"
            alt="an image of something"
            onUnheart={(unheartedResource) => {
              setResources((currentResources) =>
                currentResources.filter(
                  (resource) =>
                    resource.public_id !== unheartedResource.public_id
                )
              );
            }}
          />
        );
      }}
    />
  );
}