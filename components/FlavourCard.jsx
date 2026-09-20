import PackPicker from "@/components/PackPicker";

export default function FlavourCard({ flavour }) {
  return (
    <article
      id={flavour.id}
      className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-foreground/8"
      style={{ backgroundColor: flavour.bgColor, color: flavour.textColor }}
    >
      <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
        <div
          className="flex min-h-56 items-end justify-center p-8 md:min-h-full"
          style={{ backgroundColor: flavour.color }}
          aria-hidden="true"
        >
          <span className="font-display text-5xl font-semibold text-white/90 md:text-6xl">
            {flavour.name}
          </span>
        </div>

        <div className="space-y-5 p-6 md:p-8">
          <div>
            <p className="font-hand text-xl opacity-80">{flavour.tagline}</p>
            <h2 className="mt-1 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {flavour.fullName}
            </h2>
            <p className="mt-3 max-w-prose leading-relaxed opacity-85">
              {flavour.description}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
            <div>
              <dt className="opacity-60">Potassium</dt>
              <dd className="font-display text-xl font-semibold">
                {flavour.potassium}
              </dd>
            </div>
            <div>
              <dt className="opacity-60">Calories</dt>
              <dd className="font-display text-xl font-semibold">
                {flavour.calories}
              </dd>
            </div>
            <div>
              <dt className="opacity-60">Sugar</dt>
              <dd className="font-display text-xl font-semibold">
                {flavour.sugar}
              </dd>
            </div>
            <div>
              <dt className="opacity-60">Hydration</dt>
              <dd className="font-display text-xl font-semibold">
                {flavour.hydration}
              </dd>
            </div>
            <div>
              <dt className="opacity-60">Vitamin C</dt>
              <dd className="font-display text-xl font-semibold">
                {flavour.vitC}
              </dd>
            </div>
          </dl>

          <PackPicker flavour={flavour} />
        </div>
      </div>
    </article>
  );
}
