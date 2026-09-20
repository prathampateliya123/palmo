import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-wash relative min-h-dvh overflow-hidden pt-24">
      <div className="texture-dots pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid min-h-[calc(100dvh-6rem)] max-w-7xl items-end gap-8 px-5 pb-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-8 md:pb-16">
        <div className="animate-rise z-10 max-w-xl">
          <p className="font-hand text-2xl text-muted md:text-3xl">
            Paradise in every sip.
          </p>
          <h1 className="mt-3 font-display text-[clamp(4.5rem,14vw,9rem)] font-semibold leading-[0.85] tracking-[-0.06em] text-foreground">
            Palmo
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Cold-pressed, raw organic coconut water with zero added sugar and
            essential natural electrolytes.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/flavours"
              className="rounded-full bg-palm px-6 py-3 font-display text-lg font-semibold text-palm-gold transition hover:opacity-90"
            >
              Explore flavours
            </Link>
            <Link
              href="/#benefits"
              className="rounded-full border border-foreground/20 bg-surface/70 px-6 py-3 font-hand text-xl backdrop-blur transition hover:bg-beige"
            >
              See benefits
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-hand text-lg text-muted">
            <li>Rich in electrolytes</li>
            <li>No added sugar</li>
            <li>100% raw</li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-rise md:max-w-none">
          <div className="absolute -inset-6 rounded-[40%] bg-palm-gold/25 blur-3xl" />
          <div className="animate-float relative overflow-hidden rounded-[2rem] border border-foreground/5 shadow-[0_30px_80px_rgba(68,55,30,0.18)]">
            <Image
              src="/img/coconut-holding.webp"
              alt="Hands holding a fresh green coconut"
              width={900}
              height={1100}
              priority
              fetchPriority="high"
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 90vw, 42vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
