import { useState } from "react";
import { Check, Copy } from "lucide-react";
import {
  dryMethodSteps,
  fermentSteps,
  seedSteps,
  species,
  type Variety,
  type Zone,
} from "@/data/content";

export function SeedPanel({
  zone,
  variety,
  method,
  checks,
  onMethod,
  onToggle,
}: {
  zone: Zone;
  variety: Variety;
  method: "ferment" | "dry";
  checks: string[];
  onMethod: (method: "ferment" | "dry") => void;
  onToggle: (id: string) => void;
}) {
  const [copied, setCopied] = useState(false);
  const info = species[variety.species];
  const done = seedSteps.filter((step) => checks.includes(step.id)).length;
  const year = new Date().getFullYear();
  const isolated = checks.includes("isolate");
  const label = [
    variety.name,
    `${info.latin} · open-pollinated`,
    `Saved ${year} · ${zone.name}`,
    isolated ? "Flower bagged / isolated" : "Open flowers — may have crossed",
    method === "ferment" ? "Seed fermented, rinsed, and dried" : "Seed rinsed and dried",
    "Store cool, dark, and dry.",
  ].join("\n");

  async function copyLabel() {
    try {
      await navigator.clipboard.writeText(label);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="seed" className="scroll-mt-32">
      <p className="text-xs font-semibold tracking-widest text-chile-ink uppercase">Harvest the seed</p>
      <h2 className="mt-2 max-w-2xl text-4xl font-semibold text-ink">
        Seed worth sowing is ripe, dry, and named
      </h2>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        The fruit you eat green is not the fruit you save. Work through {variety.name}. The checks stay on
        this device.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <figure className="overflow-hidden rounded-2xl border border-line bg-paper">
          <img
            src="/guide/seeds.jpg"
            alt="A ripe red pepper opened on a plate, with seeds, a jar, and a paper envelope"
            className="aspect-3/2 w-full object-cover"
          />
          <figcaption className="px-4 py-3 text-sm text-muted">
            Fully colored, just softening, then cleaned and dried until a seed snaps.
          </figcaption>
        </figure>
        <div className="rounded-2xl border border-dashed border-line bg-paper p-5 sm:p-6">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase">Packet label</p>
          <pre className="mt-3 font-sans text-base leading-relaxed whitespace-pre-wrap text-ink">{label}</pre>
          <button
            type="button"
            onClick={copyLabel}
            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-chile px-4 text-sm font-semibold text-paper transition-colors hover:bg-chile-ink"
          >
            {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
            {copied ? "Copied" : "Copy label"}
          </button>
          <p className="mt-4 text-sm text-muted tabular-nums">
            {done} of {seedSteps.length} steps checked
          </p>
        </div>
      </div>

      <article className="mt-5 rounded-2xl border border-line bg-paper p-5 sm:p-7">
        <h3 className="text-2xl font-semibold text-ink">Who this flower can meet</h3>
        <p className="mt-3 text-muted">
          {variety.name} is {info.latin}. It sits with {info.examples}. {info.cross} Bagging one cluster is
          more reliable than hoping the next bed is far enough.
        </p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead>
              <tr className="border-b border-line text-muted">
                <th className="py-2 pr-4 font-semibold">Species</th>
                <th className="py-2 pr-4 font-semibold">You'll know them as</th>
                <th className="py-2 font-semibold">Seed note</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(species).map((row) => (
                <tr
                  key={row.id}
                  className={`border-b border-line ${row.id === variety.species ? "text-ink" : "text-muted"}`}
                >
                  <td className="py-3 pr-4 font-semibold">{row.latin.replace("Capsicum ", "C. ")}</td>
                  <td className="py-3 pr-4">{row.examples}</td>
                  <td className="py-3">{row.cross}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          aria-pressed={method === "ferment"}
          onClick={() => onMethod("ferment")}
          className={`min-h-11 rounded-2xl border p-4 text-left ${
            method === "ferment" ? "border-chile bg-paper" : "border-line bg-paper"
          }`}
        >
          <span className="block font-display text-xl font-semibold text-ink">Ferment, then dry</span>
          <span className="mt-1 block text-sm text-muted">
            Best for bells, jalapeños, and any pod with a lot of gel. Two to four days, no longer.
          </span>
        </button>
        <button
          type="button"
          aria-pressed={method === "dry"}
          onClick={() => onMethod("dry")}
          className={`min-h-11 rounded-2xl border p-4 text-left ${
            method === "dry" ? "border-chile bg-paper" : "border-line bg-paper"
          }`}
        >
          <span className="block font-display text-xl font-semibold text-ink">Rinse and dry</span>
          <span className="mt-1 block text-sm text-muted">
            Enough for a few thin-walled pods. Still dry them until they snap.
          </span>
        </button>
      </div>

      <ol className="mt-5 grid gap-3">
        {(method === "ferment" ? fermentSteps : dryMethodSteps).map((step, index) => (
          <li key={step} className="rounded-2xl border border-line bg-paper px-4 py-3 text-sm text-ink">
            <span className="mr-2 font-semibold text-chile-ink tabular-nums">{index + 1}</span>
            {step}
          </li>
        ))}
      </ol>

      <ol className="mt-5 grid gap-3">
        {seedSteps.map((step, index) => {
          const on = checks.includes(step.id);
          return (
            <li key={step.id}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => onToggle(step.id)}
                className={`flex w-full gap-3 rounded-2xl border bg-paper p-4 text-left sm:p-5 ${
                  on ? "border-leaf" : "border-line"
                }`}
              >
                <span
                  className={`mt-1 flex size-5 shrink-0 items-center justify-center rounded border ${
                    on ? "border-leaf bg-leaf text-paper" : "border-line bg-paper"
                  }`}
                  aria-hidden="true"
                >
                  {on ? <Check className="size-3.5" /> : null}
                </span>
                <span>
                  <span className="block font-display text-xl font-semibold text-ink">
                    <span className="mr-2 text-muted tabular-nums">{index + 1}</span>
                    {step.title}
                  </span>
                  <span className="mt-2 block text-sm text-muted">{step.body}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
