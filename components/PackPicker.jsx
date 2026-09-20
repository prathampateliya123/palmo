"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import {
  DEFAULT_PACK_ID,
  PACKS,
  formatPrice,
  packPrice,
} from "@/lib/products";

export default function PackPicker({ flavour }) {
  const { add } = useCart();
  const [packId, setPackId] = useState(DEFAULT_PACK_ID);
  const selected = PACKS.find((pack) => pack.id === packId) ?? PACKS[1];

  return (
    <div className="space-y-4">
      <p className="font-hand text-xl text-muted">Pick a pack</p>
      <div className="grid gap-2 sm:grid-cols-3">
        {PACKS.map((pack) => {
          const active = pack.id === selected.id;
          return (
            <button
              key={pack.id}
              type="button"
              onClick={() => setPackId(pack.id)}
              className={`rounded-2xl border px-3 py-3 text-left transition ${
                active
                  ? "border-palm bg-palm text-palm-gold"
                  : "border-foreground/15 bg-surface hover:border-foreground/30"
              }`}
            >
              <span className="block font-display text-xl font-semibold">
                {pack.label}
              </span>
              <span
                className={`mt-1 block text-sm ${
                  active ? "text-palm-gold/80" : "text-muted"
                }`}
              >
                {pack.note}
              </span>
              <span className="mt-2 block tabular-nums">
                {formatPrice(packPrice(pack))}
              </span>
            </button>
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => add(flavour.id, selected.id)}
        className="w-full rounded-full py-3 font-display text-xl font-semibold text-white transition hover:opacity-90"
        style={{ backgroundColor: flavour.color }}
      >
        Add to basket · {formatPrice(packPrice(selected))}
      </button>
    </div>
  );
}
