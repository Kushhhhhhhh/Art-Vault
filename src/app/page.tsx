/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
  <section className="text-gray-400 body-font">
    <div className="container mx-auto flex flex-col">
      <div className="lg:w-4/6 mx-auto">
        <div className="rounded-lg h-72 overflow-hidden mt-4 md:mt-0">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src="/banner.jpg"
            width={1200}
            height={500}
          />
        </div>

        <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img 
            src='/my-logo.jpg' 
            alt='my-logo' 
            width={24} 
            height={24} 
            loading='lazy'
            className='w-full h-full rounded-[50%]'/>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-200 text-lg">Kush Sharma</h2>
            <h2 className="font-small title-font text-gray-300 text-md">~ Full Stack Developer ~</h2>
            <div className="w-12 h-1 rounded mt-2 mb-4"></div>
            <p className="leading-relaxed">The art of programming is the skill of controlling complexity</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-2xl mb-4 text-center">Welcome to <span className='leading-relaxed font-bold'>Art Vault</span>
          <br />
           ~ Your Personal Gallery of Inspiration ~
           </p>
           <p className='leading-relaxed'>
Art Vault is not just a Pinterest clone, it`s a sanctuary for art enthusiasts, creators, and collectors alike. Dive into a world where creativity knows no bounds, and every image is a masterpiece waiting to be discovered.</p>
          <br />
          <Link href='/gallery' className="text-indigo-700 text-xl flex justify-center items-center cursor-pointer mb-4">Dive in
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg></Link>
          
        </div>
      </div>
    </div>
    </div>
  </section>
</main>

  );
}