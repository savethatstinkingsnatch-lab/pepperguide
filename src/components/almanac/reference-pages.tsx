import type { ReactNode } from "react";

const startSteps = [
  "Pick your zone and summer type.",
  "Choose 2 or 3 varieties marked OP.",
  "Start seed indoors 8 to 10 weeks before last frost, on a heat mat, under lights.",
  "Plant out when nights stay above 55°F.",
  "Water evenly.",
  "Wear gloves for hot ones.",
  "For seed, let fruit fully ripen and grow only one variety of each species, or bag the flowers.",
];

const safetyNotes = [
  "Wear gloves when cutting hot peppers. Never touch your eyes, nose, or face. Wash knives and boards with soap.",
  "Skin burn: Water alone spreads the oil. Wash with dish soap, or rub on cooking oil and then wash with soap. Soaking in cold milk can soothe it.",
  "Eyes: Flush with clean, cool water for several minutes. Take out contact lenses. Get medical help if pain does not go away.",
  "Mouth: Drink milk or eat yogurt, not water.",
  "Fumes: Roast, fry, or dehydrate very hot peppers outdoors or with strong airflow. The fumes can make you cough and sting your eyes. Keep children and pets away.",
  "Keep hot peppers and seeds away from small children and pets.",
];

const storageNotes = [
  "Peppers or garlic in oil can grow botulism. Make it fresh, keep it in the refrigerator, and use it within a few days, or freeze it. Never store it at room temperature.",
  "Dried peppers: Dry them until they are brittle. Store them in sealed jars. Throw out any with mold, fuzz, or a musty smell.",
  "Freezing: Wash, cut, and freeze peppers. No blanching is needed.",
];

const lookalikes = [
  "Jerusalem cherry (Solanum pseudocapsicum) is a houseplant with round orange-red berries that looks like a pepper plant. It is POISONOUS. Do not eat it.",
  "Ornamental peppers sold as decorations are usually edible but often very hot, and they are bred for looks, not flavor. Do not eat any that were sprayed with plant chemicals not meant for food.",
  "Pepper leaves are eaten cooked in some Asian dishes, but only cooked, and this guide does not recommend eating them. Do not eat raw leaves, stems, or flowers.",
];

const glossary: { term: string; meaning: string }[] = [
  { term: "Capsaicin", meaning: "the oily chemical that makes peppers hot." },
  { term: "SHU (Scoville Heat Units)", meaning: "a heat rating." },
  { term: "Species", meaning: "annuum, chinense, baccatum, frutescens, pubescens." },
  { term: "Open-pollinated (OP)", meaning: "grows true from saved seed." },
  { term: "F1 hybrid", meaning: "a cross. Saved seed won't grow true." },
  { term: "Isolation", meaning: "keeping varieties apart so they don't cross." },
  { term: "Hardening off", meaning: "getting seedlings used to the outdoors slowly." },
  { term: "Blossom-end rot", meaning: "a dark sunken spot on the bottom of the fruit from uneven water." },
  { term: "Sunscald", meaning: "pale burned patches on the fruit." },
  { term: "Pith", meaning: "the white inside where most of the heat lives." },
];

function Page({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <p className="text-xs font-semibold tracking-widest text-chile-ink uppercase">{kicker}</p>
      <h2 className="mt-2 max-w-2xl text-4xl font-semibold text-ink">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Notes({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="rounded-2xl border border-line bg-paper p-4 text-ink sm:p-5">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function StartHere() {
  return (
    <Page id="start" kicker="Start here" title="New to peppers?">
      <ol className="grid gap-3">
        {startSteps.map((step, index) => (
          <li key={step} className="rounded-2xl border border-line bg-paper p-4 sm:p-5">
            <span className="mr-2 font-semibold text-chile-ink tabular-nums">{index + 1}.</span>
            {step}
          </li>
        ))}
      </ol>
    </Page>
  );
}

export function SafetyPages() {
  return (
    <>
      <Page id="safety" kicker="Safety" title="Hot pepper safety">
        <Notes items={safetyNotes} />
      </Page>

      <div className="mt-20">
        <Page id="store" kicker="After harvest" title="Storing peppers safely">
          <ul className="grid gap-3">
            <li className="rounded-2xl border border-line bg-paper p-4 text-ink sm:p-5">
              Canning: Peppers are low-acid. Plain peppers MUST be pressure-canned. You can also pickle them
              with a tested recipe from the{" "}
              <a
                className="font-semibold text-chile-ink underline decoration-line underline-offset-2"
                href="https://nchfp.uga.edu/"
                target="_blank"
                rel="noreferrer"
              >
                National Center for Home Food Preservation
              </a>{" "}
              (nchfp.uga.edu). Never water-bath can plain peppers.
            </li>
            {storageNotes.map((item) => (
              <li key={item} className="rounded-2xl border border-line bg-paper p-4 text-ink sm:p-5">
                {item}
              </li>
            ))}
          </ul>
        </Page>
      </div>

      <div className="mt-20">
        <section id="lookalikes" className="scroll-mt-32 rounded-2xl border-2 border-chile bg-paper p-5 sm:p-8">
          <p className="text-xs font-semibold tracking-widest text-chile-ink uppercase">Look-alikes</p>
          <h2 className="mt-2 text-3xl font-semibold text-ink">Not every red berry is a pepper</h2>
          <ul className="mt-5 grid gap-4">
            {lookalikes.map((item) => (
              <li key={item} className="border-t border-line pt-4 text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 font-semibold text-ink">
            Poison Control:{" "}
            <a className="text-chile-ink underline decoration-line underline-offset-2" href="tel:18002221222">
              1-800-222-1222
            </a>
          </p>
        </section>
      </div>
    </>
  );
}

export function BackPages() {
  return (
    <>
      <Page id="glossary" kicker="Words" title="Glossary">
        <dl className="grid gap-3 sm:grid-cols-2">
          {glossary.map((entry) => (
            <div key={entry.term} className="rounded-2xl border border-line bg-paper p-4">
              <dt className="font-display text-xl font-semibold text-ink">{entry.term}</dt>
              <dd className="mt-1 text-muted">{entry.meaning}</dd>
            </div>
          ))}
        </dl>
      </Page>
      <div className="mt-20">
        <Page id="about" kicker="About" title="About and disclaimer">
          <div className="rounded-2xl border border-line bg-paper p-5 sm:p-7">
            <p className="text-ink">
              This pocket guide is for learning. Check your local county extension office for advice in your
              area. Follow tested recipes from the National Center for Home Food Preservation when you can.
              Blue and the Awesome Dudes are not responsible for illness, injury, or crop loss. Part of The
              Education Revolution pocket guide series.
            </p>
          </div>
        </Page>
      </div>
    </>
  );
}
