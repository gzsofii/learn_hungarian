/*[Eszem] az almát. (én, enni)
Almát [eszek] (én, enni).
[Látsz] rendőrt? (te, látni)
[Látod] a rendőrt? (te, látni)
Pofont [kap]. (ő, kapni)
Ő [kapja] a pofont. (ő, kapni)
Mária spagettit [eszik]. (enni)
Mennyi fát [láttok] (ti, látni)?
[Látod] a sárga házat? (te, látni)*/

const exercises = [
    {
        sentence: "_ az almát.",
        solution: "eszem",
        words: "én, enni",
        meaning: "I am eating the apple"
    },
    {
        sentence: "Almát _.",
        solution: "eszek",
        words: "én, enni",
        meaning: "I am eating apple"
    },
    {
        sentence: "_ rendőrt?",
        solution: "látsz",
        words: "te, látni",
        meaning: "Do you see any policemen?"
    },
    {
        sentence: "_ a rendőrt?",
        solution: "látod",
        words: "te, látni",
        meaning: "Do you see the policemen?"
    },
    {
        sentence: "A sárga házat _.",
        solution: "keressük",
        words: "mi, keresni",
        meaning: "We are looking for the yellow house."
    },

    {
        sentence: "Egy sárga házat _.",
        solution: "keresünk",
        words: "mi, keresni",
        meaning: "We are looking for a yellow house."
    },
    {
        sentence: "_ egy új ruhát.",
        solution: "vesz",
        words: "ő, venni",
        meaning: "She is buying a new dress."
    },
    {
        sentence: "_ ezt a ruhát.",
        solution: "megveszi",
        words: "ő, megvenni",
        meaning: "She is buying this dress."
    },
    {
        sentence: "Mennyi fát _?",
        solution: "láttok",
        words: "ti, látni",
        meaning: "How many trees do you see?"
    },
    /*{
        sentence: "",
        words: "",
        solution: "",
        meaning: ""
    },*/

]

export default exercises