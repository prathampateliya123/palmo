import { TESTIMONIALS } from "@/lib/products";

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-light-beige px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-hand text-2xl text-muted">you deserve the best</p>
        <h2 className="mt-2 font-display text-5xl font-semibold tracking-tight md:text-6xl">
          Sippers Say !
        </h2>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <li
              key={item.handle}
              className="rounded-[1.5rem] border border-foreground/8 bg-surface p-6"
            >
              <blockquote>
                <p className="font-display text-2xl font-semibold leading-snug">
                  “{item.quote}”
                </p>
                <footer className="mt-4 font-hand text-lg text-muted">
                  <cite className="not-italic">{item.handle}</cite>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
