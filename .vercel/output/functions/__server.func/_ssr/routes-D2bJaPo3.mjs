import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Droplets, c as Bug, i as Leaf, n as Sun, o as Copy, r as Sprout, s as Check } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D2bJaPo3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var summers = [
	{
		id: "cool",
		label: "Cool",
		hint: "Maritime or high-elevation. Nights stay cool and color comes late."
	},
	{
		id: "moderate",
		label: "Moderate",
		hint: "A real warm season, without months stuck above 95°F."
	},
	{
		id: "hot",
		label: "Hot",
		hint: "Long stretches of extreme heat. Midsummer flowers often drop."
	}
];
var heatLabels = {
	sweet: "Sweet",
	mild: "Mild",
	medium: "Medium",
	hot: "Hot",
	extreme: "Extreme"
};
var species = {
	annuum: {
		id: "annuum",
		latin: "Capsicum annuum",
		short: "annuum",
		examples: "bells, jalapeños, cayennes, poblanos, shishitos",
		cross: "Crosses easily with other annuum. Now and then with chinense and frutescens."
	},
	chinense: {
		id: "chinense",
		latin: "Capsicum chinense",
		short: "chinense",
		examples: "habaneros, Scotch bonnets, ghost peppers",
		cross: "Crosses easily with other chinense. Occasionally with annuum and frutescens."
	},
	baccatum: {
		id: "baccatum",
		latin: "Capsicum baccatum",
		short: "baccatum",
		examples: "ají amarillo, Sugar Rush, lemon drop",
		cross: "Crosses with other baccatum. Much less willing to cross with the common garden peppers."
	},
	frutescens: {
		id: "frutescens",
		latin: "Capsicum frutescens",
		short: "frutescens",
		examples: "tabasco and many Thai bird chiles",
		cross: "Crosses with other frutescens. Occasional crosses with annuum and chinense happen."
	},
	pubescens: {
		id: "pubescens",
		latin: "Capsicum pubescens",
		short: "pubescens",
		examples: "rocoto and manzano",
		cross: "Essentially does not cross with the other domesticated peppers. Black seeds are the tell."
	}
};
var zones = [
	{
		id: 3,
		name: "Zone 3",
		places: "Northern Plains, high Rockies, interior Maine",
		lastFrost: {
			month: 6,
			day: 8
		},
		firstFrost: {
			month: 9,
			day: 8
		},
		frostFree: "About 90 frost-free days",
		model: "seasonal",
		blurb: "A short, bright summer. Only the earliest sweet and mild peppers finish outdoors, and they want a south wall, dark mulch, and an early start under lights."
	},
	{
		id: 4,
		name: "Zone 4",
		places: "Upper Midwest, northern New England",
		lastFrost: {
			month: 5,
			day: 22
		},
		firstFrost: {
			month: 9,
			day: 22
		},
		frostFree: "About 120 frost-free days",
		model: "seasonal",
		blurb: "Early bells, shishitos, and jalapeños are realistic. Superhots are a pot you finish indoors, not a bed crop."
	},
	{
		id: 5,
		name: "Zone 5",
		places: "Lower Midwest, southern New England, Rocky Mountain foothills",
		lastFrost: {
			month: 5,
			day: 10
		},
		firstFrost: {
			month: 10,
			day: 8
		},
		frostFree: "About 150 frost-free days",
		model: "seasonal",
		blurb: "The classic pepper season if you start indoors. Most annuums thrive. Habaneros need the earliest start and your warmest spot."
	},
	{
		id: 6,
		name: "Zone 6",
		places: "Mid-Atlantic piedmont, lower Midwest, interior Northwest",
		lastFrost: {
			month: 4,
			day: 22
		},
		firstFrost: {
			month: 10,
			day: 20
		},
		frostFree: "About 180 frost-free days",
		model: "seasonal",
		blurb: "Room for bells through habaneros. A cool maritime summer still behaves like a shorter zone — that is what the summer control is for."
	},
	{
		id: 7,
		name: "Zone 7",
		places: "Upper South, mid-Atlantic, southern Appalachians",
		lastFrost: {
			month: 4,
			day: 8
		},
		firstFrost: {
			month: 11,
			day: 1
		},
		frostFree: "About 200 frost-free days",
		model: "seasonal",
		blurb: "Long enough for chinense and baccatum to color fully. Inland heat can still knock flowers off in July and August."
	},
	{
		id: 8,
		name: "Zone 8",
		places: "Lower South, Texas hill country, Pacific Northwest lowlands, central California",
		lastFrost: {
			month: 3,
			day: 22
		},
		firstFrost: {
			month: 11,
			day: 15
		},
		frostFree: "About 230 frost-free days",
		model: "seasonal",
		blurb: "Winters are mild. Summers are not one climate. A zone 8 garden in Seattle and one in Houston need opposite advice."
	},
	{
		id: 9,
		name: "Zone 9",
		places: "Gulf Coast, central Florida, southern California valleys, southern Texas",
		lastFrost: {
			month: 2,
			day: 20
		},
		firstFrost: {
			month: 12,
			day: 1
		},
		frostFree: "About 280 frost-free days",
		model: "seasonal",
		blurb: "Two plantings often beat one: a spring crop, then a late-summer sowing that flowers once nights drop out of the 90s."
	},
	{
		id: 10,
		name: "Zone 10",
		places: "South Florida, southernmost Texas and California, Hawaii lowlands",
		lastFrost: {
			month: 1,
			day: 31
		},
		firstFrost: {
			month: 12,
			day: 20
		},
		frostFree: "Frost is rare",
		model: "year-round",
		blurb: "Frost is a visitor, not the season. Peak heat and, on the coast, humidity are what limit the crop. Grow through the milder months."
	},
	{
		id: 11,
		name: "Zone 11",
		places: "Frost-free tropics",
		lastFrost: null,
		firstFrost: null,
		frostFree: "No frost",
		model: "year-round",
		blurb: "Peppers are perennials here. Prune after a heavy flush, give afternoon shade in the hottest months, and keep air moving so leaves stay clean."
	}
];
var varieties = [
	{
		id: "lipstick",
		name: "Lipstick",
		species: "annuum",
		heat: "sweet",
		shu: "0",
		days: 60,
		ripe: "Red",
		summary: "A tapered pimento that turns red faster than a blocky bell. One of the surest sweet peppers in a short season.",
		grow: "Stocky plants, thick walls once they color. Start it with your other early annuums, about eight weeks before the last frost."
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
		grow: "Give it your warmest soil and don't rush it outside. Cold nights after transplant cost more time than a late sowing."
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
		grow: "Harvest green and often — a plant left to ripen every pod slows down. For seed, leave a few to turn fully red."
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
		grow: "Heat varies pod to pod and rises as they color. Pick yellow for a milder fry, orange-red for seed and a sharper bite."
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
		grow: "Green pods are food. They are not mature seed. Mark two plants and let their best fruit go fully red and just soft."
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
		grow: "A heavy crop will snap branches. Stake at transplant. Wear gloves once you start cutting ripe fruit."
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
		grow: "Needs a warm finish to color. In a short season you may eat plenty of green fruit and still miss viable seed."
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
		grow: "Tall and rangy, often chest-high. Pale yellow pods are edible, but seed wants the peach stage. Stake hard."
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
		grow: "Start two to four weeks earlier than bells. It sulks in cold soil and takes its time turning orange."
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
		grow: "Don't crowd it. Airflow matters. In frost-free climates it becomes a small perennial shrub."
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
		grow: "Germination can take three weeks at 80–85°F. Start ten to twelve weeks before the last frost. Never handle the pith bare-handed."
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
		grow: "Seedlings are slow — start twelve to fourteen weeks out. It tolerates a light frost better than other peppers, not a hard freeze, and it suffers in prolonged heat. A pot you can move is ideal."
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
		grow: "Sow with bottom heat and patience. Ripen on the plant until the pod wrinkles slightly. Dry and save seed outdoors or under a fan you don't share with the kitchen."
	}
];
var growChapters = [
	{
		id: "sow",
		kicker: "01 — Indoors",
		title: "Start seed warm, then give it light the same day",
		lead: "Peppers fail more often on a cold windowsill than they do in the ground. Germination wants heat. Everything after wants light.",
		points: [
			{
				title: "Sow a quarter-inch deep",
				body: "Use a fine, sterile mix in clean cells. Old, damp seed is the usual reason a tray stays empty. Pepper seed keeps two to five years if it was dried hard and stored cool — test a pinch of anything older before you bet the season on it."
			},
			{
				title: "Hold the mix at 80–85°F",
				body: "A seedling mat under the tray is worth more than a sunny window. Below about 70°F, annuum germinates slowly and chinense may not germinate at all. Superhots and rocoto can take two to four weeks. Don't dump the tray at day ten."
			},
			{
				title: "Lights on as soon as the hook shows",
				body: "Fourteen to sixteen hours, with the lamps a couple of inches above the leaves. A window alone makes leggy, blue-stemmed seedlings that stall after transplant. Vent the dome the day they emerge so they don't damp off."
			},
			{
				title: "Pot up before they stall",
				body: "At two to four true leaves, move them into three- or four-inch pots. A pepper left rootbound in a cell pack can sit sulking for a month after you finally plant it out. Feed lightly once they are growing — half strength, not a nitrogen bath."
			}
		]
	},
	{
		id: "plant",
		kicker: "02 — Transplant",
		title: "Wait for the nights, not for the first warm afternoon",
		lead: "A pepper planted into cold soil doesn't grow slowly. It stops. You lose the weeks you thought you were gaining.",
		points: [
			{
				title: "Harden for seven to ten days",
				body: "Shade first, then morning sun, then full days. Bring them in if the night will drop under 50°F. Wind and sun scorch leaves that have never seen either."
			},
			{
				title: "Plant when nights hold above 55°F",
				body: "Soil should be at least 60°F. In a cool summer, wait longer and use black mulch or a south-facing wall. In a hot climate, don't wait so long that the plants are still tiny when days hit 95°F."
			},
			{
				title: "Set them level, then stake",
				body: "Plant at the same depth they grew, 18 to 24 inches apart. Smaller chiles can sit a little closer. Water them in. Stake or cage now — an August crop will snap an unsupported branch. Mulch only after the soil is already warm."
			},
			{
				title: "Zones 1–2 and a tunnel",
				body: "Colder than zone 3, treat peppers as containers you can move, or as a low-tunnel crop of the earliest varieties only. Zones 12 and 13 grow like zone 11: no frost, and heat is the problem to manage."
			}
		]
	},
	{
		id: "tend",
		kicker: "03 — The season",
		title: "Even water, modest feed, and flowers that stick",
		lead: "Once they are growing, peppers are less fussy than tomatoes — until the weather swings. Most “my plant won't fruit” stories are temperature or water.",
		points: [
			{
				title: "Water like you mean it to stay even",
				body: "A drought followed by a flood is how blossom-end rot shows up: a dark, sunken patch on the bottom of the fruit. The soil usually has enough calcium. The plant just couldn't move it. Mulch, and water before the leaves flag."
			},
			{
				title: "Ease off nitrogen at flowering",
				body: "Too much nitrogen builds a beautiful bush and almost no pods. Compost at planting, then a balanced or slightly potassium-leaning feed once flowers open. If the leaves are deep green and huge, stop feeding."
			},
			{
				title: "When flowers drop, check the weather",
				body: "Blossoms abort when nights sit under about 55°F, when days stay over about 90–95°F, or when the plant is dry. It is not a feeding puzzle. In hot summers, 30% shade cloth after lunch sets more fruit than full sun. In cool summers, every trick is about heat: dark mulch, a wall, a low tunnel until they flower."
			},
			{
				title: "Pick so the next flush comes",
				body: "A plant holding a full set of ripe pods slows down. Cut fruit with pruners — pulling tears the branch. Green annuum fruit is fine to eat. It is not fine for seed."
			}
		]
	},
	{
		id: "trouble",
		kicker: "04 — Troubles",
		title: "The short list of things that actually go wrong",
		lead: "Ignore folklore sprays. These are the problems worth knowing before you save seed from a sick plant.",
		points: [
			{
				title: "Aphids, mites, hornworms",
				body: "Blast aphids with water, then insecticidal soap if they return. Spider mites love hot, dry leaves — raise the humidity around the foliage and wash the undersides. Hornworms announce themselves with dark droppings; pick them off."
			},
			{
				title: "Sunscald",
				body: "Pale, papery patches on fruit after a hard pruning or a storm strips the canopy. Leave the leaves. The fruit is still edible if you cut the scar out, but don't use scarred, rotting fruit for seed."
			},
			{
				title: "Virus and bacterial spot",
				body: "Mottled, distorted leaves can be mosaic. Angular spots and scabby fruit can be bacterial spot. Don't save seed from either — some of it travels in the seed. Don't smoke and then handle plants; tobacco mosaic rides on fingers. Avoid overhead watering if you've seen spot."
			},
			{
				title: "The last weeks",
				body: "Before a hard frost, pick everything usable or pull the plant and hang it in a shed — many pods finish coloring. A favorite can be potted and kept under a bright light. In zones 9–11, healthy plants are perennials if frost doesn't take them."
			}
		]
	}
];
var seedSteps = [
	{
		id: "op",
		title: "Save from a plant that can come true",
		body: "Open-pollinated and heirloom peppers repeat themselves if the flower met the right pollen. An F1 hybrid will grow, but its children split into a mix of the parents. If the packet says F1, eat the fruit and buy fresh seed. Grocery-store peppers are often hybrids, and they can carry disease. Known seed is a better start."
	},
	{
		id: "healthy",
		title: "Choose the plant, not just a pretty pod",
		body: "Mark two or three vigorous plants with the flavor, heat, earliness, and shape you want. Save from several fully ripe fruits on those plants, not from a single odd pod. Skip any plant with mosaic, mottled leaves, or scabby bacterial spot."
	},
	{
		id: "isolate",
		title: "Decide how true the seed needs to be",
		body: "Peppers mostly self-pollinate, and bees still move pollen. For sauce you will eat next year, a little crossing is a story. For seed you want to share, or a variety you love as it is, isolate. The sure home method is a small organza bag over a cluster of buds that have not opened, a clean brush to move pollen inside the bag, and yarn on that fruit so you don't mix it with open-pollinated pods at harvest. Growing only one variety of that species this year works too. Distance alone is wishful on a small lot — bees work the whole block."
	},
	{
		id: "ripen",
		title: "Let the fruit go past the eating stage",
		body: "Seed is mature only when the pod has reached its ripe color and started to soften: red, orange, yellow, chocolate, or peach, whichever that variety actually becomes. A green jalapeño, a green poblano, and a yellow Sugar Rush that hasn't gone peach will give you weak or dead seed. Leave the chosen fruits on the plant until they yield slightly to a pinch. Don't wait for rot."
	},
	{
		id: "extract",
		title: "Get the seed off the pith",
		body: "Capsaicin lives in the white pith and smears onto the seed. Wear gloves for anything hotter than a mild paprika, and don't touch your face. Superhots are worse: the dust from drying them is airborne heat. Work where you can wash up, and don't dry ghost peppers in the kitchen."
	},
	{
		id: "dry",
		title: "Dry until a seed snaps",
		body: "Spread rinsed seed in one layer on a ceramic plate, glass, or a coffee filter. Paper towels glue themselves to the coat. Keep them out of direct sun, with air moving, for one to two weeks. Stir every day. They are done when a seed snaps cleanly instead of bending. Residual moisture is what kills stored pepper seed. A dehydrator is safe only if it can hold under about 95°F. An oven is a good way to cook the embryo."
	},
	{
		id: "store",
		title: "Label it like you will forget",
		body: "A paper envelope lets the last trace of moisture leave. Put that envelope in a glass jar with a silica pack, or a spoon of dry rice in a tea bag. Write the variety, the species, the year, and whether you isolated the flower. Store it cool, dark, and stable. A refrigerator is fine if the jar stays sealed so condensation never hits the seed. A closet is fine for a year or two. Expect strong germination for two or three years, and usable seed out to about five if it stayed dry."
	},
	{
		id: "test",
		title: "Test ten seeds before you rely on them",
		body: "In late winter, lay ten seeds on a damp paper towel, slip it into a bag, and set it somewhere steadily warm — about 75–80°F, on a seedling mat if you have one. Check at 7, 14, and 21 days. Eight of ten is a good lot. Four of ten means sow thickly. None means the fruit was green, the seed never dried, or the jar got damp. Chinense and rocoto are slower; give them the full three weeks before you call it."
	}
];
var fermentSteps = [
	"Scrape the seeds and the gel around them into a jar. You don't need the whole pith.",
	"Add just enough water to make a slurry, about the same volume as the seeds. Cover loosely.",
	"Leave it at room temperature for two to four days. Stir once a day. A light film and a sour smell are normal. A rotten smell means start over.",
	"Stop by day four. Longer than that and the seed may sprout in the jar.",
	"Pour off the film. Viable seeds usually sink — useful, not perfect. Rinse in a fine sieve until the water runs clear."
];
var dryMethodSteps = [
	"Scrape seeds straight onto a plate. Rinse them in a fine sieve if you want less heat left on the coat.",
	"Skip fermentation if you only have a pod or two and the seeds are already easy to clean. Thin-walled cayennes and Thai peppers often don't need it.",
	"Thick-walled bells and jalapeños shed their gel more cleanly if you ferment, and a short ferment also reduces some seed-borne problems."
];
function zoneById(id) {
	return zones.find((zone) => zone.id === id) ?? zones[3];
}
function varietyById(id) {
	return varieties.find((variety) => variety.id === id) ?? varieties[4];
}
var DIM = [
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
];
var MONTHS = [
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
	"December"
];
function toDoy(date) {
	let n = date.day;
	for (let i = 0; i < date.month - 1; i++) n += DIM[i];
	return n;
}
function formatDoy(doy) {
	let n = ((doy - 1) % 365 + 365) % 365 + 1;
	for (let i = 0; i < 12; i++) {
		if (n <= DIM[i]) return `${MONTHS[i]} ${n}`;
		n -= DIM[i];
	}
	return "December 31";
}
function formatMonthDay(date, empty) {
	if (!date) return empty;
	return `${MONTHS[date.month - 1]} ${date.day}`;
}
function indoorWeeks(variety, summer) {
	let weeks = variety.days >= 110 ? 12 : variety.days >= 90 ? 10 : 8;
	if (variety.species === "pubescens") weeks = Math.max(weeks, 12);
	if (summer === "cool") weeks += 2;
	if (summer === "hot" && weeks > 8) weeks -= 1;
	return weeks;
}
function ripeDelay(variety, summer) {
	if (summer === "cool") return Math.round(variety.days * .3);
	if (summer === "hot" && variety.species === "pubescens") return 21;
	if (summer === "moderate" && (variety.species === "chinense" || variety.species === "baccatum" || variety.days >= 100)) return 14;
	return 0;
}
function transplantLag(summer) {
	if (summer === "cool") return 21;
	if (summer === "hot") return 7;
	return 14;
}
function summerHint(summer) {
	return summers.find((item) => item.id === summer)?.hint ?? "";
}
function planFor(zone, summer, variety) {
	const weeks = indoorWeeks(variety, summer);
	const caution = cautionFor(zone, summer, variety);
	if (!zone.lastFrost || !zone.firstFrost) return {
		verdict: "perennial",
		verdictTitle: "Year-round",
		verdictBody: `No frost to race. ${variety.name} can live for years if you prune after a flush and keep the roots from baking.`,
		caution,
		sow: "Any mild month",
		sowDetail: `Start seed when nights sit near 65–75°F. Give ${variety.name} about ${weeks} weeks under lights before it is sturdy enough to plant.`,
		transplant: "At 6–8 true leaves",
		transplantDetail: "Move it into warm soil and out of the harshest midday sun for the first week. A pepper checked by transplant shock loses more time than a careful hardening.",
		ripe: `About ${variety.days} days after transplant`,
		ripeDetail: summer === "hot" ? "Peak heat slows fruit set. A plant that flowers before or after the hottest stretch ripens more reliably than one that blooms in it." : "With no frost, the limits are heat, water, and disease. Fully ripe color is still the moment the seed is mature.",
		transplantDoy: null,
		ripeDoy: null,
		frostDoy: null,
		indoorWeeks: weeks
	};
	const last = toDoy(zone.lastFrost);
	const first = toDoy(zone.firstFrost);
	const lag = transplantLag(summer);
	const delay = ripeDelay(variety, summer);
	const sowDoy = last - weeks * 7;
	const transplantDoy = last + lag;
	const ripeDoy = transplantDoy + variety.days + delay;
	const slack = first - ripeDoy;
	let verdict = "comfortable";
	if (slack < 0) verdict = "unlikely";
	else if (slack < 21) verdict = "tight";
	const titles = {
		comfortable: "Comfortable",
		tight: "Tight",
		unlikely: "Unlikely outdoors"
	};
	const bodies = {
		comfortable: `${variety.name} should reach ripe color with time to spare before a typical first frost in ${zone.name.toLowerCase()}.`,
		tight: `${variety.name} can finish, but only if you sow on time and the fall stays mild. Keep a pot ready in case frost comes early.`,
		unlikely: `${variety.name} wants more warm weeks than a typical ${zone.name.toLowerCase()} season gives. Grow it in a container you can bring inside, or pick a shorter pepper.`
	};
	const heatNote = delay > 0 ? ` Catalog days are ${variety.days} from transplant; this plan adds ${delay} days because ${summer === "cool" ? "cool summers slow ripening" : "this type ripens slowly without steady heat"}.` : ` Catalog timing is ${variety.days} days from transplant.`;
	return {
		verdict,
		verdictTitle: titles[verdict],
		verdictBody: bodies[verdict],
		caution,
		sow: `Around ${formatDoy(sowDoy)}`,
		sowDetail: `About ${weeks} weeks before a typical last frost. Sow a few extra cells — ${species[variety.species].short} seed is cheap insurance.`,
		transplant: `Around ${formatDoy(transplantDoy)}`,
		transplantDetail: summer === "cool" ? "Three weeks after the last frost, once soil is actually warm. A cold bed in a cool summer stalls peppers harder than a late planting." : summer === "hot" ? "About a week after the last frost if nights are already mild, so the plants are large before the worst heat." : "About two weeks after the last frost, when nights stay above 55°F.",
		ripe: `Around ${formatDoy(ripeDoy)}`,
		ripeDetail: `Fully ripe ${variety.ripe.toLowerCase()} fruit — the stage for both flavor and seed.${heatNote}`,
		transplantDoy,
		ripeDoy,
		frostDoy: first,
		indoorWeeks: weeks
	};
}
function cautionFor(zone, summer, variety) {
	if (variety.species === "pubescens" && summer === "hot") return "Rocoto likes cool nights and struggles in prolonged heat. Give it afternoon shade, or grow it through the milder months.";
	if (summer === "hot" && zone.id >= 8) return "Afternoons over about 95°F drop flowers. Shade after lunch, keep water even, and a late-summer planting often beats one crop that tries to bloom in the heat.";
	if (summer === "cool") return "Cool summers add weeks. Use a south wall, dark mulch once the soil has warmed, and don't trust a long-season catalog date.";
	return null;
}
function barPercent(doy) {
	return Math.min(100, Math.max(0, (doy - 1) / 365 * 100));
}
var usePrefs = create()(persist((set) => ({
	zoneId: 6,
	summer: "moderate",
	varietyId: "early-jalapeno",
	fitsOnly: true,
	heat: "all",
	method: "ferment",
	checks: [],
	setZoneId: (zoneId) => set({ zoneId }),
	setSummer: (summer) => set({ summer }),
	setVarietyId: (varietyId) => set({ varietyId }),
	setFitsOnly: (fitsOnly) => set({ fitsOnly }),
	setHeat: (heat) => set({ heat }),
	setMethod: (method) => set({ method }),
	toggleCheck: (id) => set((state) => ({ checks: state.checks.includes(id) ? state.checks.filter((item) => item !== id) : [...state.checks, id] }))
}), {
	name: "pepper-almanac",
	skipHydration: true
}));
var icons = {
	sow: Sprout,
	plant: Sun,
	tend: Droplets,
	trouble: Bug
};
function GrowPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "grow",
		className: "scroll-mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-chile-ink uppercase",
				children: "In the ground"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 max-w-2xl text-4xl font-semibold text-ink",
				children: "How a pepper season actually goes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-lg text-muted",
				children: "Same plant from zone 3 to the tropics. What changes is the start date, the heat, and whether frost or a 98°F afternoon ends the fruit set first."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "overflow-hidden rounded-2xl border border-line bg-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/guide/seedlings.jpg",
						alt: "Pepper seedlings with their first true leaves in a wooden tray",
						className: "aspect-3/2 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "px-4 py-3 text-sm text-muted",
						children: "True leaves mean it is time to pot up. A rootbound cell pack stalls after transplant."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "overflow-hidden rounded-2xl border border-line bg-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/guide/garden.jpg",
						alt: "Pepper plants heavy with red and orange fruit in a mulched raised bed",
						className: "aspect-3/2 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "px-4 py-3 text-sm text-muted",
						children: "Ripe color is the harvest that matters for seed. Green fruit is food, not next year's plants."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5",
				children: growChapters.map((chapter) => {
					const Icon = icons[chapter.id] ?? Sprout;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-line bg-paper p-5 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-11 shrink-0 items-center justify-center rounded-full bg-leaf-soft text-leaf",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold tracking-widest text-chile-ink uppercase",
									children: chapter.kicker
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-2xl font-semibold text-ink",
									children: chapter.title
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-3xl text-muted",
								children: chapter.lead
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 grid gap-0 sm:grid-cols-2 sm:gap-x-8",
								children: chapter.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "border-t border-line py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-sans text-base font-semibold text-ink",
										children: point.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: point.body
									})]
								}, point.title))
							})
						]
					}, chapter.id);
				})
			})
		]
	});
}
var heats = [
	"all",
	"sweet",
	"mild",
	"medium",
	"hot",
	"extreme"
];
var verdictClass = {
	comfortable: "bg-leaf-soft text-leaf",
	tight: "bg-paper text-chile-ink ring-1 ring-chile",
	unlikely: "bg-parchment text-muted ring-1 ring-line",
	perennial: "bg-leaf-soft text-leaf"
};
function SeasonPanel({ zone, summer, variety, fitsOnly, heat, onVariety, onFitsOnly, onHeat }) {
	const plan = planFor(zone, summer, variety);
	const visible = (0, import_react.useMemo)(() => varieties.map((item) => ({
		item,
		plan: planFor(zone, summer, item)
	})), [zone, summer]).filter(({ item, plan: itemPlan }) => {
		if (item.id === variety.id) return true;
		if (heat !== "all" && item.heat !== heat) return false;
		if (fitsOnly && itemPlan.verdict === "unlikely") return false;
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "season",
		className: "scroll-mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-chile-ink uppercase",
				children: "The season"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 max-w-2xl text-4xl font-semibold text-ink",
				children: "When this pepper actually finishes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-lg text-muted",
				children: "Dates are for fully ripe color, which is also when the seed is mature. Green jalapeños and poblanos can be eaten earlier. Frost dates are typical midpoints for the zone, not a forecast for your town."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-line bg-paper p-5 sm:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-3xl font-semibold text-ink",
								children: variety.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted",
								children: [
									heatLabels[variety.heat],
									" · ",
									variety.shu,
									" SHU · ",
									variety.days,
									" days from transplant"
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full px-3 py-1 text-sm font-semibold ${verdictClass[plan.verdict]}`,
								children: plan.verdictTitle
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-ink",
							children: plan.verdictBody
						}),
						plan.caution ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-chile-ink",
							children: plan.caution
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "mt-6 grid gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Milestone, {
									kicker: "Sow indoors",
									when: plan.sow,
									detail: plan.sowDetail
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Milestone, {
									kicker: "Transplant",
									when: plan.transplant,
									detail: plan.transplantDetail
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Milestone, {
									kicker: "Ripe color",
									when: plan.ripe,
									detail: plan.ripeDetail
								})
							]
						}),
						plan.transplantDoy && plan.ripeDoy && plan.frostDoy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeasonBar, {
							transplantDoy: plan.transplantDoy,
							ripeDoy: plan.ripeDoy,
							frostDoy: plan.frostDoy
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 border-t border-line pt-4 text-sm text-muted",
							children: "No frost line to draw. Time the crop around heat instead of a last-frost date."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm text-muted",
							children: variety.grow
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						role: "group",
						"aria-label": "Filter by heat",
						children: heats.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": heat === item,
							onClick: () => onHeat(item),
							className: `min-h-11 rounded-full border px-3 text-sm font-semibold transition-colors ${heat === item ? "border-chile bg-chile text-paper" : "border-line bg-paper text-ink hover:border-chile"}`,
							children: item === "all" ? "All heat" : heatLabels[item]
						}, item))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": fitsOnly,
						onClick: () => onFitsOnly(!fitsOnly),
						className: `min-h-11 rounded-full border px-3 text-left text-sm font-semibold transition-colors ${fitsOnly ? "border-leaf bg-leaf text-paper" : "border-line bg-paper text-ink"}`,
						children: fitsOnly ? "Showing what can ripen" : "Showing every variety"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3",
					children: visible.map(({ item, plan: itemPlan }) => {
						const selected = item.id === variety.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onVariety(item.id),
							"aria-pressed": selected,
							className: `w-full rounded-2xl border p-4 text-left transition-colors ${selected ? "border-chile bg-paper" : "border-line bg-paper hover:border-chile"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-xl font-semibold text-ink",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-1 block text-sm text-muted",
									children: [
										heatLabels[item.heat],
										" · ripens ",
										item.ripe.toLowerCase(),
										" · ",
										item.days,
										" days"
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${verdictClass[itemPlan.verdict]}`,
									children: itemPlan.verdictTitle
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-sm text-muted",
								children: item.summary
							})]
						}) }, item.id);
					})
				})] })]
			})
		]
	});
}
function Milestone({ kicker, when, detail }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "border-t border-line pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-muted uppercase",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-2xl font-semibold text-ink tabular-nums",
				children: when
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: detail
			})
		]
	});
}
function SeasonBar({ transplantDoy, ripeDoy, frostDoy }) {
	const start = barPercent(transplantDoy);
	const end = barPercent(Math.min(ripeDoy, 365));
	const frost = barPercent(frostDoy);
	const width = Math.max(1.5, end - start);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 border-t border-line pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-3 rounded-full bg-line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-0 h-3 rounded-full bg-leaf",
					style: {
						left: `${start}%`,
						width: `${width}%`
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-0 h-3 w-0.5 bg-chile",
					style: { left: `${frost}%` }
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex justify-between text-xs text-muted tabular-nums",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Jan" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mar" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "May" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Jul" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sep" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nov" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted",
				children: "Green is transplant to ripe color. The red mark is a typical first frost."
			})
		]
	});
}
function SeedPanel({ zone, variety, method, checks, onMethod, onToggle }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const info = species[variety.species];
	const done = seedSteps.filter((step) => checks.includes(step.id)).length;
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	const isolated = checks.includes("isolate");
	const label = [
		variety.name,
		`${info.latin} · open-pollinated`,
		`Saved ${year} · ${zone.name}`,
		isolated ? "Flower bagged / isolated" : "Open flowers — may have crossed",
		method === "ferment" ? "Seed fermented, rinsed, and dried" : "Seed rinsed and dried",
		"Store cool, dark, and dry."
	].join("\n");
	async function copyLabel() {
		try {
			await navigator.clipboard.writeText(label);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 2e3);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "seed",
		className: "scroll-mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-chile-ink uppercase",
				children: "Harvest the seed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 max-w-2xl text-4xl font-semibold text-ink",
				children: "Seed worth sowing is ripe, dry, and named"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-2xl text-lg text-muted",
				children: [
					"The fruit you eat green is not the fruit you save. Work through ",
					variety.name,
					". The checks stay on this device."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "overflow-hidden rounded-2xl border border-line bg-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/guide/seeds.jpg",
						alt: "A ripe red pepper opened on a plate, with seeds, a jar, and a paper envelope",
						className: "aspect-3/2 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "px-4 py-3 text-sm text-muted",
						children: "Fully colored, just softening, then cleaned and dried until a seed snaps."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-dashed border-line bg-paper p-5 sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-muted uppercase",
							children: "Packet label"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "mt-3 font-sans text-base leading-relaxed whitespace-pre-wrap text-ink",
							children: label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: copyLabel,
							className: "mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-chile px-4 text-sm font-semibold text-paper transition-colors hover:bg-chile-ink",
							children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-4",
								"aria-hidden": "true"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
								className: "size-4",
								"aria-hidden": "true"
							}), copied ? "Copied" : "Copy label"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-muted tabular-nums",
							children: [
								done,
								" of ",
								seedSteps.length,
								" steps checked"
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-5 rounded-2xl border border-line bg-paper p-5 sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-semibold text-ink",
						children: "Who this flower can meet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-muted",
						children: [
							variety.name,
							" is ",
							info.latin,
							". It sits with ",
							info.examples,
							". ",
							info.cross,
							" Bagging one cluster is more reliable than hoping the next bed is far enough."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[36rem] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-line text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-4 font-semibold",
										children: "Species"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-4 font-semibold",
										children: "You'll know them as"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-semibold",
										children: "Seed note"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: Object.values(species).map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: `border-b border-line ${row.id === variety.species ? "text-ink" : "text-muted"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 pr-4 font-semibold",
										children: row.latin.replace("Capsicum ", "C. ")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 pr-4",
										children: row.examples
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3",
										children: row.cross
									})
								]
							}, row.id)) })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": method === "ferment",
					onClick: () => onMethod("ferment"),
					className: `min-h-11 rounded-2xl border p-4 text-left ${method === "ferment" ? "border-chile bg-paper" : "border-line bg-paper"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-xl font-semibold text-ink",
						children: "Ferment, then dry"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm text-muted",
						children: "Best for bells, jalapeños, and any pod with a lot of gel. Two to four days, no longer."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": method === "dry",
					onClick: () => onMethod("dry"),
					className: `min-h-11 rounded-2xl border p-4 text-left ${method === "dry" ? "border-chile bg-paper" : "border-line bg-paper"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-xl font-semibold text-ink",
						children: "Rinse and dry"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm text-muted",
						children: "Enough for a few thin-walled pods. Still dry them until they snap."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-5 grid gap-3",
				children: (method === "ferment" ? fermentSteps : dryMethodSteps).map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl border border-line bg-paper px-4 py-3 text-sm text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-2 font-semibold text-chile-ink tabular-nums",
						children: index + 1
					}), step]
				}, step))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-5 grid gap-3",
				children: seedSteps.map((step, index) => {
					const on = checks.includes(step.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": on,
						onClick: () => onToggle(step.id),
						className: `flex w-full gap-3 rounded-2xl border bg-paper p-4 text-left sm:p-5 ${on ? "border-leaf" : "border-line"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `mt-1 flex size-5 shrink-0 items-center justify-center rounded border ${on ? "border-leaf bg-leaf text-paper" : "border-line bg-paper"}`,
							"aria-hidden": "true",
							children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : null
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block font-display text-xl font-semibold text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mr-2 text-muted tabular-nums",
								children: index + 1
							}), step.title]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-sm text-muted",
							children: step.body
						})] })]
					}) }, step.id);
				})
			})
		]
	});
}
function Almanac() {
	const prefs = usePrefs();
	(0, import_react.useEffect)(() => {
		usePrefs.persist.rehydrate();
	}, []);
	const zone = zoneById(prefs.zoneId);
	const variety = varietyById(prefs.varietyId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-parchment text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 bg-chile" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-line bg-parchment",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex min-h-11 items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
							className: "size-5 text-leaf",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-semibold tracking-tight",
							children: "The Pepper Almanac"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex items-center gap-1 text-sm font-semibold sm:gap-3",
						"aria-label": "Guide",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "inline-flex min-h-11 items-center px-2 hover:text-chile-ink",
								href: "#season",
								children: "Season"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "inline-flex min-h-11 items-center px-2 hover:text-chile-ink",
								href: "#grow",
								children: "Grow"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "inline-flex min-h-11 items-center px-2 hover:text-chile-ink",
								href: "#seed",
								children: "Seed"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				className: "mx-auto max-w-6xl px-4 pt-10 pb-20 sm:pt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-widest text-chile-ink uppercase",
								children: "A field guide to Capsicum"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 text-5xl leading-tight font-semibold text-ink sm:text-6xl",
								children: "Grow peppers that ripen where you live."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-lg text-muted",
								children: "USDA zones describe the winter. Summers decide whether fruit colors. Set both, then read the season for a real variety — and how to harvest seed that comes true."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "mt-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "text-sm font-semibold text-ink",
										children: "Your USDA zone"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 grid grid-cols-5 gap-2 sm:grid-cols-9",
										role: "radiogroup",
										"aria-label": "USDA zone",
										children: zones.map((item) => {
											const on = item.id === zone.id;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												role: "radio",
												"aria-checked": on,
												onClick: () => prefs.setZoneId(item.id),
												className: `min-h-11 rounded-xl border text-sm font-semibold tabular-nums transition-colors ${on ? "border-chile bg-chile text-paper" : "border-line bg-paper text-ink hover:border-chile"}`,
												children: item.id
											}, item.id);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm text-muted",
										children: [
											"Not sure? Use the",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												className: "font-semibold text-chile-ink underline decoration-line underline-offset-2",
												href: "https://planthardiness.ars.usda.gov/",
												target: "_blank",
												rel: "noreferrer",
												children: "USDA hardiness map"
											}),
											". Outside the US, match the zone whose last-frost date is closest to yours."
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "mt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "text-sm font-semibold text-ink",
										children: "How hot are the summers?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 grid grid-cols-3 gap-2",
										role: "radiogroup",
										"aria-label": "Summer heat",
										children: summers.map((item) => {
											const on = item.id === prefs.summer;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												role: "radio",
												"aria-checked": on,
												onClick: () => prefs.setSummer(item.id),
												className: `min-h-11 rounded-xl border px-2 text-sm font-semibold transition-colors ${on ? "border-chile bg-chile text-paper" : "border-line bg-paper text-ink hover:border-chile"}`,
												children: item.label
											}, item.id);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted",
										children: summerHint(prefs.summer)
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 rounded-2xl border border-line bg-paper p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-baseline justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-3xl font-semibold",
											children: zone.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-leaf",
											children: zone.frostFree
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: zone.places
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
										className: "mt-4 grid grid-cols-2 gap-4 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted",
											children: "Typical last spring frost"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 font-semibold tabular-nums",
											children: formatMonthDay(zone.lastFrost, "None")
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted",
											children: "Typical first fall frost"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 font-semibold tabular-nums",
											children: formatMonthDay(zone.firstFrost, "None")
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-ink",
										children: zone.blurb
									})
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "overflow-hidden rounded-2xl border border-line bg-paper lg:sticky lg:top-24",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/guide/hero.jpg",
								alt: "Ripe bell, cayenne, jalapeño, and habanero peppers with a bowl of saved seeds",
								className: "aspect-video w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "px-4 py-3 text-sm text-muted",
								children: "Ripe fruit for the kitchen. Fully colored, slightly soft fruit for the seed jar."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeasonPanel, {
							zone,
							summer: prefs.summer,
							variety,
							fitsOnly: prefs.fitsOnly,
							heat: prefs.heat,
							onVariety: prefs.setVarietyId,
							onFitsOnly: prefs.setFitsOnly,
							onHeat: prefs.setHeat
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrowPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeedPanel, {
							zone,
							variety,
							method: prefs.method,
							checks: prefs.checks,
							onMethod: prefs.setMethod,
							onToggle: prefs.toggleCheck
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "mt-16 border-t border-line pt-6 text-sm text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Frost dates are planning midpoints for each USDA zone, not a local forecast. Days to ripe color start at transplant and stretch when summers stay cool. Seed notes here are for a home garden, not certified seed production. A zone number does not describe summer heat — a cool zone 8 and a hot zone 8 are different pepper seasons." })
					})
				]
			})
		]
	});
}
var SplitComponent = Almanac;
//#endregion
export { SplitComponent as component };
