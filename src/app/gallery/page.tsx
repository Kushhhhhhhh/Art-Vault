import UploadButton from "./upload-button";
import cloudinary from 'cloudinary';
import GalleryGrid from "./gallery-grid";
import { SearchForm } from "./search-form";


export type SearchResult = {
    public_id: string;
    tags: string[];
  };
  

export default async function Gallery() {
  const results = await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('public_id', 'desc')
  .max_results(5)
  .execute() as { resources: SearchResult[]};
  console.log(results);

return ( 
   <section>
    <div className="flex flex-col gap-8">
     <div className="flex justify-between">
     <h1 className="text-4xl font-bold">Gallery</h1>
         <UploadButton />
    </div>

    <SearchForm initialSearch=""/>
    <GalleryGrid images={results.resources} />
    </div>
    </section>
    );
}