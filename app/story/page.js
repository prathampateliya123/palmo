import Image from "next/image";
import BasketDrawer from "@/components/BasketDrawer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Our Story",
  description:
    "Cold pressed, never concentrated. The story behind Palmo Coconut Co.",
};

export default function StoryPage() {
  return (
    <>
      <Header />
      <main className="px-5 pb-20 pt-28 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-hand text-2xl text-muted">Our Story</p>
            <h1 className="mt-2 font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
              Cold pressed, never concentrated.
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Palmo began with a simple idea: open a coconut the day it is
                harvested, press it cold, and leave everything else out.
              </p>
              <p>
                No concentrates. No added sugar. Just raw coconut water with
                natural electrolytes — and, when we feel playful, real organic
                fruit folded in.
              </p>
              <p>
                Picked ripe, sipped cold. Made under the sun for people who want
                hydration that still tastes like paradise.
              </p>
            </div>
          </div>

          <figure className="overflow-hidden rounded-[2rem]">
            <Image
              src="/img/good-coconut.webp"
              alt="A coconut opened under the sun"
              width={1000}
              height={1200}
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </figure>
        </div>
      </main>
      <Footer />
      <BasketDrawer />
    </>
  );
}
