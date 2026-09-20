import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-palm text-palm-gold">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
            palmo
          </p>
          <p className="mt-3 max-w-sm font-hand text-xl text-palm-gold/80">
            Cold pressed, never concentrated. Picked ripe, sipped cold.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-palm-gold/60">
            Explore
          </p>
          <ul className="space-y-2 font-hand text-xl">
            <li>
              <Link href="/story" className="hover:opacity-70">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/flavours" className="hover:opacity-70">
                Flavours
              </Link>
            </li>
            <li>
              <Link href="/#benefits" className="hover:opacity-70">
                Benefits
              </Link>
            </li>
            <li>
              <a
                href="mailto:contact@vasavprajapati.com"
                className="hover:opacity-70"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-palm-gold/60">
            Sip from
          </p>
          <p className="font-hand text-xl text-palm-gold/80">made under the sun</p>
          <p className="mt-8 text-sm text-palm-gold/50">
            palmo. all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
