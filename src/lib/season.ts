import {
  species,
  summers,
  type MonthDay,
  type Summer,
  type Variety,
  type Zone,
} from "@/data/content";

const DIM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] as const;
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export type Verdict = "comfortable" | "tight" | "unlikely" | "perennial";

export type SeasonPlan = {
  verdict: Verdict;
  verdictTitle: string;
  verdictBody: string;
  caution: string | null;
  sow: string;
  sowDetail: string;
  transplant: string;
  transplantDetail: string;
  ripe: string;
  ripeDetail: string;
  transplantDoy: number | null;
  ripeDoy: number | null;
  frostDoy: number | null;
  indoorWeeks: number;
};

export function toDoy(date: MonthDay): number {
  let n = date.day;
  for (let i = 0; i < date.month - 1; i++) n += DIM[i];
  return n;
}

export function formatDoy(doy: number): string {
  const wrapped = ((doy - 1) % 365 + 365) % 365 + 1;
  let n = wrapped;
  for (let i = 0; i < 12; i++) {
    if (n <= DIM[i]) return `${MONTHS[i]} ${n}`;
    n -= DIM[i];
  }
  return "December 31";
}

export function formatMonthDay(date: MonthDay | null, empty: string): string {
  if (!date) return empty;
  return `${MONTHS[date.month - 1]} ${date.day}`;
}

export function indoorWeeks(variety: Variety, summer: Summer): number {
  let weeks = variety.days >= 110 ? 12 : variety.days >= 90 ? 10 : 8;
  if (variety.species === "pubescens") weeks = Math.max(weeks, 12);
  if (summer === "cool") weeks += 2;
  if (summer === "hot" && weeks > 8) weeks -= 1;
  return weeks;
}

function ripeDelay(variety: Variety, summer: Summer): number {
  if (summer === "cool") return Math.round(variety.days * 0.3);
  if (summer === "hot" && variety.species === "pubescens") return 21;
  if (
    summer === "moderate" &&
    (variety.species === "chinense" || variety.species === "baccatum" || variety.days >= 100)
  ) {
    return 14;
  }
  return 0;
}

function transplantLag(summer: Summer): number {
  if (summer === "cool") return 21;
  if (summer === "hot") return 7;
  return 14;
}

export function summerHint(summer: Summer): string {
  return summers.find((item) => item.id === summer)?.hint ?? "";
}

export function planFor(zone: Zone, summer: Summer, variety: Variety): SeasonPlan {
  const weeks = indoorWeeks(variety, summer);
  const caution = cautionFor(zone, summer, variety);

  if (!zone.lastFrost || !zone.firstFrost) {
    return {
      verdict: "perennial",
      verdictTitle: "Year-round",
      verdictBody: `No frost to race. ${variety.name} can live for years if you prune after a flush and keep the roots from baking.`,
      caution,
      sow: "Any mild month",
      sowDetail: `Start seed when nights sit near 65–75°F. Give ${variety.name} about ${weeks} weeks under lights before it is sturdy enough to plant.`,
      transplant: "At 6–8 true leaves",
      transplantDetail:
        "Move it into warm soil and out of the harshest midday sun for the first week. A pepper checked by transplant shock loses more time than a careful hardening.",
      ripe: `About ${variety.days} days after transplant`,
      ripeDetail:
        summer === "hot"
          ? "Peak heat slows fruit set. A plant that flowers before or after the hottest stretch ripens more reliably than one that blooms in it."
          : "With no frost, the limits are heat, water, and disease. Fully ripe color is still the moment the seed is mature.",
      transplantDoy: null,
      ripeDoy: null,
      frostDoy: null,
      indoorWeeks: weeks,
    };
  }

  const last = toDoy(zone.lastFrost);
  const first = toDoy(zone.firstFrost);
  const lag = transplantLag(summer);
  const delay = ripeDelay(variety, summer);
  const sowDoy = last - weeks * 7;
  const transplantDoy = last + lag;
  const ripeDoy = transplantDoy + variety.days + delay;
  const slack = first - ripeDoy;

  let verdict: Exclude<Verdict, "perennial"> = "comfortable";
  if (slack < 0) verdict = "unlikely";
  else if (slack < 21) verdict = "tight";

  const titles: Record<Exclude<Verdict, "perennial">, string> = {
    comfortable: "Comfortable",
    tight: "Tight",
    unlikely: "Unlikely outdoors",
  };
  const bodies: Record<Exclude<Verdict, "perennial">, string> = {
    comfortable: `${variety.name} should reach ripe color with time to spare before a typical first frost in ${zone.name.toLowerCase()}.`,
    tight: `${variety.name} can finish, but only if you sow on time and the fall stays mild. Keep a pot ready in case frost comes early.`,
    unlikely: `${variety.name} wants more warm weeks than a typical ${zone.name.toLowerCase()} season gives. Grow it in a container you can bring inside, or pick a shorter pepper.`,
  };

  const heatNote =
    delay > 0
      ? ` Catalog days are ${variety.days} from transplant; this plan adds ${delay} days because ${
          summer === "cool" ? "cool summers slow ripening" : "this type ripens slowly without steady heat"
        }.`
      : ` Catalog timing is ${variety.days} days from transplant.`;

  return {
    verdict,
    verdictTitle: titles[verdict],
    verdictBody: bodies[verdict],
    caution,
    sow: `Around ${formatDoy(sowDoy)}`,
    sowDetail: `About ${weeks} weeks before a typical last frost. Sow a few extra cells — ${species[variety.species].short} seed is cheap insurance.`,
    transplant: `Around ${formatDoy(transplantDoy)}`,
    transplantDetail:
      summer === "cool"
        ? "Three weeks after the last frost, once soil is actually warm. A cold bed in a cool summer stalls peppers harder than a late planting."
        : summer === "hot"
          ? "About a week after the last frost if nights are already mild, so the plants are large before the worst heat."
          : "About two weeks after the last frost, when nights stay above 55°F.",
    ripe: `Around ${formatDoy(ripeDoy)}`,
    ripeDetail: `Fully ripe ${variety.ripe.toLowerCase()} fruit — the stage for both flavor and seed.${heatNote}`,
    transplantDoy,
    ripeDoy,
    frostDoy: first,
    indoorWeeks: weeks,
  };
}

function cautionFor(zone: Zone, summer: Summer, variety: Variety): string | null {
  if (variety.species === "pubescens" && summer === "hot") {
    return "Rocoto likes cool nights and struggles in prolonged heat. Give it afternoon shade, or grow it through the milder months.";
  }
  if (summer === "hot" && zone.id >= 8) {
    return "Afternoons over about 95°F drop flowers. Shade after lunch, keep water even, and a late-summer planting often beats one crop that tries to bloom in the heat.";
  }
  if (summer === "cool") {
    return "Cool summers add weeks. Use a south wall, dark mulch once the soil has warmed, and don't trust a long-season catalog date.";
  }
  return null;
}

export function barPercent(doy: number): number {
  return Math.min(100, Math.max(0, ((doy - 1) / 365) * 100));
}
