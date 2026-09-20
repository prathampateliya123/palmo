"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useCart } from "@/lib/cart-context";
import { FREE_SHIPPING_AT } from "@/lib/products";

export default function BasketDrawer() {
  const dialogRef = useRef(null);
  const {
    open,
    closeCart,
    lines,
    subtotal,
    shipping,
    total,
    freeShippingRemaining,
    setQty,
    remove,
    clear,
    formatPrice,
  } = useCart();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="dialog-backdrop fixed inset-y-0 right-0 m-0 h-dvh w-full max-w-md border-0 bg-surface p-0 text-foreground shadow-2xl open:flex open:flex-col md:ml-auto"
      onClose={closeCart}
      aria-labelledby="basket-title"
    >
      <div className="flex items-center justify-between border-b border-foreground/10 px-5 py-4">
        <h2 id="basket-title" className="font-display text-3xl font-semibold">
          Your basket
        </h2>
        <form method="dialog">
          <button
            type="submit"
            className="rounded-full px-3 py-1 font-hand text-lg hover:bg-beige"
          >
            Close
          </button>
        </form>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        {lines.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <p className="font-display text-4xl font-semibold">Nothing poured yet</p>
            <p className="font-hand text-xl text-muted">Your basket is thirsty.</p>
            <Link
              href="/flavours"
              onClick={closeCart}
              className="font-hand text-2xl underline underline-offset-4"
            >
              Go pick a flavour
            </Link>
          </div>
        ) : (
          <ul className="space-y-4">
            {lines.map((line) => (
              <li
                key={line.id}
                className="flex gap-3 overflow-hidden rounded-2xl border border-foreground/8 bg-background p-3"
                style={{ "--flavour": line.flavour.color }}
              >
                <div
                  className="flex h-20 w-16 shrink-0 items-center justify-center rounded-xl text-sm font-semibold text-white"
                  style={{ background: "var(--flavour)" }}
                  aria-hidden="true"
                >
                  {line.pack.cans}×
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-display text-xl font-semibold">
                    {line.flavour.name}
                  </p>
                  <p className="text-sm text-muted">{line.pack.label}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      className="h-8 w-8 rounded-full border border-foreground/15"
                      onClick={() => setQty(line.id, line.qty - 1)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="w-6 text-center tabular-nums">{line.qty}</span>
                    <button
                      type="button"
                      className="h-8 w-8 rounded-full border border-foreground/15"
                      onClick={() => setQty(line.id, line.qty + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="ml-auto text-sm text-muted underline"
                      onClick={() => remove(line.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="font-semibold tabular-nums">
                  {formatPrice(line.total)}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {lines.length > 0 ? (
        <div className="shrink-0 border-t border-foreground/10 px-5 py-5">
          <p className="mb-3 font-hand text-lg text-muted">
            {freeShippingRemaining > 0
              ? `${formatPrice(freeShippingRemaining)} away from free shipping`
              : "Free shipping unlocked"}
          </p>
          <dl className="space-y-1 text-sm">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Shipping</dt>
              <dd className="tabular-nums">
                {shipping === 0 ? "Free" : formatPrice(shipping)}
              </dd>
            </div>
            <div className="flex justify-between border-t border-foreground/10 pt-2 font-display text-2xl font-semibold">
              <dt>Total</dt>
              <dd className="tabular-nums">{formatPrice(total)}</dd>
            </div>
          </dl>
          <p className="mt-2 text-xs text-muted">
            Free shipping at {formatPrice(FREE_SHIPPING_AT)}
          </p>
          <button
            type="button"
            className="mt-4 w-full rounded-full bg-palm py-3 font-display text-xl font-semibold text-palm-gold transition hover:opacity-90"
          >
            Checkout
          </button>
          <button
            type="button"
            onClick={clear}
            className="mt-2 w-full py-2 font-hand text-lg text-muted underline"
          >
            Empty the basket
          </button>
        </div>
      ) : null}
    </dialog>
  );
}
