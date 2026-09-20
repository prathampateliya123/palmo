import Image from "next/image";

const STATS = [
  { value: "520mg", label: "Of Potassium" },
  { value: "Natural", label: "Hydration" },
  { value: "0g", label: "Of Sugar" },
  { value: "200ml", label: "Per Can" },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative scroll-mt-24 overflow-hidden bg-foreground text-background"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28">
        <div>
          <p className="font-hand text-2xl text-beige/80">The real source</p>
          <h2 className="mt-2 font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            of every sip.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-beige/75 md:text-lg">
            For centuries, coconuts have carried their own perfectly balanced
            source of refreshment. One green coconut, opened and pressed within
            a day of harvest. 100% raw, with 500mg of potassium.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-semibold text-palm-gold md:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 font-hand text-lg text-beige/70">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="relative overflow-hidden rounded-[2rem]">
          <Image
            src="/img/bunch-of-coconut.webp"
            alt="A bunch of fresh coconuts"
            width={1000}
            height={1200}
            loading="lazy"
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
          <figcaption className="absolute bottom-4 left-4 rounded-full bg-background/90 px-4 py-2 font-hand text-lg text-foreground backdrop-blur">
            Whole coconut
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
