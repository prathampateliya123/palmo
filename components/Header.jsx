"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const NAV = [
  { label: "Flavours", href: "/flavours" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Say hello", href: "/#cta" },
];

export default function Header() {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="font-display text-3xl font-semibold tracking-[-0.04em] text-foreground transition hover:opacity-70 md:text-4xl"
        >
          Palmo
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-hand text-xl transition hover:opacity-70 ${
                  active ? "opacity-100" : "opacity-80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/story"
            className="font-hand text-xl opacity-80 transition hover:opacity-70"
          >
            Our Story
          </Link>
        </nav>

        <button
          type="button"
          onClick={openCart}
          className="relative rounded-full border border-foreground/20 bg-surface/80 px-4 py-2 font-hand text-lg backdrop-blur transition hover:bg-beige"
          aria-label={`Open basket, ${itemCount} items`}
        >
          Basket
          {itemCount > 0 ? (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-palm px-1 text-xs text-palm-gold">
              {itemCount}
            </span>
          ) : null}
        </button>
      </div>
    </header>
  );
}
