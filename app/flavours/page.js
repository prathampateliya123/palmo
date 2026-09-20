import BasketDrawer from "@/components/BasketDrawer";
import FlavourCard from "@/components/FlavourCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FLAVOURS } from "@/lib/products";

export const metadata = {
  title: "Flavours",
  description:
    "Six Palmo flavours — natural pure coconut water and fruit infusions with zero added sugar.",
};

export default function FlavoursPage() {
  return (
    <>
      <Header />
      <main className="px-5 pb-20 pt-28 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="font-hand text-2xl text-muted">Pure coconut water</p>
          <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight md:text-7xl">
            Naturally hydrating, refreshingly ours.
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            thats why people love to drink it ! Each can is cold-pressed and
            infused with real organic fruit.
          </p>

          <div className="mt-12 space-y-8">
            {FLAVOURS.map((flavour) => (
              <FlavourCard key={flavour.id} flavour={flavour} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <BasketDrawer />
    </>
  );
}
