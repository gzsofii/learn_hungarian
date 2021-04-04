(this["webpackJsonpinteractive-hungarian"]=this["webpackJsonpinteractive-hungarian"]||[]).push([[0],{10:function(e,n,a){},12:function(e,n,a){"use strict";a.r(n);var o=a(1),i=a.n(o),r=a(5),s=a.n(r),t=(a(10),a(3)),m=a(2),l="showAll",d="hideAll",g=i.a.createContext(),h=a(0);function c(e){var n=Object(o.useContext)(g),a=Object(o.useState)(n.visibility!==l),i=Object(m.a)(a,2),r=i[0],s=i[1];return Object(o.useEffect)((function(){n.visibility===l?s(!1):n.visibility===d&&s(!0)}),[n]),Object(h.jsx)("span",{className:r?"hiddenValue":"shownValue",onClick:function(){return s(!r)},children:Object(h.jsx)("span",{children:e.children})})}function w(e){var n=e.term;return Object(h.jsx)(h.Fragment,{children:"object"===typeof n?Object(h.jsxs)("span",{className:"tooltip",children:[n.word,Object(h.jsx)("span",{className:"tooltipText",children:n.meaning})]}):Object(h.jsx)("span",{children:n})})}function u(e){var n=e.usecase,a=e.examples,o=e.exceptions,i=e.question_words,r=e.note;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{className:"usecaseLabel",children:n}),Object(h.jsxs)("ul",{children:[a&&Object(h.jsxs)("li",{className:"example",children:[Object(h.jsx)("strong",{children:"examples: "}),a.map((function(e,n){return Object(h.jsx)(w,{term:e},n)})).reduce((function(e,n){return[e,", ",n]}))]},"exmp"),o&&Object(h.jsxs)("li",{className:"exception",children:[Object(h.jsx)("strong",{children:"exceptions: "}),o.map((function(e,n){return Object(h.jsx)(w,{term:e},n)})).reduce((function(e,n){return[e,", ",n]}))]},"exc"),i&&Object(h.jsxs)("li",{className:"qstnWord",children:[Object(h.jsx)("strong",{children:"question words: "}),i.map((function(e,n){return Object(h.jsx)(w,{term:e},n)})).reduce((function(e,n){return[e,", ",n]}))]},"qstn"),r&&Object(h.jsxs)("li",{className:"note",children:[Object(h.jsx)("strong",{children:"note: "}),Object(h.jsx)("span",{children:r})]},"note")]})]})}function b(e){var n=e.pronouns,a=("pers"===e.type?["\xe9n","te","\u0151","mi","ti","\u0151k","\xd6n","\xd6n\xf6k"]:["ez","az"]).map((function(e,a){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e}),Object(h.jsx)("td",{children:Object(h.jsx)(c,{children:n[a]})})]},a)}));return Object(h.jsx)("table",{children:Object(h.jsx)("tbody",{children:a})})}function p(e){var n=Object(o.useState)(!0),a=Object(m.a)(n,2),i=a[0],r=a[1],s=Object(o.useContext)(g),d=e.name,w=e.suffixes,p=e.image,k=e.meaning,v=e.phrases,f=e.notes,j=e.pers_prons,x=e.dem_prons,y=e.usage,z="/learn_hungarian/img/thumbnails/";return console.log(z),Object(h.jsxs)("div",{className:"case",children:[Object(h.jsxs)("h2",{onClick:function(){return r(!i)},children:[d.slice(0,1).toUpperCase()+d.slice(1),p&&s.visibility===l&&Object(h.jsx)("img",{src:z+p})]}),!i&&Object(h.jsxs)("div",{children:[w&&Object(h.jsxs)("div",{className:"caseProperties",children:[Object(h.jsx)("span",{className:"propertyLabel",children:"Suffixes: "}),Object(h.jsx)(c,{children:w.join(", ")})]}),k&&Object(h.jsxs)("div",{className:"caseProperties",children:[Object(h.jsx)("span",{className:"propertyLabel",children:"Meaning: "}),Object(h.jsx)(c,{children:k})]}),y&&Object(h.jsxs)("div",{className:"caseProperties",children:[Object(h.jsx)("span",{className:"propertyLabel",children:"Usage: "}),Object(h.jsx)("ul",{className:"usage",children:y.map((function(e,n){return Object(h.jsx)("li",{className:"usecase",children:Object(h.jsx)(u,Object(t.a)({},e))},n)}))})]}),v&&Object(h.jsxs)("div",{className:"caseProperties",children:[Object(h.jsx)("span",{className:"propertyLabel",children:"Some phrases: "}),Object(h.jsx)("ul",{children:v.map((function(e,n){return Object(h.jsxs)("li",{children:[Object(h.jsx)(c,{children:e.word}),": ",e.meaning]},n)}))})]}),f&&Object(h.jsxs)("div",{className:"caseProperties",children:[Object(h.jsx)("span",{className:"propertyLabel",children:"Notes: "}),Object(h.jsx)("ul",{children:f.map((function(e,n){return Object(h.jsx)("li",{children:e},n)}))})]}),j&&Object(h.jsxs)("div",{className:"pers-pronouns caseProperties",children:[Object(h.jsx)("span",{className:"propertyLabel",children:"Personal pronouns:"}),Object(h.jsx)(b,{type:"pers",pronouns:j})]}),x&&Object(h.jsxs)("div",{className:"dem-pronouns caseProperties",children:[Object(h.jsx)("span",{className:"propertyLabel",children:"Demonstrative pronouns: "}),Object(h.jsx)(b,{type:"dem",pronouns:x})]})]})]})}function k(e){var n=e.setMode;return Object(h.jsxs)("header",{className:"topMenuBar",children:[Object(h.jsx)("span",{className:"topButton",onClick:function(){return n({visibility:l})},children:"Show all answers"}),Object(h.jsx)("span",{className:"topButton",onClick:function(){return n({visibility:d})},children:"Hide all answers"})]})}var v=[{name:"accusative",suffixes:["-t"],meaning:"",pers_prons:["engem","t\xe9ged","\u0151t","minket","titeket","\u0151ket","\xd6nt","\xd6n\xf6ket"],dem_prons:["ezt","azt"],usage:[{usecase:"object of a verb",examples:[{word:"epret enni",meaning:"to eat strawberry"},{word:"TV-t n\xe9zni",meaning:"to watch TV"},{word:"aut\xf3t vezetni",meaning:"to drive a car"}],question_words:["mit","kit"]}],phrases:[{word:"l\xe1tni valamit",meaning:"to see something"},{word:"enni vagy inni valamit",meaning:"to eat or drink something"},{word:"adni valamit",meaning:"to give something"},{word:"kapni valamit",meaning:"to get something"},{word:"olvasni valamit",meaning:"to read something"},{word:"\xedrni valamit",meaning:"to write something"},{word:"\xe1lmodni valamit",meaning:"to dream something"},{word:"f\u0151zni valamit",meaning:"to cook something"}]},{name:"dative",suffixes:["-nak","-nek"],meaning:"for, to",pers_prons:["nekem","neked","neki","nek\xfcnk","nektek","nekik","\xd6nnek","\xd6n\xf6knek"],dem_prons:["ennek","annak"],usage:[{usecase:"for someone / something",examples:[{word:"Zs\xf3finak",meaning:"for Zs\xf3fi"},"Ann\xe1nak"],question_words:[{word:"kinek",meaning:"for whom"},{word:"minek",meaning:"for what"}]}],phrases:[{word:"adni valakinek (valamit)",meaning:"to give (something) to someone"},{word:"valaminek h\xedvni (pl. engem Zs\xf3finak h\xedvnak)",meaning:"to call somehow (eg. they call me Zs\xf3fi)"},{word:"valakinek tetszik",meaning:"someone likes it (~it gives pleasure for someone)"},{word:"hinni valakinek",meaning:"to believe someone"}]},{name:"genitiv",suffixes:["-\xe9"],meaning:'possession, " \'s"',pers_prons:["eny\xe9m","tied / ti\xe9d","\xf6v\xe9","mienk / mi\xe9nk","tietek / ti\xe9tek","\xf6v\xe9k","\xd6n\xe9","\xd6n\xf6k\xe9"],dem_prons:["ez\xe9","az\xe9"],usage:[{usecase:"possession of someone or something",examples:[{word:"Kati\xe9",meaning:"Kati's"},{word:"a kuty\xe1\xe9",meaning:"the dog's"},{word:"eny\xe9m",meaning:"mine"},{word:"a gyerekek\xe9",meaning:"the children's"}],question_words:[{word:"ki\xe9, mi\xe9",meaning:"whose"}]}],notes:["If the possession is also included, only the possession gets a suffix: Kati telefonja (Kati's phone), a kutya t\xe1lja (the dog's bowl), az \xe9n aut\xf3m (my car).","Plural forms of personal pronouns: eny\xe9im, tieid, \xf6v\xe9i, mieink, tieitek, \xf6v\xe9ik, \xd6n\xe9i, \xd6n\xf6k\xe9i.","Plural forms of demonstrative pronouns: ez\xe9i, az\xe9i."]},{name:"illative",suffixes:["-ba","-be"],image:"ba.png",meaning:"into, to",pers_prons:["bel\xe9m","bel\xe9d","bel\xe9","bel\xe9nk","bel\xe9tek","bel\xe9j\xfck","\xd6nbe","\xd6n\xf6kbe"],dem_prons:["ebbe","abba"],usage:[{usecase:"countries",examples:[{word:"N\xe9metorsz\xe1gba",meaning:"to Germany"},{word:"Indi\xe1ba",meaning:"to India"}],exceptions:[{word:"Magyarorsz\xe1gra",meaning:"to Hungary"}],question_words:[{word:"hova / hov\xe1",meaning:"where to"},{word:"melyik orsz\xe1gba",meaning:"to which country"}]},{usecase:"non-Hungarian cities",examples:[{word:"Londonba",meaning:"to London"},{word:"Freiburgba",meaning:"to Freiburg"}],question_words:[{word:"hova / hov\xe1",meaning:"where to"},{word:"melyik v\xe1rosba",meaning:"to which city"}]},{usecase:"few Hungarian cities",examples:[{word:"Egerbe",meaning:"to Eger"},{word:"Debrecenbe",meaning:"to Debrecen"}],exceptions:[{word:"Budapestre",meaning:"to Budapest"},{word:"Szegedre",meaning:"to Szeged"}],question_words:[{word:"hova / hov\xe1",meaning:"where to"},{word:"melyik v\xe1rosba",meaning:"to which city"}]},{usecase:"into something",examples:["dobozba","h\xe1zba","szob\xe1ba"],question_words:[{word:"hova / hov\xe1",meaning:"where to"},{word:"mibe",meaning:"into what"}]}],phrases:[{word:"\xe9tterembe menni",meaning:"to go to a restaurant"},{word:"belekeveredni valamibe",meaning:"to get entangled into something, to get involved in something (eg. a scandal, a crime)"}]},{name:"innessive",suffixes:["-ban","-ben"],image:"ban.png",meaning:"in, inside",pers_prons:["bennem","benned","benne","benn\xfcnk","bennetek","benn\xfck","\xd6nben","\xd6n\xf6kben"],dem_prons:["ebben","abban"],usage:[{usecase:"countries",examples:[{word:"N\xe9metorsz\xe1gban",meaning:"in Germany"},{word:"Indi\xe1ban",meaning:"in India"}],exceptions:[{word:"Magyarorsz\xe1gon",meaning:"in Hungary"}],question_words:[{word:"hol",meaning:"where"},{word:"melyik orsz\xe1gban",meaning:"in which country"}]},{usecase:"non-Hungarian cities",examples:[{word:"Bengaluruban",meaning:"in Bengaluru"},"Madridban","New Yorkban"],question_words:[{word:"hol",meaning:"where"},{word:"melyik v\xe1rosban",meaning:"in which city"}]},{usecase:"few Hungarian cities",examples:[{word:"Egerben",meaning:"in Eger"},{word:"Debrecenben",meaning:"in Debrecen"}],exceptions:[{word:"Budapesten",meaning:"in Budapest"},{word:"Szegeden",meaning:"in Szeged"}],question_words:[{word:"hol",meaning:"where"},{word:"melyik v\xe1rosban",meaning:"in which city"}]},{usecase:"inside something",examples:[{word:"a dobozban",meaning:"in the box"},{word:"a h\xe1zban",meaning:"in the house"},{word:"a szob\xe1ban",meaning:"in the room"}],question_words:[{word:"hol",meaning:"where"},{word:"miben",meaning:"in what"}]},{usecase:"months",examples:["janu\xe1rban","febru\xe1rban"],question_words:[{word:"mikor",meaning:"when"},{word:"melyik h\xf3napban",meaning:"in which month"}]},{usecase:"years",examples:["2021-ben","k\xe9tezeregyben"],question_words:[{word:"mikor",meaning:"when"},{word:"melyik \xe9vben",meaning:"in which year"}]}],phrases:[{word:"valamiben lenni (pl. kab\xe1tban lenni)",meaning:"to wear something (eg. to wear a coat). Literal meaning: to be in something."},{word:"hinni valamiben",meaning:"to believe in something"}]},{name:"elative",suffixes:["-b\xf3l","-b\u0151l"],image:"bol.png",meaning:"out of, from",pers_prons:["bel\u0151lem","bel\u0151led","bel\u0151le","bel\u0151l\xfcnk","bel\u0151letek","bel\u0151l\xfck","\xd6nb\u0151l","\xd6n\xf6kb\u0151l"],dem_prons:["ebb\u0151l","abb\xf3l"],usage:[{usecase:"countries",examples:["N\xe9metorsz\xe1gb\xf3l","Angli\xe1b\xf3l"],exceptions:[{word:"Magyarorsz\xe1gr\xf3l",meaning:"from Hungary"}],question_words:[{word:"honnan",meaning:"from where"},{word:"melyik orsz\xe1gb\xf3l",meaning:"from which country"}]},{usecase:"non-Hungarian cities",examples:["Londonb\xf3l","Berlinb\u0151l","Osl\xf3b\xf3l"],question_words:[{word:"honnan",meaning:"from where"},{word:"melyik v\xe1rosb\xf3l",meaning:"from which city"}]},{usecase:"few Hungarian cities",examples:["Egerb\u0151l","Debrecenb\u0151l","Sopronb\xf3l"],question_words:[{word:"honnan",meaning:"from where"},{word:"melyik v\xe1rosb\xf3l",meaning:"from which city"}]},{usecase:"from something",examples:[{word:"a dobozb\xf3l",meaning:"from the box"},{word:"a h\xe1zb\xf3l",meaning:"from the house"},{word:"a szob\xe1b\xf3l",meaning:"from the room"}],question_words:[{word:"mib\u0151l",meaning:"from what"},{word:"honnan",meaning:"from where"}]},{usecase:"made from a material",examples:[{word:"m\u0171anyagb\xf3l",meaning:"from plastic"},{word:"f\xe1b\xf3l",meaning:"from wood"}],question_words:[{word:"mib\u0151l",meaning:"from what"},{word:"milyen anyagb\xf3l",meaning:"from which material"}]}],phrases:[{word:"valamib\u0151l k\xe9sz\xfclt",meaning:"to be made from something"},{word:"\xe9lni valamib\u0151l",meaning:"to do something for a living"}]},{name:"sublative",suffixes:["-ra","-re"],image:"ra.png",meaning:"onto",pers_prons:["r\xe1m","r\xe1d","r\xe1","r\xe1nk","r\xe1tok","r\xe1juk","\xd6nre","\xd6n\xf6kre"],dem_prons:["erre","arra"],usage:[{usecase:"movement to surface",examples:["asztalra","f\xf6ldre"],question_words:[{word:"mire",meaning:"onto what"},{word:"hova / hov\xe1",meaning:"where"}]},{usecase:"to Hungary",examples:["Magyarorsz\xe1gra"],question_words:[{word:"hova / hov\xe1",meaning:"where to"},{word:"melyik orsz\xe1gba",meaning:"to which country"}]},{usecase:"most Hungarian cities",examples:["Budapestre","Miskolcra","Szegedre"],exceptions:["Egerbe","Debrecenbe","Sopronba"],question_words:[{word:"hova / hov\xe1",meaning:"where to"},{word:"melyik v\xe1rosba",meaning:"to which city"}]},{usecase:"until (deadline)",examples:["h\xe9tf\u0151re","decemberre","2022-re"],question_words:[{word:"mikorra",meaning:"until when"}]},{usecase:"duration",examples:["\xf6t napra","egy h\xe9tre","h\xe1rom \xe9vre"],question_words:[{word:"mennyi id\u0151re",meaning:"for how long"}]}],phrases:[{word:"elutazni a h\xe9tv\xe9g\xe9re",meaning:"to travel away for the weekend"},{word:"v\xe1rni valakire",meaning:"to wait for someone"},{word:"fordulni valamerre (pl. jobbra vagy balra)",meaning:"to turn somewhere (eg. left or right)"}]},{name:"superessive",suffixes:["-n","-on","-en","-\xf6n"],image:"on.png",meaning:"on, upon",pers_prons:["rajtam","rajtad","rajta","rajtunk","rajtatok","rajtuk","\xd6n\xf6n","\xd6n\xf6k\xf6n"],dem_prons:["ezen","azon"],usage:[{usecase:"static position on surface",examples:[{word:"az asztalon",meaning:"on the table"},{word:"a sz\xe9ken",meaning:"on the chair"}],question_words:[{word:"min",meaning:"on what"},{word:"hol",meaning:"where"}]},{usecase:"days of the week",examples:[{word:"h\xe9tf\u0151n",meaning:"on Monday"},"kedden","szerd\xe1n","cs\xfct\xf6rt\xf6k\xf6n","p\xe9nteken","szombaton"],exceptions:[{word:"vas\xe1rnap",meaning:"on Sunday"}],question_words:[{word:"mikor",meaning:"when"},{word:"melyik napon",meaning:"on which day"}]},{usecase:"in Hungary",examples:["Magyarorsz\xe1gon"],question_words:[{word:"hol",meaning:"where"},{word:"melyik orsz\xe1gban",meaning:"in which country"}]},{usecase:"most Hungarian cities",examples:[{word:"Budapesten",meaning:"in Budapest"},{word:"Szegeden",meaning:"in Szeged"}],exceptions:[{word:"Egerben",meaning:"in Eger"},{word:"Debrecenben",meaning:"in Debrecen"}],question_words:[{word:"hol",meaning:"where"},{word:"melyik v\xe1rosban",meaning:"in which city"}]}],phrases:[{word:"gondolkozni valamin",meaning:"to think on / about something"},{word:"\xfclni valamin",meaning:"to sit on something"},{word:"meglep\u0151dni valamin",meaning:"to be surprised on something"},{word:"csod\xe1lkozni valamin",meaning:"to wonder on something"}]},{name:"delative",suffixes:["-r\xf3l","-r\u0151l"],image:"rol.png",meaning:"from",pers_prons:["r\xf3lam","r\xf3lad","r\xf3la","r\xf3lunk","r\xf3latok","r\xf3luk","\xd6nr\u0151l","\xd6n\xf6kr\u0151l"],dem_prons:["err\u0151l","arr\xf3l"],usage:[{usecase:"movement from surface",examples:[{word:"az asztralr\xf3l",meaning:"from the table"},{word:"a sz\xe9kr\u0151l",meaning:"from the chair"},{word:"a f\xf6ldr\u0151l",meaning:"from the ground"}],question_words:[{word:"mir\u0151l",meaning:"from what"},{word:"honnan",meaning:"from where"}]},{usecase:"about something",examples:[{word:"az id\u0151j\xe1r\xe1sr\xf3l besz\xe9lni",meaning:"to talk about the weather"},{word:"t\xf6rt\xe9nelemr\u0151l \xedrni",meaning:"to write about history"}],question_words:[{word:"mir\u0151l",meaning:"about what"}]},{usecase:"from Hungary",examples:["Magyarorsz\xe1gr\xf3l"],question_words:[{word:"honnan",meaning:"from where"},{word:"melyik orsz\xe1gb\xf3l",meaning:"from which country"}]},{usecase:"most Hungarian cities",examples:[{word:"Budapestr\u0151l",meaning:"from Budapest"},{word:"Szegedr\u0151l",meaning:"from Szeged"}],exceptions:["Egerb\u0151l","Debrecenb\u0151l","Sopronb\xf3l"],question_words:[{word:"honnan",meaning:"from where"},{word:"melyik v\xe1rosb\xf3l",meaning:"from which city"}]}],phrases:[{word:"\xedrni valamir\u0151l",meaning:"to write about something"},{word:"besz\xe9lni valamir\u0151l",meaning:"to talk about something"},{word:"hallgatni valamir\u0151l",meaning:"not to talk about something (to stay quiet)"},{word:"sz\xf3lni valamir\u0151l",meaning:"1. to inform about something, 2. to be about a topic (eg. a movie is about something)"},{word:"\xe1lmodni valamir\u0151l",meaning:"to dream about something"},{word:"olvasni valamir\u0151l",meaning:"to read about something"},{word:"gondolkozni valamir\u0151l",meaning:"to think about something"},{word:"veszekedni valamir\u0151l",meaning:"to argue about something"}]},{name:"allative",suffixes:["-hoz","-hez","-h\xf6z"],image:"hoz.png",meaning:"to, towards",pers_prons:["hozz\xe1m","hozz\xe1d","hozz\xe1","hozz\xe1nk","hozz\xe1tok","hozz\xe1juk","\xd6nh\xf6z","\xd6n\xf6kh\xf6z"],dem_prons:["ehhez","ahhoz"],usage:[{usecase:"to something",examples:[{word:"a f\xe1hoz",meaning:"to the tree"},{word:"a h\xe1zhoz",meaning:"to the house"}],question_words:[{word:"hova / hov\xe1",meaning:"where to"},{word:"mihez",meaning:"to what"}]},{usecase:"to someone's house",examples:[{word:"P\xe9terhez",meaning:"to P\xe9ter / to P\xe9ter's house"},{word:"hozz\xe1nk",meaning:"to our house"}],question_words:[{word:"hova / hov\xe1",meaning:"where to"},{word:"kihez",meaning:"to whom"}]},{usecase:"to add something to something",examples:[{word:"hozz\xe1adni valamit valamihez",meaning:"to add something to something"}],question_words:[{word:"mihez",meaning:"to what"}]}],phrases:[{word:"hozz\xe1menni valakihez",meaning:"to marry someone"},{word:"hozz\xe1fogni valamihez",meaning:"to start doing something"},{word:"elmenni valakihez",meaning:"to go to someone's place"},{word:"besz\xe9lni valakihez",meaning:"to talk to someone"}]},{name:"adessive",suffixes:["-n\xe1l","-n\xe9l"],image:"nal.png",meaning:"at",pers_prons:["n\xe1lam","n\xe1lad","n\xe1la","n\xe1lunk","n\xe1latok","n\xe1luk","\xd6nn\xe9l","\xd6n\xf6kn\xe9l"],dem_prons:["enn\xe9l","ann\xe1l"],usage:[{usecase:"by something",examples:[{word:"a f\xe1n\xe1l",meaning:"by the tree"},{word:"a h\xe1zn\xe1l",meaning:"by the house"}],question_words:[{word:"hol",meaning:"where"},{word:"min\xe9l",meaning:"by what"}]},{usecase:"at someone's house",examples:[{word:"P\xe9tern\xe9l",meaning:"at P\xe9ter's house"},{word:"n\xe1lad",meaning:"at your place"}],question_words:[{word:"hol",meaning:"where"},{word:"kin\xe9l",meaning:"at whose place"}]},{usecase:"to go and meet a professional",examples:[{word:"az orvosn\xe1l",meaning:"at the doctor's"},{word:"a f\u0151n\xf6kn\xe9l",meaning:"at the boss's"}],question_words:[{word:"hol",meaning:"where"},{word:"kin\xe9l",meaning:"at whom"}]},{usecase:"to have something with oneself",examples:[{word:"van n\xe1lad v\xedz?",meaning:"do you have water with you?"},{word:"van P\xe9tern\xe9l p\xe9nz",meaning:"P\xe9ter has money on him"},{word:"Katin\xe1l van a k\xf6nyvem",meaning:"Kati has my book (she borrowed it from me)"}],question_words:["kin\xe9l"]},{usecase:"comparing someone to someone",examples:[{word:"magasabb vagy n\xe1lam",meaning:"you are taller than me"},{word:"P\xe9ter gazdagabb Marin\xe1l",meaning:"P\xe9ter is richer than Mari"}],question_words:["kin\xe9l"],note:'"mint" can be used as well: magasabb vagy, mint \xe9n; P\xe9ter gazdagabb, mint Mari'}]},{name:"ablative",suffixes:["-t\xf3l","-t\u0151l"],image:"tol.png",meaning:"away from",pers_prons:["t\u0151lem","t\u0151led","t\u0151le","t\u0151l\xfcnk","t\u0151letek","t\u0151l\xfck","\xd6nt\u0151l","\xd6n\xf6kt\u0151l"],dem_prons:["ett\u0151l","att\xf3l"],usage:[{usecase:"from something",examples:[{word:"a f\xe1t\xf3l",meaning:"from the tree"},{word:"a h\xe1zt\xf3l",meaning:"from the house"}],question_words:[{word:"honnan",meaning:"from where"},{word:"mit\u0151l",meaning:"from what"}]},{usecase:"from someone's house",examples:[{word:"P\xe9tert\u0151l",meaning:"from P\xe9ter's house"},{word:"t\u0151lem",meaning:"from my place"}],question_words:[{word:"honnan",meaning:"from where"},{word:"kit\u0151l",meaning:"from whose place"}]},{usecase:"from someone (eg. a gift)",examples:[{word:"P\xe9tert\u0151l",meaning:"from P\xe9ter"},{word:"t\u0151lem",meaning:"from me"}],question_words:[{word:"kit\u0151l",meaning:"from whom"}]}],phrases:[{word:"kapni (valamit) valakit\u0151l",meaning:"to get (something) from someone"},{word:"f\xe9lni valamit\u0151l",meaning:"to be afraid of something"}]},{name:"instrumental",suffixes:["-val","-vel"],image:"val.png",meaning:"with",pers_prons:["velem","veled","vele","vel\xfcnk","veletek","vel\xfck","\xd6nnel","\xd6n\xf6kkel"],dem_prons:["ezzel","azzal"],usage:[{usecase:"to do something together with someone",examples:[{word:"Ann\xe1val",meaning:"with Anna"},{word:"egy kuty\xe1val",meaning:"with a dog"}],question_words:[{word:"kivel",meaning:"with whom"},{word:"mivel",meaning:"with what"}]},{usecase:"traveling by a means of transport",examples:[{word:"busszal",meaning:"by bus"},{word:"biciklivel",meaning:"by bicycle"},{word:"aut\xf3val",meaning:"by car"},{word:"vonattal",meaning:"by train"},{word:"rep\xfcl\u0151vel",meaning:"by train"}],exceptions:[{word:"gyalog",meaning:"on foot"}],question_words:[{word:"mivel",meaning:"by what"}]},{usecase:"exact comparison",examples:[{word:"egy centim\xe9terrel kisebb",meaning:"smaller by a centimetre"},{word:"h\xe1rom perccel k\xe9s\u0151bb",meaning:"three minutes later"}],question_words:[{word:"mennyivel",meaning:"how much"}]}],phrases:[{word:"besz\xe9lni valakivel",meaning:"to talk with someone"},{word:"tal\xe1lkozni valakivel",meaning:"to meet someone"},{word:"j\xe1tszani valakivel",meaning:"to play with someone"},{word:"szorozni \xf6ttel",meaning:"to multiply by 5"},{word:"osztani kett\u0151vel",meaning:"to divide by two"}],notes:['assimilation: if the word ends with a consonant, the letter "v" from -val or -vel assimilates to this last letter']},{name:"terminative",suffixes:["-ig"],image:"ig.png",meaning:"until",dem_prons:["eddig","addig"],usage:[{usecase:"up to a point in time",examples:[{word:"hatig / hat \xf3r\xe1ig",meaning:"until six / until six o'clock"},{word:"f\xe9l kett\u0151ig",meaning:"until half past one"},{word:"m\xe1rcius 15-ig",meaning:"until 15th March"},{word:"2050-ig",meaning:"until 2050"},{word:"tegnapig",meaning:"until yesterday"},{word:"cs\xfct\xf6rt\xf6kig",meaning:"until Thursday"}],question_words:[{word:"meddig",meaning:"until when"},{word:"mikorra",meaning:"until when"}]},{usecase:"up to an event",examples:[{word:"kar\xe1csonyig",meaning:"until Christmas"},{word:"a 30. sz\xfclinapomig",meaning:"until my 30th birthday"},{word:"a ny\xe1ri sz\xfcnet v\xe9g\xe9ig",meaning:"until the end of the summer holiday"}],question_words:[{word:"meddig",meaning:"until when"}]},{usecase:"duration of time",examples:[{word:"k\xe9t h\xe9tig",meaning:"for two weeks"},{word:"h\xe1rom \xf3r\xe1ig",meaning:"for three hours"},{word:"sok\xe1ig",meaning:"for a long time"}],question_words:[{word:"meddig",meaning:"until when"},{word:"mennyi ideig",meaning:"for how long"}],note:'Phrases like "h\xe1rom \xf3r\xe1ig" also mean "until three o\'clock" (because "\xf3ra" means both "hour" and "o\'clock")'},{usecase:"to somewhere, but not further (German: bis)",examples:[{word:"a f\xe1ig",meaning:"to the tree (not further)"},{word:"az ajt\xf3ig",meaning:"to the door (not further)"}],question_words:[{word:"meddig",meaning:"how far"}]}],phrases:[{word:"aludni valameddig",meaning:"to sleep until some time"},{word:"tartani valameddig",meaning:"to last until some time"},{word:"elmenni valameddig",meaning:"to go until reaching something"}]},{name:"temporal",suffixes:["-kor"],image:"kor.png",meaning:"at a time",dem_prons:["ekkor","akkor"]},{name:"causal",suffixes:["-\xe9rt"],meaning:"for, for the purpose of",pers_prons:["\xe9rtem","\xe9rted","\xe9rte","\xe9rt\xfcnk","\xe9rtetek","\xe9rt\xfck","\xd6n\xe9rt","\xd6n\xf6k\xe9rt"],dem_prons:["ez\xe9rt","az\xe9rt"]},{name:"translative",suffixes:["-v\xe1","-v\xe9"],meaning:"turning into something",dem_prons:["ezz\xe9","azz\xe1"]},{name:"modal",suffixes:["-k\xe9nt"],meaning:"as",dem_prons:["ekk\xe9nt","akk\xe9nt"]}];function f(){var e=Object(o.useState)({visibility:l}),n=Object(m.a)(e,2),a=n[0],i=n[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k,{setMode:i}),Object(h.jsx)("h1",{children:"Cases"}),Object(h.jsxs)(g.Provider,{value:a,children:[console.log("Update ModeContext"),Object(h.jsx)("div",{className:"casesContainer",children:v.map((function(e){return Object(h.jsx)(p,Object(t.a)({},e),e.name)}))})]})]})}var j=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(f,{})})};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(j,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.68429286.chunk.js.map