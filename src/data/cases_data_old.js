const cases = [
	{
		name: "accusative",
		suffixes: ["-t"],
		meaning: "",
		pers_prons: ["engem", "téged", "őt", "minket", "titeket", "őket", "Önt", "Önöket"],
		dem_prons: ["ezt", "azt"],
		examples: "",
	},
	{
		name: "dative",
		suffixes: ["-nak", "-nek"],
		meaning: "for, to",
		pers_prons: ["nekem", "neked", "neki", "nekünk", "nektek", "nekik", "Önnek", "Önöknek"],
		dem_prons: ["ennek", "annak"],
		usage: [
			{
				usecase: "for someone / something",
				examples: ["Zsófinak", "Annának"],
				question_words: ["kinek", "minek"]
			},
			{
				usecase: "to call someone somehow",
				examples: ["(engem) Zsófinak hívnak", "(őt) Józsefnek hívják"],
				question_words: ["hogy hívnak (engem,téged, minket, titeket)", "hogy hívják (őt, őket, Önt, Önöket)"]
			},
		]
	},
	{
		name: "illative",
		suffixes: ["-ba", "-be"],
		meaning: "into, to",
		pers_prons: ["belém", "beléd", "belé", "belénk", "belétek", "beléjük", "Önbe", 		"Önökbe"],
		dem_prons: ["ebbe", "abba"],
		usage: [
			{
				usecase: "countries",
				examples: ["Németországba", "Indiába"],
				exceptions: ["Magyarországra"],
				question_words: ["hová", "melyik országba"]
			},
			{
				usecase: "cities",
				examples: ["Egerbe", "Freiburgba"],
				exceptions: ["Budapestre", "Szegedre"],
				question_words: ["hová", "melyik városba"]
			},
			{
				usecase: "into",
				examples: ["dobozba", "házba", "szobába"],
				question_words: ["hová", "mibe"]
			}
		]

	},
	{
		name: "innessive",
		suffixes: ["-ban", "-ben"],
		meaning: "in, inside",
		pers_prons: ["bennem", "benned", "benne", "bennünk", "bennetek", "bennük", "Önben", "Önökben"],
		dem_prons: ["ebben", "abban"],
		usage: [
			{
				usecase: "countries",
				examples: ["Németországban", "Indiában"],
				exceptions: ["Magyarországon"],
				question_words: ["hol", "melyik országban"]
			},
			{
				usecase: "cities",
				examples: ["Egerben", "Freiburgban"],
				exceptions: ["Budapesten", "Szegeden"],
				question_words: ["hol", "melyik városban"]
			},
			{
				usecase: "inside",
				examples: ["dobozban", "házban", "szobában"],
				question_words: ["hol", "miben"]
			},
			{
				usecase: "months",
				examples: ["januárban", "februárban"],
				question_words: ["mikor", "melyik hónapban"]
			},
			{
				usecase: "years",
				examples: ["2021-ben", "kétezeregyben"],
				question_words: ["mikor", "melyik évben"]
			}
		]
	},
	{
		name: "elative",
		suffixes: ["-ból", "-ből"],
		meaning: "out of, from",
		pers_prons: ["belőlem", "belőled", "belőle", "belőlünk", "belétek","belőlük", "Önből", "Önökből"],
		dem_prons: ["ebből", "abból"],
		usage: [
			{
				usecase: "countries",
				examples: ["Németországból", "Angliából"],
				exceptions: ["Magyarországról"],
				question_words: ["honnan", "melyik országból"]
			},
			{
				usecase: "cities",
				examples: ["Londonból", "Berlinből"],
				exceptions: ["Budapestről, Szegedről"],
				question_words: ["honnan", "melyik városból"]
			},
			{
				usecase: "material",
				examples: ["műanyagból", "fából"],
				question_words: ["miből", "milyen anyagból"]
			},
		]
	},
	{
		name: "sublative",
		suffixes: ["-ra", "-re"],
		meaning: "onto",
		pers_prons: ["rám", "rád", "rá", "ránk", "rátok", "rájuk", "Önre", "Önökre"],
		dem_prons: ["erre", "arra"],
		usage: [
			{
				usecase: "movement to surface",
				examples: ["asztalra", "földre"],
				question_words: ["mire", "kire"]
			},
			{
				usecase: "some countries or cities",
				examples: ["Magyarországra", "Budapestre", "Miskolcra", "Szegedre"],
				question_words: ["hova"]
			},
			{
				usecase: "until (deadline)",
				examples: ["hétfőre", "decemberre", "2022-re"],
				question_words: ["mikorra"]
			},
			{
				usecase: "duration",
				examples: ["öt napra", "egy hétre", "három évre"],
				question_words: ["mennyi időre"]
			},
		]
	},
	/*{
		name: "",
		suffixes: ["-", "-"],
		meaning: "",
		pers_prons: ["", "", "", "", "", "", "", ""],
		dem_prons: ["", ""],
		usage: [
			{
				usecase: "",
				examples: ["", ""],
				exceptions: [""],
				question_words: ["", ""]
			},
		]
	},
*/

]

export default cases