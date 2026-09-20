import Image from "next/image";
import Link from "next/link";

export default function Cta() {
  return (
    <section
      id="cta"
      className="scroll-mt-24 relative overflow-hidden bg-palm px-5 py-20 text-palm-gold md:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div>
          <p className="font-hand text-2xl text-palm-gold/70">
            straight from the shell
          </p>
          <h2 className="mt-2 font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            THE BOX OF HEALTH.
          </h2>
          <p className="mt-5 max-w-md text-base text-palm-gold/75 md:text-lg">
            Chilled, clean, ready to sip. Order before the batch runs dry.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/flavours"
              className="rounded-full bg-palm-gold px-6 py-3 font-display text-lg font-semibold text-palm transition hover:opacity-90"
            >
              Get your drink
            </Link>
            <a
              href="mailto:contact@vasavprajapati.com"
              className="rounded-full border border-palm-gold/40 px-6 py-3 font-hand text-xl transition hover:bg-palm-gold/10"
            >
              Say hello
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem]">
          <Image
            src="/img/good-coconut.webp"
            alt="Fresh coconut ready to drink"
            width={900}
            height={900}
            loading="lazy"
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
