export type Summer = "cool" | "moderate" | "hot";

export type Heat = "sweet" | "mild" | "medium" | "hot" | "extreme";

export type SpeciesId = "annuum" | "chinense" | "baccatum" | "frutescens" | "pubescens";

export type MonthDay = { month: number; day: number };

export type Zone = {
  id: number;
  name: string;
  places: string;
  lastFrost: MonthDay | null;
  firstFrost: MonthDay | null;
  frostFree: string;
  model: "seasonal" | "year-round";
  blurb: string;
};

export type Species = {
  id: SpeciesId;
  latin: string;
  short: string;
  examples: string;
  cross: string;
};

export type Variety = {
  id: string;
  name: string;
  species: SpeciesId;
  heat: Heat;
  shu: string;
  days: number;
  ripe: string;
  summary: string;
  grow: string;
};

export type GrowPoint = { title: string; body: string };

export type GrowChapter = {
  id: string;
  kicker: string;
  title: string;
  lead: string;
  points: GrowPoint[];
};

export const summers: { id: Summer; label: string; hint: string }[] = [
  {
    id: "cool",
    label: "Cool",
    hint: "Maritime or high-elevation. Nights stay cool and color comes late.",
  },
  {
    id: "moderate",
    label: "Moderate",
    hint: "A real warm season, without months stuck above 95°F.",
  },
  {
    id: "hot",
    label: "Hot",
    hint: "Long stretches of extreme heat. Midsummer flowers often drop.",
  },
];

export const heatLabels: Record<Heat, string> = {
  sweet: "Sweet",
  mild: "Mild",
  medium: "Medium",
  hot: "Hot",
  extreme: "Extreme",
};

export const species: Record<SpeciesId, Species> = {
  annuum: {
    id: "annuum",
    latin: "Capsicum annuum",
    short: "annuum",
    examples: "bells, jalapeños, cayennes, poblanos, shishitos",
    cross: "Crosses easily with other annuum. Now and then with chinense and frutescens.",
  },
  chinense: {
    id: "chinense",
    latin: "Capsicum chinense",
    short: "chinense",
    examples: "habaneros, Scotch bonnets, ghost peppers",
    cross: "Crosses easily with other chinense. Occasionally with annuum and frutescens.",
  },
  baccatum: {
    id: "baccatum",
    latin: "Capsicum baccatum",
    short: "baccatum",
    examples: "ají amarillo, Sugar Rush, lemon drop",
    cross: "Crosses with other baccatum. Much less willing to cross with the common garden peppers.",
  },
  frutescens: {
    id: "frutescens",
    latin: "Capsicum frutescens",
    short: "frutescens",
    examples: "tabasco and many Thai bird chiles",
    cross: "Crosses with other frutescens. Occasional crosses with annuum and chinense happen.",
  },
  pubescens: {
    id: "pubescens",
    latin: "Capsicum pubescens",
    short: "pubescens",
    examples: "rocoto and manzano",
    cross: "Essentially does not cross with the other domesticated peppers. Black seeds are the tell.",
  },
};

