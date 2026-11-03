import { useEffect } from "react";
import { Leaf } from "lucide-react";
import { summers, varietyById, zoneById, zones } from "@/data/content";
import { formatMonthDay, summerHint } from "@/lib/season";
import { usePrefs } from "@/lib/prefs";
import { GrowPanel } from "@/components/almanac/grow-panel";
import { SeasonPanel } from "@/components/almanac/season-panel";
import { SeedPanel } from "@/components/almanac/seed-panel";

export function Almanac() {
  const prefs = usePrefs();

  useEffect(() => {
    void usePrefs.persist.rehydrate();
  }, []);

  const zone = zoneById(prefs.zoneId);
  const variety = varietyById(prefs.varietyId);

  return (
    <div className="min-h-screen bg-parchment text-ink">
      <div className="h-1 bg-chile" />
      <header className="sticky top-0 z-30 border-b border-line bg-parchment">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#top" className="flex min-h-11 items-center gap-2">
            <Leaf className="size-5 text-leaf" aria-hidden="true" />
            <span className="font-display text-lg font-semibold tracking-tight">The Pepper Almanac</span>
          </a>
          <nav className="flex items-center gap-1 text-sm font-semibold sm:gap-3" aria-label="Guide">
            <a className="inline-flex min-h-11 items-center px-2 hover:text-chile-ink" href="#season">
              Season
            </a>
            <a className="inline-flex min-h-11 items-center px-2 hover:text-chile-ink" href="#grow">
              Grow
            </a>
            <a className="inline-flex min-h-11 items-center px-2 hover:text-chile-ink" href="#seed">
              Seed
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 pt-10 pb-20 sm:pt-14">
        <section className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <p className="text-xs font-semibold tracking-widest text-chile-ink uppercase">
              A field guide to Capsicum
            </p>
            <h1 className="mt-3 text-5xl leading-tight font-semibold text-ink sm:text-6xl">
              Grow peppers that ripen where you live.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted">
              USDA zones describe the winter. Summers decide whether fruit colors. Set both, then read the
              season for a real variety — and how to harvest seed that comes true.
            </p>

            <fieldset className="mt-8">
              <legend className="text-sm font-semibold text-ink">Your USDA zone</legend>
              <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-9" role="radiogroup" aria-label="USDA zone">
                {zones.map((item) => {
                  const on = item.id === zone.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="radio"
                      aria-checked={on}
                      onClick={() => prefs.setZoneId(item.id)}
                      className={`min-h-11 rounded-xl border text-sm font-semibold tabular-nums transition-colors ${
                        on
                          ? "border-chile bg-chile text-paper"
                          : "border-line bg-paper text-ink hover:border-chile"
                      }`}
                    >
                      {item.id}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-sm text-muted">
                Not sure? Use the{" "}
                <a
                  className="font-semibold text-chile-ink underline decoration-line underline-offset-2"
                  href="https://planthardiness.ars.usda.gov/"
                  target="_blank"
                  rel="noreferrer"
                >
                  USDA hardiness map
                </a>
                . Outside the US, match the zone whose last-frost date is closest to yours.
              </p>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="text-sm font-semibold text-ink">How hot are the summers?</legend>
              <div className="mt-3 grid grid-cols-3 gap-2" role="radiogroup" aria-label="Summer heat">
                {summers.map((item) => {
                  const on = item.id === prefs.summer;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="radio"
                      aria-checked={on}
                      onClick={() => prefs.setSummer(item.id)}
                      className={`min-h-11 rounded-xl border px-2 text-sm font-semibold transition-colors ${
                        on
                          ? "border-chile bg-chile text-paper"
                          : "border-line bg-paper text-ink hover:border-chile"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-sm text-muted">{summerHint(prefs.summer)}</p>
            </fieldset>

            <div className="mt-6 rounded-2xl border border-line bg-paper p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-3xl font-semibold">{zone.name}</h2>
                <p className="text-sm font-semibold text-leaf">{zone.frostFree}</p>
              </div>
              <p className="mt-1 text-sm text-muted">{zone.places}</p>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-muted">Typical last spring frost</dt>
                  <dd className="mt-1 font-semibold tabular-nums">
                    {formatMonthDay(zone.lastFrost, "None")}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">Typical first fall frost</dt>
                  <dd className="mt-1 font-semibold tabular-nums">
                    {formatMonthDay(zone.firstFrost, "None")}
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-ink">{zone.blurb}</p>
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-line bg-paper lg:sticky lg:top-24">
            <img
              src="/guide/hero.jpg"
              alt="Ripe bell, cayenne, jalapeño, and habanero peppers with a bowl of saved seeds"
              className="aspect-video w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-sm text-muted">
              Ripe fruit for the kitchen. Fully colored, slightly soft fruit for the seed jar.
            </figcaption>
          </figure>
        </section>

        <div className="mt-20">
          <SeasonPanel
            zone={zone}
            summer={prefs.summer}
            variety={variety}
            fitsOnly={prefs.fitsOnly}
            heat={prefs.heat}
            onVariety={prefs.setVarietyId}
            onFitsOnly={prefs.setFitsOnly}
            onHeat={prefs.setHeat}
          />
        </div>

        <div className="mt-20">
          <GrowPanel />
        </div>

        <div className="mt-20">
          <SeedPanel
            zone={zone}
            variety={variety}
            method={prefs.method}
            checks={prefs.checks}
            onMethod={prefs.setMethod}
            onToggle={prefs.toggleCheck}
          />
        </div>

        <footer className="mt-16 border-t border-line pt-6 text-sm text-muted">
          <p>
            Frost dates are planning midpoints for each USDA zone, not a local forecast. Days to ripe color
            start at transplant and stretch when summers stay cool. Seed notes here are for a home garden,
            not certified seed production. A zone number does not describe summer heat — a cool zone 8 and a
            hot zone 8 are different pepper seasons.
          </p>
        </footer>
      </main>
    </div>
  );
}
