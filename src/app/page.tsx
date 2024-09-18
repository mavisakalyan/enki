import Image from "next/image";
import logo from './enki.svg';

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{ backgroundImage: 'url(/main.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center w-full">
        <Image
          className="dark:invert inline-block m-auto"
          src={logo}
          alt="Enki Construction"
          width={100}
          height={38}
          priority
        />
        <h1 className="w-full text-3xl sm:text-4xl font-bold">Կառուցապատող Ընկերություն</h1>

        <div className="w-full max-w-4xl text-center mx-auto text-lg mt-4">
          <p className="mb-4"><strong>ENKI CONSTRUCTION</strong> ընկերությունը հիմնադրվել է 2019թ.</p>
          <p className="mb-4">Հիմնական առաքելությունն է ստեղծել տարածքներ, որոնք ոչ միայն գեղեցիկ են, այլ ֆունկցիոնալ: Մենք գաղափարներն իրականացնում ենք տալով նրանց անհատական ​​ոճ և յուրահատկություն։</p>
          <p className="mb-4">▪Մեզ համար շատ կարևոր է պահպանել և հարգել շրջակա միջավայրը, հետևաբար մենք ձգտում ենք օգտագործել էկոլոգիապես մաքուր նյութեր և տեխնոլոգիաներ՝ մեր ներդրումն ունենալու ապագա սերունդների բնության պահպանման գործում:</p>
          <p className="mb-4">▪Մենք նաև գնահատում ենք մեր աշխատակիցներին և գործընկերներին, յուրաքանչյուր մարդու, ով նպաստում է մեր աշխատանքին և օգնում մեզ իրականացնել մեր նախագծերը: Փոխըմբռնման, հարգանքի, ազնվության և որակի շնորհիվ մենք ստեղծում ենք ապահով և հաջողակ ապագա բոլորիս համար:</p>
        </div>

        <h1 className="w-full text-3xl sm:text-4xl font-bold mt-16 uppercase">Աշխատանքներ</h1>

        <div className="w-full">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {[
              { src: "/JellyFish.png", alt: "Photo by Minh Pham", label: "JellyFish" },
              { src: "/Digitain.png", alt: "Photo by Magicle", label: "Digitain", span: "md:col-span-2" },
              { src: "/Forrest.png", alt: "Photo by Martin Sanchez", label: "Forrest Residence", span: "md:col-span-2" },
              { src: "/FoodPark.png", alt: "Photo by Lorenzo Herrera", label: "Food Park" },
              { src: "/House.jpg", alt: "Photo by Minh Pham", label: "House" },
              { src: "/Cartez.png", alt: "Photo by Magicle", label: "Cartez", span: "md:col-span-2" },
            ].map(({ src, alt, label, span }, index) => (
              <a
                key={index}
                href="#"
                className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${span || ""}`}
              >
                <img
                  src={src}
                  loading="lazy"
                  alt={alt}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{label}</span>
              </a>
            ))}
          </div>
        </div>

        <h1 className="w-full text-3xl sm:text-4xl font-bold mt-16 uppercase">Ծառայություններ</h1>

        <ul className="w-full max-w-4xl text-left mx-auto mt-4">
          {[
            "Հողային աշխատանքներ",
            "Բետոնային աշխատանքներ",
            "Ներքին և արտաքին հարդարման աշխատանքներ",
            "Բարեկարգման աշխատանքներ",
            "Հիդրոտեխնիկական ծառայություններ",
            "Նախագծման աշխատանքներ"
          ].map((service, index) => (
            <li key={index} className="mb-2 text-lg text-center font-bold">{service}</li>
          ))}
        </ul>

        <h1 className="w-full text-3xl sm:text-4xl font-bold mt-20">Հետադարձ Կապ:</h1>
        <p className="text-center w-full">
          Հեռախոս: +374 44 888109 <br />
          <a href="mailto:info@enki.construction" className="underline">Էլ-հասցե: info@enki.construction</a>
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {[
          { href: "https://www.facebook.com/profile.php?id=61557064264432", label: "Facebook →" },
          { href: "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", label: "Instagram →" },
        ].map(({ href, label }, index) => (
          <a
            key={index}
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={href}
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
            {label}
          </a>
        ))}
      </footer>
    </div>
  );
}