export const zones: Zone[] = [
  {
    id: 3,
    name: "Zone 3",
    places: "Northern Plains, high Rockies, interior Maine",
    lastFrost: { month: 6, day: 8 },
    firstFrost: { month: 9, day: 8 },
    frostFree: "About 90 frost-free days",
    model: "seasonal",
    blurb:
      "A short, bright summer. Only the earliest sweet and mild peppers finish outdoors, and they want a south wall, dark mulch, and an early start under lights.",
  },
  {
    id: 4,
    name: "Zone 4",
    places: "Upper Midwest, northern New England",
    lastFrost: { month: 5, day: 22 },
    firstFrost: { month: 9, day: 22 },
    frostFree: "About 120 frost-free days",
    model: "seasonal",
    blurb:
      "Early bells, shishitos, and jalapeños are realistic. Superhots are a pot you finish indoors, not a bed crop.",
  },
  {
    id: 5,
    name: "Zone 5",
    places: "Lower Midwest, southern New England, Rocky Mountain foothills",
    lastFrost: { month: 5, day: 10 },
    firstFrost: { month: 10, day: 8 },
    frostFree: "About 150 frost-free days",
    model: "seasonal",
    blurb:
      "The classic pepper season if you start indoors. Most annuums thrive. Habaneros need the earliest start and your warmest spot.",
  },
  {
    id: 6,
    name: "Zone 6",
    places: "Mid-Atlantic piedmont, lower Midwest, interior Northwest",
    lastFrost: { month: 4, day: 22 },
    firstFrost: { month: 10, day: 20 },
    frostFree: "About 180 frost-free days",
    model: "seasonal",
    blurb:
      "Room for bells through habaneros. A cool maritime summer still behaves like a shorter zone — that is what the summer control is for.",
  },
  {
    id: 7,
    name: "Zone 7",
    places: "Upper South, mid-Atlantic, southern Appalachians",
    lastFrost: { month: 4, day: 8 },
    firstFrost: { month: 11, day: 1 },
    frostFree: "About 200 frost-free days",
    model: "seasonal",
    blurb:
      "Long enough for chinense and baccatum to color fully. Inland heat can still knock flowers off in July and August.",
  },
  {
    id: 8,
    name: "Zone 8",
    places: "Lower South, Texas hill country, Pacific Northwest lowlands, central California",
    lastFrost: { month: 3, day: 22 },
    firstFrost: { month: 11, day: 15 },
    frostFree: "About 230 frost-free days",
    model: "seasonal",
    blurb:
      "Winters are mild. Summers are not one climate. A zone 8 garden in Seattle and one in Houston need opposite advice.",
  },
  {
    id: 9,
    name: "Zone 9",
    places: "Gulf Coast, central Florida, southern California valleys, southern Texas",
    lastFrost: { month: 2, day: 20 },
    firstFrost: { month: 12, day: 1 },
    frostFree: "About 280 frost-free days",
    model: "seasonal",
    blurb:
      "Two plantings often beat one: a spring crop, then a late-summer sowing that flowers once nights drop out of the 90s.",
  },
  {
    id: 10,
    name: "Zone 10",
    places: "South Florida, southernmost Texas and California, Hawaii lowlands",
    lastFrost: { month: 1, day: 31 },
    firstFrost: { month: 12, day: 20 },
    frostFree: "Frost is rare",
    model: "year-round",
    blurb:
      "Frost is a visitor, not the season. Peak heat and, on the coast, humidity are what limit the crop. Grow through the milder months.",
  },
  {
    id: 11,
    name: "Zone 11",
    places: "Frost-free tropics",
    lastFrost: null,
    firstFrost: null,
    frostFree: "No frost",
    model: "year-round",
    blurb:
      "Peppers are perennials here. Prune after a heavy flush, give afternoon shade in the hottest months, and keep air moving so leaves stay clean.",
  },
];

