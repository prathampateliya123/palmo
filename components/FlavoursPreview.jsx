import Link from "next/link";
import { FLAVOURS } from "@/lib/products";

export default function FlavoursPreview() {
  return (
    <section
      id="flavours"
      className="scroll-mt-24 bg-background px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-hand text-2xl text-muted">Keep sipping..</p>
            <h2 className="mt-2 font-display text-5xl font-semibold tracking-tight md:text-7xl">
              Explore all flavours
            </h2>
            <p className="mt-4 max-w-lg text-muted">
              Six flavours, each one pressed with real fruit. Mango, lychee,
              guava and three more worth meeting.
            </p>
          </div>
          <Link
            href="/flavours"
            className="w-fit rounded-full border border-foreground/20 px-5 py-2 font-hand text-xl transition hover:bg-beige"
          >
            View all
          </Link>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FLAVOURS.map((flavour) => (
            <li key={flavour.id}>
              <Link
                href={`/flavours#${flavour.id}`}
                className="group block overflow-hidden rounded-[1.75rem] border border-foreground/8 p-5 transition hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: flavour.bgColor,
                  color: flavour.textColor,
                }}
              >
                <div
                  className="mb-8 flex h-36 items-end justify-center rounded-[1.25rem] transition group-hover:scale-[1.02]"
                  style={{ backgroundColor: flavour.color }}
                  aria-hidden="true"
                >
                  <span className="mb-4 font-display text-4xl font-semibold text-white/90">
                    {flavour.name.split(" ").at(-1)}
                  </span>
                </div>
                <h3 className="font-display text-3xl font-semibold tracking-tight">
                  {flavour.name}
                </h3>
                <p className="mt-2 font-hand text-lg opacity-80">
                  {flavour.tagline}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
