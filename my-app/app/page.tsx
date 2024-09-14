import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex flex-col items-center justify-center w-full p-10 bg-lime-600">
        <p className="text-white font-bold text-[30px]">Waste Bank APP</p>
      </header>
      <div className="grid grid-rows-[auto_auto_auto] items-start justify-center font-[family-name:var(--font-geist-sans)] gap-8 p-10"> 
      <main className="gap-4 flex flex-col row-start-1 items-center  justify-center">
          <p className="font-bold text-lime-600 text-[25px] md:text-[30px] ">Application Download</p>
          <p className="text-[17px]">Anda dapat menginstal file apk aplikasi.</p>
          <div className="w-full items-center justify-center flex flex-col">
          <div className="bg-lime-600 p-4 rounded-xl text-white md:text-[30px]">
          <a href="/WasteBankApp.zip" download>
            Download
            </a>
          </div>
          </div>
        </main>
         <main className="gap-4 flex flex-col row-start-2 items-center  justify-center">
          <p className="font-bold text-lime-600 text-[25px] md:text-[30px]">Tutorial Video</p>
          <p className="text-[17px]">Bagaimana saya bisa menggunakan aplikasi ini?</p>
          <div className="w-full md:w-[700px] flex items-center justify-center">
            <iframe
              width="90%"
              height="300px"
              src="https://www.youtube.com/embed/ffF9OGOU7h4" 
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            </div>
        </main>
       
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          From Holssi of KIV
        
        </footer>
      </div>
    </>
  );
}