export const varieties: Variety[] = [
  {
    id: "lipstick",
    name: "Lipstick",
    species: "annuum",
    heat: "sweet",
    shu: "0",
    days: 60,
    ripe: "Red",
    summary: "A tapered pimento that turns red faster than a blocky bell. One of the surest sweet peppers in a short season.",
    grow: "Stocky plants, thick walls once they color. Start it with your other early annuums, about eight weeks before the last frost.",
  },
  {
    id: "king-of-the-north",
    name: "King of the North",
    species: "annuum",
    heat: "sweet",
    shu: "0",
    days: 68,
    ripe: "Red",
    summary: "An open-pollinated bell selected for northern gardens. It will turn red where a long-season bell stays green.",
    grow: "Give it your warmest soil and don't rush it outside. Cold nights after transplant cost more time than a late sowing.",
  },
  {
    id: "shishito",
    name: "Shishito",
    species: "annuum",
    heat: "mild",
    shu: "50–200",
    days: 60,
    ripe: "Red, but usually eaten green",
    summary: "Thin-walled, blister-in-a-pan peppers. Prolific even when summers stay mild. About one pod in ten has a kick.",
    grow: "Harvest green and often — a plant left to ripen every pod slows down. For seed, leave a few to turn fully red.",
  },
  {
    id: "hungarian-wax",
    name: "Hungarian Wax",
    species: "annuum",
    heat: "medium",
    shu: "1,000–15,000",
    days: 65,
    ripe: "Orange-red",
    summary: "A pale-yellow banana type that sets fruit in cooler weather better than most chiles.",
    grow: "Heat varies pod to pod and rises as they color. Pick yellow for a milder fry, orange-red for seed and a sharper bite.",
  },
  {
    id: "early-jalapeno",
    name: "Early Jalapeño",
    species: "annuum",
    heat: "medium",
    shu: "2,500–8,000",
    days: 65,
    ripe: "Red",
    summary: "The northern jalapeño. It sizes up green early, and it turns red — the stage seed actually needs — before fall.",
    grow: "Green pods are food. They are not mature seed. Mark two plants and let their best fruit go fully red and just soft.",
  },
  {
    id: "cayenne",
    name: "Cayenne",
    species: "annuum",
    heat: "hot",
    shu: "30,000–50,000",
    days: 75,
    ripe: "Red",
    summary: "Thin-walled, easy to dry into flakes, and one of the simplest peppers to clean seed from.",
    grow: "A heavy crop will snap branches. Stake at transplant. Wear gloves once you start cutting ripe fruit.",
  },
  {
    id: "poblano",
    name: "Poblano",
    species: "annuum",
    heat: "mild",
    shu: "1,000–2,000",
    days: 80,
    ripe: "Deep red (ancho)",
    summary: "The big stuffing pepper. Green poblanos come first; the date here is full red, which is when it becomes an ancho and when seed is ripe.",
    grow: "Needs a warm finish to color. In a short season you may eat plenty of green fruit and still miss viable seed.",
  },
  {
    id: "sugar-rush",
    name: "Sugar Rush Peach",
    species: "baccatum",
    heat: "hot",
    shu: "10,000–50,000",
    days: 90,
    ripe: "Peach",
    summary: "A fruity baccatum raised in Wales that colors earlier in cool summers than most ajíes. Published heat ratings vary; treat it as seriously hot.",
    grow: "Tall and rangy, often chest-high. Pale yellow pods are edible, but seed wants the peach stage. Stake hard.",
  },
  {
    id: "aji-amarillo",
    name: "Ají Amarillo",
    species: "baccatum",
    heat: "hot",
    shu: "30,000–50,000",
    days: 100,
    ripe: "Orange",
    summary: "The fruity Andean chile. Tall plants, a long warm season, and a color change you should not rush.",
    grow: "Start two to four weeks earlier than bells. It sulks in cold soil and takes its time turning orange.",
  },
  {
    id: "thai-bird",
    name: "Thai Bird",
    species: "frutescens",
    heat: "hot",
    shu: "50,000–100,000",
    days: 85,
    ripe: "Red",
    summary: "Upright little pods on a woody bush. Hotter than a cayenne, and happy to live for years in a pot.",
    grow: "Don't crowd it. Airflow matters. In frost-free climates it becomes a small perennial shrub.",
  },
  {
    id: "habanero",
    name: "Habanero",
    species: "chinense",
    heat: "extreme",
    shu: "100,000–350,000",
    days: 100,
    ripe: "Orange",
    summary: "Lantern-shaped, floral, and slow. Catalog days assume real heat. Cool nights push ripe fruit toward frost.",
    grow: "Germination can take three weeks at 80–85°F. Start ten to twelve weeks before the last frost. Never handle the pith bare-handed.",
  },
  {
    id: "rocoto",
    name: "Rocoto",
    species: "pubescens",
    heat: "hot",
    shu: "30,000–100,000",
    days: 120,
    ripe: "Red",
    summary: "Apple-shaped, black-seeded, and the pepper that likes cool nights. It barely crosses with anything else in the garden.",
    grow: "Seedlings are slow — start twelve to fourteen weeks out. It tolerates a light frost better than other peppers, not a hard freeze, and it suffers in prolonged heat. A pot you can move is ideal.",
  },
  {
    id: "ghost",
    name: "Bhut Jolokia",
    species: "chinense",
    heat: "extreme",
    shu: "800,000–1,000,000",
    days: 130,
    ripe: "Red",
    summary: "A superhot. It needs an early indoor start, a long warm finish, and respect when you cut it. The dust alone will find your eyes.",
    grow: "Sow with bottom heat and patience. Ripen on the plant until the pod wrinkles slightly. Dry and save seed outdoors or under a fan you don't share with the kitchen.",
  },
];

