import Image from "next/image";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
    <section className="text-gray-400 body-font sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="sm:pr-8 sm:py-8 flex flex-col items-center">
        <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-4">
          <Image
            src="/my-logo.jpg"
            alt="my-logo"
            width={24}
            height={24}
            loading="lazy"
            className="w-full h-full rounded-[50%]"
          />
        </div>
        <div className="flex flex-col items-center text-center justify-center">
          <h2 className="font-medium title-font text-gray-200 text-lg md:text-xl lg:text-2xl">
            Kush Sharma
          </h2>
          <h2 className="font-small title-font text-gray-300 text-md lg:text-lg">
            ~ Full Stack Developer ~
          </h2>
          <div className="w-12 h-1 rounded mt-2 mb-4"></div>
          <p className="leading-relaxed">
            The art of programming is the skill of controlling complexity
          </p>
        </div>
      </div>
    </section>
  </main>
  


  );
}