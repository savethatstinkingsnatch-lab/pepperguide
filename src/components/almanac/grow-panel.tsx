import { Bug, Droplets, Sprout, Sun } from "lucide-react";
import { growChapters } from "@/data/content";

const icons = {
  sow: Sprout,
  plant: Sun,
  tend: Droplets,
  trouble: Bug,
} as const;

export function GrowPanel() {
  return (
    <section id="grow" className="scroll-mt-24">
      <p className="text-xs font-semibold tracking-widest text-chile-ink uppercase">In the ground</p>
      <h2 className="mt-2 max-w-2xl text-4xl font-semibold text-ink">How a pepper season actually goes</h2>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Same plant from zone 3 to the tropics. What changes is the start date, the heat, and whether frost
        or a 98°F afternoon ends the fruit set first.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <figure className="overflow-hidden rounded-2xl border border-line bg-paper">
          <img
            src="/guide/seedlings.jpg"
            alt="Pepper seedlings with their first true leaves in a wooden tray"
            className="aspect-3/2 w-full object-cover"
          />
          <figcaption className="px-4 py-3 text-sm text-muted">
            True leaves mean it is time to pot up. A rootbound cell pack stalls after transplant.
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-2xl border border-line bg-paper">
          <img
            src="/guide/garden.jpg"
            alt="Pepper plants heavy with red and orange fruit in a mulched raised bed"
            className="aspect-3/2 w-full object-cover"
          />
          <figcaption className="px-4 py-3 text-sm text-muted">
            Ripe color is the harvest that matters for seed. Green fruit is food, not next year's plants.
          </figcaption>
        </figure>
      </div>

      <div className="mt-8 grid gap-5">
        {growChapters.map((chapter) => {
          const Icon = icons[chapter.id as keyof typeof icons] ?? Sprout;
          return (
            <article key={chapter.id} className="rounded-2xl border border-line bg-paper p-5 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-leaf-soft text-leaf">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-chile-ink uppercase">{chapter.kicker}</p>
                  <h3 className="mt-1 text-2xl font-semibold text-ink">{chapter.title}</h3>
                </div>
              </div>
              <p className="mt-4 max-w-3xl text-muted">{chapter.lead}</p>
              <ul className="mt-2 grid gap-0 sm:grid-cols-2 sm:gap-x-8">
                {chapter.points.map((point) => (
                  <li key={point.title} className="border-t border-line py-4">
                    <h4 className="font-sans text-base font-semibold text-ink">{point.title}</h4>
                    <p className="mt-1 text-sm text-muted">{point.body}</p>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