export const growChapters: GrowChapter[] = [
  {
    id: "sow",
    kicker: "01 — Indoors",
    title: "Start seed warm, then give it light the same day",
    lead: "Peppers fail more often on a cold windowsill than they do in the ground. Germination wants heat. Everything after wants light.",
    points: [
      {
        title: "Sow a quarter-inch deep",
        body: "Use a fine, sterile mix in clean cells. Old, damp seed is the usual reason a tray stays empty. Pepper seed keeps two to five years if it was dried hard and stored cool — test a pinch of anything older before you bet the season on it.",
      },
      {
        title: "Hold the mix at 80–85°F",
        body: "A seedling mat under the tray is worth more than a sunny window. Below about 70°F, annuum germinates slowly and chinense may not germinate at all. Superhots and rocoto can take two to four weeks. Don't dump the tray at day ten.",
      },
      {
        title: "Lights on as soon as the hook shows",
        body: "Fourteen to sixteen hours, with the lamps a couple of inches above the leaves. A window alone makes leggy, blue-stemmed seedlings that stall after transplant. Vent the dome the day they emerge so they don't damp off.",
      },
      {
        title: "Pot up before they stall",
        body: "At two to four true leaves, move them into three- or four-inch pots. A pepper left rootbound in a cell pack can sit sulking for a month after you finally plant it out. Feed lightly once they are growing — half strength, not a nitrogen bath.",
      },
    ],
  },
  {
    id: "plant",
    kicker: "02 — Transplant",
    title: "Wait for the nights, not for the first warm afternoon",
    lead: "A pepper planted into cold soil doesn't grow slowly. It stops. You lose the weeks you thought you were gaining.",
    points: [
      {
        title: "Harden for seven to ten days",
        body: "Shade first, then morning sun, then full days. Bring them in if the night will drop under 50°F. Wind and sun scorch leaves that have never seen either.",
      },
      {
        title: "Plant when nights hold above 55°F",
        body: "Soil should be at least 60°F. In a cool summer, wait longer and use black mulch or a south-facing wall. In a hot climate, don't wait so long that the plants are still tiny when days hit 95°F.",
      },
      {
        title: "Set them level, then stake",
        body: "Plant at the same depth they grew, 18 to 24 inches apart. Smaller chiles can sit a little closer. Water them in. Stake or cage now — an August crop will snap an unsupported branch. Mulch only after the soil is already warm.",
      },
      {
        title: "Zones 1–2 and a tunnel",
        body: "Colder than zone 3, treat peppers as containers you can move, or as a low-tunnel crop of the earliest varieties only. Zones 12 and 13 grow like zone 11: no frost, and heat is the problem to manage.",
      },
    ],
  },
  {
    id: "tend",
    kicker: "03 — The season",
    title: "Even water, modest feed, and flowers that stick",
    lead: "Once they are growing, peppers are less fussy than tomatoes — until the weather swings. Most “my plant won't fruit” stories are temperature or water.",
    points: [
      {
        title: "Water like you mean it to stay even",
        body: "A drought followed by a flood is how blossom-end rot shows up: a dark, sunken patch on the bottom of the fruit. The soil usually has enough calcium. The plant just couldn't move it. Mulch, and water before the leaves flag.",
      },
      {
        title: "Ease off nitrogen at flowering",
        body: "Too much nitrogen builds a beautiful bush and almost no pods. Compost at planting, then a balanced or slightly potassium-leaning feed once flowers open. If the leaves are deep green and huge, stop feeding.",
      },
      {
        title: "When flowers drop, check the weather",
        body: "Blossoms abort when nights sit under about 55°F, when days stay over about 90–95°F, or when the plant is dry. It is not a feeding puzzle. In hot summers, 30% shade cloth after lunch sets more fruit than full sun. In cool summers, every trick is about heat: dark mulch, a wall, a low tunnel until they flower.",
      },
      {
        title: "Pick so the next flush comes",
        body: "A plant holding a full set of ripe pods slows down. Cut fruit with pruners — pulling tears the branch. Green annuum fruit is fine to eat. It is not fine for seed.",
      },
    ],
  },
  {
    id: "trouble",
    kicker: "04 — Troubles",
    title: "The short list of things that actually go wrong",
    lead: "Ignore folklore sprays. These are the problems worth knowing before you save seed from a sick plant.",
    points: [
      {
        title: "Aphids, mites, hornworms",
        body: "Blast aphids with water, then insecticidal soap if they return. Spider mites love hot, dry leaves — raise the humidity around the foliage and wash the undersides. Hornworms announce themselves with dark droppings; pick them off.",
      },
      {
        title: "Sunscald",
        body: "Pale, papery patches on fruit after a hard pruning or a storm strips the canopy. Leave the leaves. The fruit is still edible if you cut the scar out, but don't use scarred, rotting fruit for seed.",
      },
      {
        title: "Virus and bacterial spot",
        body: "Mottled, distorted leaves can be mosaic. Angular spots and scabby fruit can be bacterial spot. Don't save seed from either — some of it travels in the seed. Don't smoke and then handle plants; tobacco mosaic rides on fingers. Avoid overhead watering if you've seen spot.",
      },
      {
        title: "The last weeks",
        body: "Before a hard frost, pick everything usable or pull the plant and hang it in a shed — many pods finish coloring. A favorite can be potted and kept under a bright light. In zones 9–11, healthy plants are perennials if frost doesn't take them.",
      },
    ],
  },
];

