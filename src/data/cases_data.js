const cases = [
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

]

export default cases