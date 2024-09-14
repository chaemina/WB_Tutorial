import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex flex-col items-center justify-center w-full p-10 bg-lime-600">
        <p className="text-white font-bold text-[30px]">Waste Bank APP</p>
      </header>
      <div className="grid grid-rows-[auto_auto_auto] items-start justify-center font-[family-name:var(--font-geist-sans)] gap-8 p-10"> 
      <main className="gap-4 flex flex-col row-start-1 items-center sm:items-start">
          <p className="font-bold text-lime-600 text-[25px]">Application Download</p>
          <p className="text-[17px]">Anda dapat menginstal file apk aplikasi.</p>
          <div className="w-full items-center justify-center flex flex-col">
          <div className="bg-lime-600 p-4 rounded-xl text-white">
          <a href="/WasteBankApp.zip" download>
            Download Application
            </a>
          </div>
          </div>
        </main>
         <main className="gap-4 flex flex-col row-start-2 items-center sm:items-start">
          <p className="font-bold text-lime-600 text-[25px]">Tutorial Video</p>
          <p className="text-[17px]">Bagaimana saya bisa menggunakan aplikasi ini?</p>
          <div className="w-full flex items-center justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ffF9OGOU7h4" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            </div>
        </main>
       
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            chaemina82@naver.com
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          From Team Holssi
        </footer>
      </div>
    </>
  );
}
