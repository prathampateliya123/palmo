"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import {
  DEFAULT_PACK_ID,
  FREE_SHIPPING_AT,
  MAX_QTY,
  SHIPPING_FLAT,
  formatPrice,
  getFlavour,
  getPack,
  lineId,
  packPrice,
} from "./products";

const STORAGE_KEY = "palmo:cart:v1";
const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "hydrate":
      return action.items;
    case "add": {
      const id = lineId(action.flavourId, action.packId);
      const existing = state.find((item) => item.id === id);
      if (existing) {
        return state.map((item) =>
          item.id === id
            ? { ...item, qty: Math.min(item.qty + action.qty, MAX_QTY) }
            : item,
        );
      }
      return [
        {
          id,
          flavourId: action.flavourId,
          packId: action.packId,
          qty: Math.min(action.qty, MAX_QTY),
        },
        ...state,
      ];
    }
    case "setQty":
      if (action.qty < 1) {
        return state.filter((item) => item.id !== action.id);
      }
      return state.map((item) =>
        item.id === action.id
          ? { ...item, qty: Math.min(Math.floor(action.qty), MAX_QTY) }
          : item,
      );
    case "remove":
      return state.filter((item) => item.id !== action.id);
    case "clear":
      return [];
    default:
      return state;
  }
}

function readStoredCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (item) =>
          item &&
          getFlavour(item.flavourId) &&
          getPack(item.packId)?.id === item.packId &&
          Number.isFinite(item.qty) &&
          item.qty > 0,
      )
      .map((item) => ({
        id: lineId(item.flavourId, item.packId),
        flavourId: item.flavourId,
        packId: item.packId,
        qty: Math.min(Math.floor(item.qty), MAX_QTY),
      }));
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    dispatch({ type: "hydrate", items: readStoredCart() });
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const lines = useMemo(
    () =>
      items.map((item) => {
        const flavour = getFlavour(item.flavourId);
        const pack = getPack(item.packId);
        const unitPrice = packPrice(pack);
        return {
          ...item,
          flavour,
          pack,
          unitPrice,
          total: Math.round(unitPrice * item.qty * 100) / 100,
        };
      }),
    [items],
  );

  const subtotal = useMemo(
    () => Math.round(lines.reduce((sum, line) => sum + line.total, 0) * 100) / 100,
    [lines],
  );

  const shipping =
    subtotal === 0 || subtotal >= FREE_SHIPPING_AT ? 0 : SHIPPING_FLAT;
  const total = Math.round((subtotal + shipping) * 100) / 100;
  const itemCount = lines.reduce((sum, line) => sum + line.qty, 0);
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_AT - subtotal);

  const add = useCallback((flavourId, packId = DEFAULT_PACK_ID, qty = 1) => {
    const pack = getPack(packId);
    dispatch({
      type: "add",
      flavourId,
      packId: pack.id,
      qty,
    });
    setToast({ id: Date.now(), flavourId });
    setOpen(true);
  }, []);

  const setQty = useCallback((id, qty) => {
    dispatch({ type: "setQty", id, qty });
  }, []);

  const remove = useCallback((id) => {
    dispatch({ type: "remove", id });
  }, []);

  const clear = useCallback(() => {
    dispatch({ type: "clear" });
  }, []);

  const value = {
    lines,
    subtotal,
    shipping,
    total,
    itemCount,
    freeShippingRemaining,
    open,
    setOpen,
    openCart: () => setOpen(true),
    closeCart: () => setOpen(false),
    add,
    setQty,
    remove,
    clear,
    toast,
    clearToast: () => setToast(null),
    formatPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
