const cases = [
	{
		name: "accusative",
		suffixes: ["-t"],
		meaning: "",
		pers_prons: ["engem", "téged", "őt", "minket", "titeket", "őket", "Önt", "Önöket"],
		dem_prons: ["ezt", "azt"],
		usage: [
			{
				usecase: "object of a verb",
				examples: [{word: "epret enni", meaning: "to eat strawberry"}, {word: "TV-t nézni", meaning: "to watch TV"}, {word: "autót vezetni", meaning: "to drive a car"}],
				question_words: ["mit", "kit"]
			}
		],
		phrases: [{word: "látni valamit", meaning: "to see something"},{word: "enni vagy inni valamit", meaning: "to eat or drink something"},{word: "adni valamit", meaning: "to give something"},{word: "kapni valamit", meaning: "to get something"},{word: "olvasni valamit", meaning: "to read something"}, {word: "írni valamit", meaning: "to write something"}, {word: "álmodni valamit", meaning: "to dream something"}, {word: "főzni valamit", meaning: "to cook something"}]
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
				examples: [{word: "Zsófinak", meaning: "for Zsófi"},  "Annának"],
				question_words: [{word: "kinek", meaning: "for whom"}, {word: "minek", meaning: "for what"}]
			},
		],
		phrases: [{word: "adni valakinek (valamit)", meaning: "to give (something) to someone"}, {word: "valaminek hívni (pl. engem Zsófinak hívnak)", meaning: "to call somehow (eg. they call me Zsófi)"},{word: "valakinek tetszik", meaning: "someone likes it (~it gives pleasure for someone)"}, {word: "hinni valakinek", meaning: "to believe someone"}]
	},
	{
		name: "genitiv",
		suffixes: ["-é"],
		//image: "",
		meaning: "possession, \" 's\"",
		pers_prons: ["enyém", "tied / tiéd", "övé", "mienk / miénk", "tietek / tiétek", "övék", "Öné", "Önöké"],
		dem_prons: ["ezé", "azé"],
		usage: [
			{
				usecase: "possession of someone or something",
				examples: [{word: "Katié", meaning: "Kati's"},  {word: "a kutyáé", meaning: "the dog's"}, {word: "enyém", meaning: "mine"}, {word: "a gyerekeké", meaning: "the children's"}],
				//exceptions: [""],
				question_words: [{word: "kié, mié", meaning: "whose"}, ]
			},
			
		],
		//phrases: [{word: "", meaning: ""},{word: "", meaning: ""}],
		notes: ["If the possession is also included, only the possession gets a suffix: Kati telefonja (Kati's phone), a kutya tálja (the dog's bowl), az én autóm (my car).", "Plural forms of personal pronouns: enyéim, tieid, övéi, mieink, tieitek, övéik, Önéi, Önökéi.", "Plural forms of demonstrative pronouns: ezéi, azéi.",]
	},
	{
		name: "illative",
		suffixes: ["-ba", "-be"],
		image: "ba.png",
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
		],
		phrases: [{word: "étterembe menni", meaning: "to go to a restaurant"}, {word: "belekeveredni valamibe", meaning: "to get entangled into something, to get involved in something (eg. a scandal, a crime)"}]

	},
	{
		name: "innessive",
		suffixes: ["-ban", "-ben"],
		image: "ban.png",
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
		],
		phrases: [{word: "valamiben lenni (pl. kabátban lenni)", meaning: "to wear something (eg. to wear a coat). Literal meaning: to be in something."}, {word: "hinni valamiben", meaning: "to believe in something"}, ]
	},
	{
		name: "elative",
		suffixes: ["-ból", "-ből"],
		image: "bol.png",
		meaning: "out of, from",
		pers_prons: ["belőlem", "belőled", "belőle", "belőlünk", "belőletek","belőlük", "Önből", "Önökből"],
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
				usecase: "from something",
				examples: [{word: "a dobozból", meaning: "from the box"}, {word: "a házból", meaning: "from the house"},{word: "a szobából", meaning: "from the room"}],
				question_words: [{word: "miből", meaning: "from what"}, {word: "honnan", meaning: "from where"}]
			},
			{
				usecase: "made from a material",
				examples: [{word: "műanyagból", meaning: "from plastic"},{word: "fából", meaning: "from wood"}],
				question_words: [{word: "miből", meaning: "from what"}, {word: "milyen anyagból", meaning: "from which material"}]
			},
		],
		phrases: [{word: "valamiből készült", meaning: "to be made from something"}, {word: "élni valamiből", meaning: "to do something for a living"}]
	},
	{
		name: "sublative",
		suffixes: ["-ra", "-re"],
		image: "ra.png",
		meaning: "onto",
		pers_prons: ["rám", "rád", "rá", "ránk", "rátok", "rájuk", "Önre", "Önökre"],
		dem_prons: ["erre", "arra"],
		usage: [
			{
				usecase: "movement to surface",
				examples: ["asztalra", "földre"],
				question_words: [{word: "mire", meaning: "onto what"},{word: "hova / hová", meaning: "where"}]
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
		],
		phrases: [{word: "elutazni a hétvégére", meaning: "to travel away for the weekend"},{word: "várni valakire", meaning: "to wait for someone"}, {word: "fordulni valamerre (pl. jobbra vagy balra)", meaning: "to turn somewhere (eg. left or right)"}]
	},
	{
		name: "superessive",
		suffixes: ["-n", "-on", "-en", "-ön"],
		image: "on.png",
		meaning: "on, upon",
		pers_prons: ["rajtam", "rajtad", "rajta", "rajtunk", "rajtatok", "rajtuk", "Önön", "Önökön"],
		dem_prons: ["ezen", "azon"],
		usage: [
			{
				usecase: "static position on surface",
				examples: [{word: "az asztalon", meaning: "on the table"}, {word: "a széken", meaning: "on the chair"}],
				question_words: [{word: "min", meaning: "on what"}, {word: "hol", meaning: "where"}]
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
		],
		phrases: [ {word: "gondolkozni valamin", meaning: "to think on / about something"}, {word: "ülni valamin", meaning: "to sit on something"}, {word: "meglepődni valamin", meaning: "to be surprised on something"}, {word: "csodálkozni valamin", meaning: "to wonder on something"}]
	},
	{
		name: "delative",
		suffixes: ["-ról", "-ről"],
		image: "rol.png",
		meaning: "from",
		pers_prons: ["rólam", "rólad", "róla", "rólunk", "rólatok", "róluk", "Önről", "Önökről"],
		dem_prons: ["erről", "arról"],
		usage: [
				{
				usecase: "movement from surface",
				examples: [{word: "az asztralról", meaning: "from the table"}, {word: "a székről", meaning: "from the chair"}, {word: "a földről", meaning: "from the ground"}],
				question_words: [ {word: "miről", meaning: "from what"},{word: "honnan", meaning: "from where"}]
			},
			{
				usecase: "about something",
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
		],
		phrases: [{word: "írni valamiről", meaning: "to write about something"}, {word: "beszélni valamiről", meaning: "to talk about something"}, {word: "hallgatni valamiről", meaning: "not to talk about something (to stay quiet)"}, {word: "szólni valamiről", meaning: "1. to inform about something, 2. to be about a topic (eg. a movie is about something)"}, {word: "álmodni valamiről", meaning: "to dream about something"}, {word: "olvasni valamiről", meaning: "to read about something"}, {word: "gondolkozni valamiről", meaning: "to think about something"}, {word: "veszekedni valamiről", meaning: "to argue about something"}]
		
	},
	{
		name: "allative",
		suffixes: ["-hoz", "-hez", "-höz"],
		image: "hoz.png",
		meaning: "to, towards",
		pers_prons: ["hozzám", "hozzád", "hozzá", "hozzánk", "hozzátok", "hozzájuk", "Önhöz", "Önökhöz"],
		dem_prons: ["ehhez", "ahhoz"],
		usage: [
			{
				usecase: "to something",
				examples: [{word: "a fához", meaning: "to the tree"}, {word: "a házhoz", meaning: "to the house"}],
				question_words: [{word: "hova / hová", meaning: "where to"}, {word: "mihez", meaning: "to what"}]
			},
			{
				usecase: "to someone's house",
				examples: [{word: "Péterhez", meaning: "to Péter / to Péter's house"}, {word: "hozzánk", meaning: "to our house"}],
				question_words: [{word: "hova / hová", meaning: "where to"}, {word: "kihez", meaning: "to whom"}]
			},
			{
				usecase: "to add something to something",
				examples: [{word: "hozzáadni valamit valamihez", meaning: "to add something to something"}],
				question_words: [{word: "mihez", meaning: "to what"}]
			},
		],
		phrases: [{word: "hozzámenni valakihez", meaning: "to marry someone"}, {word: "hozzáfogni valamihez", meaning: "to start doing something"}, {word: "elmenni valakihez", meaning: "to go to someone's place"}, {word: "beszélni valakihez", meaning: "to talk to someone"}]
	},
	{
		name: "adessive",
		suffixes: ["-nál", "-nél"],
		image: "nal.png",
		meaning: "at",
		pers_prons: ["nálam", "nálad", "nála", "nálunk", "nálatok", "náluk", "Önnél", "Önöknél"],
		dem_prons: ["ennél", "annál"],
		usage: [
			{
				usecase: "by something",
				examples: [{word: "a fánál", meaning: "by the tree"}, {word: "a háznál", meaning: "by the house"}],
				question_words: [{word: "hol", meaning: "where"}, {word: "minél", meaning: "by what"}]
			},
			{
				usecase: "at someone's house",
				examples: [{word: "Péternél", meaning: "at Péter's house"}, {word: "nálad", meaning: "at your place"}],
				question_words: [{word: "hol", meaning: "where"}, {word: "kinél", meaning: "at whose place"}]
			},
			{
				usecase: "to go and meet a professional",
				examples: [{word: "az orvosnál", meaning: "at the doctor's"}, {word: "a főnöknél", meaning: "at the boss's"}],
				question_words: [{word: "hol", meaning: "where"},{word: "kinél", meaning: "at whom"} ]
			},
			{
				usecase: "to have something with oneself",
				examples: [{word: "van nálad víz?", meaning: "do you have water with you?"}, {word: "van Péternél pénz", meaning: "Péter has money on him"}, {word: "Katinál van a könyvem", meaning: "Kati has my book (she borrowed it from me)"}],
				question_words: ["kinél"]
			},
			{
				usecase: "comparing someone to someone",
				examples: [{word: "magasabb vagy nálam", meaning: "you are taller than me"}, {word: "Péter gazdagabb Marinál", meaning: "Péter is richer than Mari"}],
				question_words: ["kinél"],
				note: "\"mint\" can be used as well: magasabb vagy, mint én; Péter gazdagabb, mint Mari"
			},
		]
	},
	{
		name: "ablative",
		suffixes: ["-tól", "-től"],
		image: "tol.png",
		meaning: "away from",
		pers_prons: ["tőlem", "tőled", "tőle", "tőlünk", "tőletek", "tőlük", "Öntől", "Önöktől"],
		dem_prons: ["ettől", "attól"],
		usage: [
			{
				usecase: "from something",
				examples: [{word: "a fától", meaning: "from the tree"}, {word: "a háztól", meaning: "from the house"}],
				question_words: [{word: "honnan", meaning: "from where"}, {word: "mitől", meaning: "from what"}]
			},
			{
				usecase: "from someone's house",
				examples: [{word: "Pétertől", meaning: "from Péter's house"}, {word: "tőlem", meaning: "from my place"}],
				question_words: [{word: "honnan", meaning: "from where"}, {word: "kitől", meaning: "from whose place"}]
			},
			{
				usecase: "from someone (eg. a gift)",
				examples: [{word: "Pétertől", meaning: "from Péter"}, {word: "tőlem", meaning: "from me"}],
				question_words: [{word: "kitől", meaning: "from whom"}]
			},
			
		],
		phrases: [{word: "kapni (valamit) valakitől", meaning: "to get (something) from someone"}, {word: "félni valamitől", meaning: "to be afraid of something"}]
	},
	{
		name: "instrumental",
		suffixes: ["-val", "-vel"],
		image: "val.png",
		meaning: "with",
		pers_prons: ["velem", "veled", "vele", "velünk", "veletek", "velük", "Önnel", "Önökkel"],
		dem_prons: ["ezzel", "azzal"],
		usage: [
			{
				usecase: "to do something together with someone",
				examples: [{word: "Annával", meaning: "with Anna"}, {word: "egy kutyával", meaning: "with a dog"}],
				question_words: [{word: "kivel", meaning: "with whom"}, {word: "mivel", meaning: "with what"}]
			},
			{
				usecase: "traveling by a means of transport",
				examples: [{word: "busszal", meaning: "by bus"}, {word: "biciklivel", meaning: "by bicycle"}, {word: "autóval", meaning: "by car"},{word: "vonattal", meaning: "by train"}, {word: "repülővel", meaning: "by train"} ],
				exceptions: [{word: "gyalog", meaning: "on foot"}],
				question_words: [{word: "mivel", meaning: "by what"}]
			},
			{
				usecase: "exact comparison",
				examples: [{word: "egy centiméterrel kisebb", meaning: "smaller by a centimetre"}, {word: "három perccel később", meaning: "three minutes later"}],
				question_words: [{word: "mennyivel", meaning: "how much"}]
			},
			
		],
		phrases: [{word: "beszélni valakivel", meaning: "to talk with someone"}, {word: "találkozni valakivel", meaning: "to meet someone"}, {word: "játszani valakivel", meaning: "to play with someone"}, {word: "szorozni öttel", meaning: "to multiply by 5"}, {word: "osztani kettővel", meaning: "to divide by two"}],
		notes: ["assimilation: if the word ends with a consonant, the letter \"v\" from -val or -vel assimilates to this last letter"]
	},
	{
		name: "terminative",
		suffixes: ["-ig"],
		image: "ig.png",
		meaning: "until",
		//pers_prons: ["", "", "", "", "", "", "", ""],
		dem_prons: ["eddig", "addig"],
		usage: [
			{
				usecase: "up to a point in time",
				examples: [{word: "hatig / hat óráig", meaning: "until six / until six o'clock"}, {word: "fél kettőig", meaning: "until half past one"}, {word: "március 15-ig", meaning: "until 15th March"}, {word: "2050-ig", meaning: "until 2050"}, {word: "tegnapig", meaning: "until yesterday"}, {word: "csütörtökig", meaning: "until Thursday"}],
				question_words: [{word: "meddig", meaning: "until when"}, {word: "mikorra", meaning: "until when"}]
			},
			{
				usecase: "up to an event",
				examples: [{word: "karácsonyig", meaning: "until Christmas"}, {word: "a 30. szülinapomig", meaning: "until my 30th birthday"}, {word: "a nyári szünet végéig", meaning: "until the end of the summer holiday"}],
				question_words: [{word: "meddig", meaning: "until when"}]
			},
			{
				usecase: "duration of time",
				examples: [{word: "két hétig", meaning: "for two weeks"}, {word: "három óráig", meaning: "for three hours"}, {word: "sokáig", meaning: "for a long time"}],
				question_words: [{word: "meddig", meaning: "until when"},{word: "mennyi ideig", meaning: "for how long"}],
				note: "Phrases like \"három óráig\" also mean \"until three o'clock\" (because \"óra\" means both \"hour\" and \"o'clock\")"
			},
			{
				usecase: "to somewhere, but not further (German: bis)",
				examples: [{word: "a fáig", meaning: "to the tree (not further)"}, {word: "az ajtóig", meaning: "to the door (not further)"}],
				question_words: [{word: "meddig", meaning: "how far"}]
			},
		],
		phrases: [{word: "aludni valameddig", meaning: "to sleep until some time"},{word: "tartani valameddig", meaning: "to last until some time"}, {word: "elmenni valameddig", meaning: "to go until reaching something"}]
	},
	{
		name: "temporal",
		suffixes: ["-kor"],
		image: "kor.png",
		meaning: "at a time",
		//pers_prons: ["", "", "", "", "", "", "", ""],
		dem_prons: ["ekkor", "akkor"],
		usage: [
			{
				usecase: "at a given hour",
				examples: [{word: "négy órakor / négykor (4-kor)", meaning: "at 4 o'clock"}, {word: "fél hatkor (fél 6-kor)", meaning: "at half past 5"}, {word: "két óra tíz perckor", meaning: "at 2:10"}],
				//exceptions: [""],
				question_words: [{word: "mikor", meaning: "when"}, {word: "hány órakor", meaning: "at what time"}]
			},
			{
				usecase: "some specific times",
				examples: [{word: "éjfélkor", meaning: "at midnight"}, {word: "ebédkor", meaning: "at lunch (during lunch)"}, {word: "napfelkeltekor", meaning: "at sunrise"}, {word: "napnyugtakor", meaning: "at sunset"}],
				exceptions: [{word: "délben", meaning: "at noon"}, {word: "reggel", meaning: "in the morning"}, {word: "este", meaning: "in the evening"}, {word: "hajnalban", meaning: "at dawn"}],
				question_words: [{word: "mikor", meaning: "when"}]
			},
		],
		//phrases: [{word: "", meaning: ""},{word: "", meaning: ""}]
	},
	{
		name: "causal",
		suffixes: ["-ért"],
		//image: "",
		meaning: "for, for the purpose of",
		pers_prons: ["értem", "érted", "érte", "értünk", "értetek", "értük", "Önért", "Önökért"],
		dem_prons: ["ezért", "azért"],
		usage: [
			{
				usecase: "to do something for the purpose of someone or something",
				examples: [{word: "elmenni a gyerekekért", meaning: "to pick up the kids"}, {word: "felmászni a fára almáért", meaning: "to climb the tree for apples"}],
				//exceptions: [""],
				question_words: [{word: "miért", meaning: "why (for what purpose)"}, {word: "kiért", meaning: "for who"}]
			},
			
		],
		phrases: [{word: "megtenni valamit valakiért", meaning: "to do something in favour of someone"},{word: "elmenni valakiért vagy valamiért", meaning: "to pick up / fetch someone or something"},{word: "meghalni valamiért", meaning: "to die for something"}, {word: "elnézést kérni valamiért", meaning: "to say sorry for something"}, {word: "köszönetet mondani valamiért", meaning: "to say thank you for something"}, {word: "fizetni valamiért", meaning: "to pay for something"}]
	},
	{
		name: "translative",
		suffixes: ["-vá", "-vé"],
		image: "va.png",
		meaning: "into (eg. turning into something)",
		//pers_prons: ["", "", "", "", "", "", "", ""],
		dem_prons: ["ezzé", "azzá"],
		usage: [
			{
				usecase: "to turn into something else",
				examples: [{word: "békává változni", meaning: "to turn into a frog"}, {word: "széppé varázsolni valamit", meaning: "to make something beautiful"}],
				//exceptions: [""],
				question_words: [{word: "mivé", meaning: "into what"}]
			},
			
		],
		phrases: [{word: "valamivé változni", meaning: "to turn into something"}, {word: "fiává / lányává fogadni valakit", meaning: "to adopt someone as his son / daughter"}, {word: "hasznossá tenni magát", meaning: "to make oneself useful"}],
		notes: ["assimilation: if the word ends with a consonant, the letter \"v\" from -vá or -vé assimilates to this last letter"]
	},
	{
		name: "modal",
		suffixes: ["-ként"],
		//image: "",
		meaning: "as",
		//pers_prons: ["", "", "", "", "", "", "", ""],
		dem_prons: ["ekként", "akként"],
		usage: [
			{
				usecase: "as something / someone, being something / someone",
				examples: [{word: "gyerekként", meaning: "as a child"}, {word: "", meaning: ""}],
				//exceptions: [""],
				question_words: [{word: "miként", meaning: "as what"}]
			},
		],
		phrases: [{word: "tanárként / mérnökként (stb) dolgozni", meaning: "to work as a teacher / engineer (etc)"},{word: "végezni valamiként", meaning: "graduate as something"},{word: "apránként", meaning: "bit by bit, gradually"}, {word: "futótűzként terjedni", meaning: "to spread like widefire"}]
	},
	/*{
		name: "",
		suffixes: ["-", "-"],
		image: "",
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
			{
				usecase: "",
				examples: [{word: "", meaning: ""}, {word: "", meaning: ""}],
				exceptions: [""],
				question_words: [{word: "", meaning: ""}]
			},
		],
		phrases: [{word: "", meaning: ""},{word: "", meaning: ""}],
		notes: ["",""],
	},
*/
]

export default cases