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
				question_words: [{word: "kinek", meaning: "for whom"}, "minek"]
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
				examples: [{word: "Németországba", meaning: "to Germany"}, {word: "Indiába", meaning: "to India"}],
				exceptions: [{word: "Magyarországra", meaning: "to Hungary"}],
				question_words: [{word: "hova / hová", meaning: "where to"}, {word: "melyik országba", meaning: "to which country"}]
			},
			{
				usecase: "non-Hungarian cities",
				examples: [{word: "Londonba", meaning: "to London"},{word: "Freiburgba", meaning: "to Freiburg"}],
				question_words: [{word: "hova / hová", meaning: "where to"}, {word: "melyik városba", meaning: "to which city"}]
			},
			{
				usecase: "few Hungarian cities",
				examples: [{word: "Egerbe", meaning: "to Eger"},{word: "Debrecenbe", meaning: "to Debrecen"}],
				exceptions: [{word: "Budapestre", meaning: "to Budapest"}, {word: "Szegedre", meaning: "to Szeged"}],
				question_words: [{word: "hova / hová", meaning: "where to"}, {word: "melyik városba", meaning: "to which city"}]
			},
			{
				usecase: "into something",
				examples: ["dobozba", "házba", "szobába"],
				question_words: [{word: "hova / hová", meaning: "where to"},{word: "mibe", meaning: "into what"}]
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
				examples: [{word: "Németországban", meaning: "in Germany"}, {word: "Indiában", meaning: "in India"}],
				exceptions: [{word: "Magyarországon", meaning: "in Hungary"}],
				question_words: [{word: "hol", meaning: "where"}, {word: "melyik országban", meaning: "in which country"}]
			},
			{
				usecase: "non-Hungarian cities",
				examples: [{word: "Bengaluruban", meaning: "in Bengaluru"},"Madridban", "New Yorkban"],
				question_words: [{word: "hol", meaning: "where"}, {word: "melyik városban", meaning: "in which city"}]
			},
			{
				usecase: "few Hungarian cities",
				examples: [{word: "Egerben", meaning: "in Eger"},{word: "Debrecenben", meaning: "in Debrecen"}],
				exceptions: [{word: "Budapesten", meaning: "in Budapest"}, {word: "Szegeden", meaning: "in Szeged"}],
				question_words: [{word: "hol", meaning: "where"}, {word: "melyik városban", meaning: "in which city"}]
			},
			{
				usecase: "inside something",
				examples: [{word: "a dobozban", meaning: "in the box"}, {word: "a házban", meaning: "in the house"}, {word: "a szobában", meaning: "in the room"}],
				question_words: [{word: "hol", meaning: "where"}, {word: "miben", meaning: "in what"}]
			},
			{
				usecase: "months",
				examples: ["januárban", "februárban"],
				question_words: [{word: "mikor", meaning: "when"}, {word: "melyik hónapban", meaning: "in which month"}]
			},
			{
				usecase: "years",
				examples: ["2021-ben", "kétezeregyben"],
				question_words: [{word: "mikor", meaning: "when"}, {word: "melyik évben", meaning: "in which year"}]
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
				exceptions: [{word: "Magyarországról", meaning: "from Hungary"}],
				question_words: [{word: "honnan", meaning: "from where"}, {word: "melyik országból", meaning: "from which country"}]
			},
			{
				usecase: "non-Hungarian cities",
				examples: ["Londonból", "Berlinből", "Oslóból"],
				question_words: [{word: "honnan", meaning: "from where"}, {word: "melyik városból", meaning: "from which city"}]
			},
			{
				usecase: "few Hungarian cities",
				examples: ["Egerből", "Debrecenből", "Sopronból"],
				question_words: [{word: "honnan", meaning: "from where"}, {word: "melyik városból", meaning: "from which city"}]
			},
			{
				usecase: "made from a material",
				examples: [{word: "műanyagból", meaning: "from plastic"},{word: "fából", meaning: "from wood"}],
				question_words: [{word: "miből", meaning: "from what"}, {word: "milyen anyagból", meaning: "from which material"}]
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
				question_words: ["mire"]
			},
			{
				usecase: "to Hungary",
				examples: ["Magyarországra"],
				question_words: [{word: "hova / hová", meaning: "where to"}, {word: "melyik országba", meaning: "to which country"}]
			},
			{
				usecase: "most Hungarian cities",
				examples: ["Budapestre", "Miskolcra", "Szegedre"],
				exceptions: ["Egerbe", "Debrecenbe", "Sopronba"],
				question_words: [{word: "hova / hová", meaning: "where to"}, {word: "melyik városba", meaning: "to which city"}]
			},
			{
				usecase: "until (deadline)",
				examples: ["hétfőre", "decemberre", "2022-re"],
				question_words: [{word: "mikorra", meaning: "until when"}]
			},
			{
				usecase: "duration",
				examples: ["öt napra", "egy hétre", "három évre"],
				question_words: [{word: "mennyi időre", meaning: "for how long"}]
			},
		]
	},
	{
		name: "superessive",
		suffixes: ["-n", "-on", "-en", "-ön"],
		meaning: "on, upon",
		pers_prons: ["rajtam", "rajtad", "rajta", "rajtunk", "rajtatok", "rajtuk", "Önön", "Önökön"],
		dem_prons: ["ezen", "azon"],
		usage: [
			{
				usecase: "static position on surface",
				examples: [{word: "az asztalon", meaning: "on the table"}, {word: "a széken", meaning: "on the chair"}],
				question_words: [{word: "min", meaning: "on what"}]
			},
			{
				usecase: "days of the week",
				examples: [{word: "hétfőn", meaning: "on Monday"}, "kedden", "szerdán", "csütörtökön", "pénteken", "szombaton"],
				exceptions: [{word: "vasárnap", meaning: "on Sunday"}],
				question_words: [{word: "mikor", meaning: "when"},{word: "melyik napon", meaning: "on which day"}]
			},
			{
				usecase: "in Hungary",
				examples: ["Magyarországon"],
				question_words: [{word: "hol", meaning: "where"}, {word: "melyik országban", meaning: "in which country"}]
			},
			{
				usecase: "most Hungarian cities",
				examples: [{word: "Budapesten", meaning: "in Budapest"}, {word: "Szegeden", meaning: "in Szeged"}],
				exceptions: [{word: "Egerben", meaning: "in Eger"},{word: "Debrecenben", meaning: "in Debrecen"}],
				question_words: [{word: "hol", meaning: "where"}, {word: "melyik városban", meaning: "in which city"}]
			},
		]
	},
	{
		name: "delative",
		suffixes: ["-ról", "-ről"],
		meaning: "from",
		pers_prons: ["rólam", "rólad", "róla", "rólunk", "rólatok", "róluk", "Önről", "Önökről"],
		dem_prons: ["erről", "arról"],
		usage: [
				{
				usecase: "movement from surface",
				examples: [{word: "az asztralról", meaning: "from the table"}, {word: "a székről", meaning: "from the chair"}, {word: "a földről", meaning: "from the ground"}],
				question_words: [{word: "honnan", meaning: "from where"}, {word: "miről", meaning: "from what"}]
			},
			{
				usecase: "talking/writing about something",
				examples: [{word: "az időjárásról beszélni", meaning: "to talk about the weather"}, {word: "történelemről írni", meaning: "to write about history"}],
				question_words: [{word: "miről", meaning: "about what"}]
			},
			{
				usecase: "from Hungary",
				examples: ["Magyarországról"],
				question_words: [{word: "honnan", meaning: "from where"}, {word: "melyik országból", meaning: "from which country"}],				
			},
			{
				usecase: "most Hungarian cities",
				examples: [{word: "Budapestről", meaning: "from Budapest"}, {word: "Szegedről", meaning: "from Szeged"}],
				exceptions: ["Egerből", "Debrecenből", "Sopronból"],
				question_words: [{word: "honnan", meaning: "from where"}, {word: "melyik városból", meaning: "from which city"}]
			},
		]
	},
	{
		name: "",
		suffixes: ["-", "-"],
		meaning: "",
		pers_prons: ["", "", "", "", "", "", "", ""],
		dem_prons: ["", ""],
		usage: [
			{
				usecase: "",
				examples: [{word: "", meaning: ""}, {word: "", meaning: ""}],
				exceptions: [""],
				question_words: [{word: "", meaning: ""}]
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
				examples: [{word: "", meaning: ""}, {word: "", meaning: ""}],
				exceptions: [""],
				question_words: [{word: "", meaning: ""}]
			},
		]
	},
*/

]

export default cases