export const seedSteps: { id: string; title: string; body: string }[] = [
  {
    id: "op",
    title: "Save from a plant that can come true",
    body: "Open-pollinated and heirloom peppers repeat themselves if the flower met the right pollen. An F1 hybrid will grow, but its children split into a mix of the parents. If the packet says F1, eat the fruit and buy fresh seed. Grocery-store peppers are often hybrids, and they can carry disease. Known seed is a better start.",
  },
  {
    id: "healthy",
    title: "Choose the plant, not just a pretty pod",
    body: "Mark two or three vigorous plants with the flavor, heat, earliness, and shape you want. Save from several fully ripe fruits on those plants, not from a single odd pod. Skip any plant with mosaic, mottled leaves, or scabby bacterial spot.",
  },
  {
    id: "isolate",
    title: "Decide how true the seed needs to be",
    body: "Peppers mostly self-pollinate, and bees still move pollen. For sauce you will eat next year, a little crossing is a story. For seed you want to share, or a variety you love as it is, isolate. The sure home method is a small organza bag over a cluster of buds that have not opened, a clean brush to move pollen inside the bag, and yarn on that fruit so you don't mix it with open-pollinated pods at harvest. Growing only one variety of that species this year works too. Distance alone is wishful on a small lot — bees work the whole block.",
  },
  {
    id: "ripen",
    title: "Let the fruit go past the eating stage",
    body: "Seed is mature only when the pod has reached its ripe color and started to soften: red, orange, yellow, chocolate, or peach, whichever that variety actually becomes. A green jalapeño, a green poblano, and a yellow Sugar Rush that hasn't gone peach will give you weak or dead seed. Leave the chosen fruits on the plant until they yield slightly to a pinch. Don't wait for rot.",
  },
  {
    id: "extract",
    title: "Get the seed off the pith",
    body: "Capsaicin lives in the white pith and smears onto the seed. Wear gloves for anything hotter than a mild paprika, and don't touch your face. Superhots are worse: the dust from drying them is airborne heat. Work where you can wash up, and don't dry ghost peppers in the kitchen.",
  },
  {
    id: "dry",
    title: "Dry until a seed snaps",
    body: "Spread rinsed seed in one layer on a ceramic plate, glass, or a coffee filter. Paper towels glue themselves to the coat. Keep them out of direct sun, with air moving, for one to two weeks. Stir every day. They are done when a seed snaps cleanly instead of bending. Residual moisture is what kills stored pepper seed. A dehydrator is safe only if it can hold under about 95°F. An oven is a good way to cook the embryo.",
  },
  {
    id: "store",
    title: "Label it like you will forget",
    body: "A paper envelope lets the last trace of moisture leave. Put that envelope in a glass jar with a silica pack, or a spoon of dry rice in a tea bag. Write the variety, the species, the year, and whether you isolated the flower. Store it cool, dark, and stable. A refrigerator is fine if the jar stays sealed so condensation never hits the seed. A closet is fine for a year or two. Expect strong germination for two or three years, and usable seed out to about five if it stayed dry.",
  },
  {
    id: "test",
    title: "Test ten seeds before you rely on them",
    body: "In late winter, lay ten seeds on a damp paper towel, slip it into a bag, and set it somewhere steadily warm — about 75–80°F, on a seedling mat if you have one. Check at 7, 14, and 21 days. Eight of ten is a good lot. Four of ten means sow thickly. None means the fruit was green, the seed never dried, or the jar got damp. Chinense and rocoto are slower; give them the full three weeks before you call it.",
  },
];

export const fermentSteps = [
  "Scrape the seeds and the gel around them into a jar. You don't need the whole pith.",
  "Add just enough water to make a slurry, about the same volume as the seeds. Cover loosely.",
  "Leave it at room temperature for two to four days. Stir once a day. A light film and a sour smell are normal. A rotten smell means start over.",
  "Stop by day four. Longer than that and the seed may sprout in the jar.",
  "Pour off the film. Viable seeds usually sink — useful, not perfect. Rinse in a fine sieve until the water runs clear.",
];

export const dryMethodSteps = [
  "Scrape seeds straight onto a plate. Rinse them in a fine sieve if you want less heat left on the coat.",
  "Skip fermentation if you only have a pod or two and the seeds are already easy to clean. Thin-walled cayennes and Thai peppers often don't need it.",
  "Thick-walled bells and jalapeños shed their gel more cleanly if you ferment, and a short ferment also reduces some seed-borne problems.",
];

export function zoneById(id: number): Zone {
  return zones.find((zone) => zone.id === id) ?? zones[3];
}

export function varietyById(id: string): Variety {
  return varieties.find((variety) => variety.id === id) ?? varieties[4];
}
