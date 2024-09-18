import Image from "next/image";
import logo from './enki.svg';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center">
        <Image
          className="dark:invert inline-block m-auto"
          src={logo}
          alt="Next.js logo"
          width={100}
          height={38}
          priority
        />
        <h1 className="text-3xl font-bold">Կառուցապատող Ընկերություն</h1>
        <p className="text-center w-full">
          Հեռախոս: +374 44 888109 <br />
          <a href="mailto:info@enki.construction" className="underline">Էլ-հասցե: info@enki.construction</a>
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.facebook.com/profile.php?id=61557064264432"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Facebook →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Instagram →
        </a>
      </footer>
    </div>
  );
}
