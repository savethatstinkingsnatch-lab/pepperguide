import { useMemo } from "react";
import { heatLabels, varieties, type Heat, type Summer, type Variety, type Zone } from "@/data/content";
import { barPercent, planFor, type Verdict } from "@/lib/season";

const heats: (Heat | "all")[] = ["all", "sweet", "mild", "medium", "hot", "extreme"];

const verdictClass: Record<Verdict, string> = {
  comfortable: "bg-leaf-soft text-leaf",
  tight: "bg-paper text-chile-ink ring-1 ring-chile",
  unlikely: "bg-parchment text-muted ring-1 ring-line",
  perennial: "bg-leaf-soft text-leaf",
};

export function SeasonPanel({
  zone,
  summer,
  variety,
  fitsOnly,
  heat,
  onVariety,
  onFitsOnly,
  onHeat,
}: {
  zone: Zone;
  summer: Summer;
  variety: Variety;
  fitsOnly: boolean;
  heat: Heat | "all";
  onVariety: (id: string) => void;
  onFitsOnly: (value: boolean) => void;
  onHeat: (heat: Heat | "all") => void;
}) {
  const plan = planFor(zone, summer, variety);
  const cards = useMemo(
    () =>
      varieties.map((item) => ({
        item,
        plan: planFor(zone, summer, item),
      })),
    [zone, summer],
  );

  const visible = cards.filter(({ item, plan: itemPlan }) => {
    if (item.id === variety.id) return true;
    if (heat !== "all" && item.heat !== heat) return false;
    if (fitsOnly && itemPlan.verdict === "unlikely") return false;
    return true;
  });

  return (
    <section id="season" className="scroll-mt-24">
      <p className="text-xs font-semibold tracking-widest text-chile-ink uppercase">The season</p>
      <h2 className="mt-2 max-w-2xl text-4xl font-semibold text-ink">When this pepper actually finishes</h2>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Dates are for fully ripe color, which is also when the seed is mature. Green jalapeños and poblanos
        can be eaten earlier. Frost dates are typical midpoints for the zone, not a forecast for your town.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <article className="rounded-2xl border border-line bg-paper p-5 sm:p-7">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-3xl font-semibold text-ink">{variety.name}</h3>
              <p className="mt-1 text-sm text-muted">
                {heatLabels[variety.heat]} · {variety.shu} SHU · {variety.days} days from transplant
              </p>
            </div>
            <span className={`rounded-full px-3 py-1 text-sm font-semibold ${verdictClass[plan.verdict]}`}>
              {plan.verdictTitle}
            </span>
          </div>
          <p className="mt-4 text-ink">{plan.verdictBody}</p>
          {plan.caution ? <p className="mt-3 text-sm text-chile-ink">{plan.caution}</p> : null}

          <ol className="mt-6 grid gap-4">
            <Milestone kicker="Sow indoors" when={plan.sow} detail={plan.sowDetail} />
            <Milestone kicker="Transplant" when={plan.transplant} detail={plan.transplantDetail} />
            <Milestone kicker="Ripe color" when={plan.ripe} detail={plan.ripeDetail} />
          </ol>

          {plan.transplantDoy && plan.ripeDoy && plan.frostDoy ? (
            <SeasonBar
              transplantDoy={plan.transplantDoy}
              ripeDoy={plan.ripeDoy}
              frostDoy={plan.frostDoy}
            />
          ) : (
            <p className="mt-6 border-t border-line pt-4 text-sm text-muted">
              No frost line to draw. Time the crop around heat instead of a last-frost date.
            </p>
          )}

          <p className="mt-6 text-sm text-muted">{variety.grow}</p>
        </article>

        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by heat">
              {heats.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={heat === item}
                  onClick={() => onHeat(item)}
                  className={`min-h-11 rounded-full border px-3 text-sm font-semibold transition-colors ${
                    heat === item
                      ? "border-chile bg-chile text-paper"
                      : "border-line bg-paper text-ink hover:border-chile"
                  }`}
                >
                  {item === "all" ? "All heat" : heatLabels[item]}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-pressed={fitsOnly}
              onClick={() => onFitsOnly(!fitsOnly)}
              className={`min-h-11 rounded-full border px-3 text-left text-sm font-semibold transition-colors ${
                fitsOnly ? "border-leaf bg-leaf text-paper" : "border-line bg-paper text-ink"
              }`}
            >
              {fitsOnly ? "Showing what can ripen" : "Showing every variety"}
            </button>
          </div>

          <ul className="mt-4 grid gap-3">
            {visible.map(({ item, plan: itemPlan }) => {
              const selected = item.id === variety.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onVariety(item.id)}
                    aria-pressed={selected}
                    className={`w-full rounded-2xl border p-4 text-left transition-colors ${
                      selected ? "border-chile bg-paper" : "border-line bg-paper hover:border-chile"
                    }`}
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span>
                        <span className="block font-display text-xl font-semibold text-ink">{item.name}</span>
                        <span className="mt-1 block text-sm text-muted">
                          {heatLabels[item.heat]} · ripens {item.ripe.toLowerCase()} · {item.days} days
                        </span>
                      </span>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${verdictClass[itemPlan.verdict]}`}
                      >
                        {itemPlan.verdictTitle}
                      </span>
                    </span>
                    <span className="mt-2 block text-sm text-muted">{item.summary}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Milestone({ kicker, when, detail }: { kicker: string; when: string; detail: string }) {
  return (
    <li className="border-t border-line pt-4">
      <p className="text-xs font-semibold tracking-widest text-muted uppercase">{kicker}</p>
      <p className="mt-1 font-display text-2xl font-semibold text-ink tabular-nums">{when}</p>
      <p className="mt-1 text-sm text-muted">{detail}</p>
    </li>
  );
}

function SeasonBar({
  transplantDoy,
  ripeDoy,
  frostDoy,
}: {
  transplantDoy: number;
  ripeDoy: number;
  frostDoy: number;
}) {
  const start = barPercent(transplantDoy);
  const end = barPercent(Math.min(ripeDoy, 365));
  const frost = barPercent(frostDoy);
  const width = Math.max(1.5, end - start);

  return (
    <div className="mt-6 border-t border-line pt-4">
      <div className="relative h-3 rounded-full bg-line">
        <div
          className="absolute top-0 h-3 rounded-full bg-leaf"
          style={{ left: `${start}%`, width: `${width}%` }}
        />
        <div className="absolute top-0 h-3 w-0.5 bg-chile" style={{ left: `${frost}%` }} />
      </div>
      <div className="mt-2 flex justify-between text-xs text-muted tabular-nums">
        <span>Jan</span>
        <span>Mar</span>
        <span>May</span>
        <span>Jul</span>
        <span>Sep</span>
        <span>Nov</span>
      </div>
      <p className="mt-2 text-xs text-muted">
        Green is transplant to ripe color. The red mark is a typical first frost.
      </p>
    </div>
  );
}
