import UploadButton from "./upload-button";
import cloudinary from 'cloudinary';
import GalleryGrid from "./gallery-grid";
import { SearchForm } from "./search-form";


export type SearchResult = {
    public_id: string;
    tags: string[];
  };
  

export default async function Gallery({
  searchParams: {search},
 } : {
  searchParams: {
    search: string;
  };
}) {
  const results = (await cloudinary.v2.search
  .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
  .sort_by('public_id', 'desc')
  .max_results(10)
  .execute()) as { resources: SearchResult[]};
  
return ( 
   <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
  <div className="flex flex-col gap-8">
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold sm:font-medium mb-4 sm:mb-0">
        Gallery
      </h1>
      <UploadButton />
    </div>
    <SearchForm initialSearch={search} />
    <GalleryGrid images={results.resources} />
  </div>
</section>
    );
}