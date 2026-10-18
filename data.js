/*
  JEMMA PARAMBU FAMILY DATA
  ─────────────────────────
  One line per person. To add someone, copy a line and change it.

  id        short unique label, no spaces (never change it once set)
  name      full name ("" if not known yet)
  nickname  what the family calls them
  parent    id of their parent from this family
  spouse    id of their husband/wife
  marriedIn true for people who married into the family
  photo     e.g. "photos/naeem.jpg"  (put the image in the photos folder)
  born      year only for living people, e.g. "1998"; full date for those who have passed
  died      date they passed away
  livedIn   hometown / house name, e.g. "House name, Town"
  knownFor  main thing they did in life (elders), e.g. "Rice merchant, Bazaar Road"
  memory    one plain line the family remembers them by (those who have passed)

  To add J A Hamza's father later: add him as a new person,
  then give J A Hamza  parent: "<his id>".
*/

const ROOT = "hamza";   // who the tree starts from by default

const PEOPLE = [
  // ── Generation 1 ──
  { id: "hamza", name: "J A Hamza", spouse: "fatima" },
  { id: "fatima", name: "Fatima Beevi", marriedIn: true },

  // ── Generation 2: the six children ──
  { id: "yousef", name: "J H Yousef", parent: "hamza", spouse: "zainaba" },
  { id: "najumma", name: "Najumma", parent: "hamza" },
  { id: "attika", name: "Attika Beevi", parent: "hamza", spouse: "gafoor" },
  { id: "lathief", name: "J H Lathief", parent: "hamza", spouse: "zareena" },
  { id: "nadeera", name: "Nadeera", parent: "hamza", spouse: "ashraf" },
  { id: "navas", name: "J H Navas", parent: "hamza", spouse: "shafeena" },

  { id: "zainaba", name: "Zainaba", marriedIn: true },
  { id: "gafoor", name: "Abdul Gafoor", marriedIn: true },
  { id: "zareena", name: "Zareena", marriedIn: true },
  { id: "ashraf", name: "Ashraf", marriedIn: true },
  { id: "shafeena", name: "Shafeena", marriedIn: true },

  // ── J H Yousef's family ──
  { id: "niyas", name: "Niyas", parent: "yousef" },
  { id: "thachi", name: "Thachi", parent: "yousef", spouse: "siyad" },
  { id: "nizad", name: "Nizad Yousef", parent: "yousef", spouse: "siya" },
  { id: "siyad", name: "Siyad", marriedIn: true },
  { id: "siya", name: "Siya", marriedIn: true },
  { id: "nadeem", name: "Nadeem", parent: "niyas" },
  { id: "naira", name: "Naira", parent: "niyas" },
  { id: "farah", name: "Farah", parent: "thachi" },
  { id: "farhan", name: "Farhan", parent: "thachi" },
  { id: "thachi_3", name: "Nourin", parent: "thachi" },
  { id: "amal", name: "Amal", parent: "thachi" },
  { id: "ishal", name: "Ishal", parent: "nizad" },

  // ── Najumma's family ──
  { id: "shanu", name: "Shanu", parent: "najumma", spouse: "ubaid" },
  { id: "shejina", name: "Shejina", parent: "najumma", spouse: "harris" },
  { id: "shajeer", name: "Shajeer", parent: "najumma", spouse: "ransi" },
  { id: "ubaid", name: "Ubaid", marriedIn: true },
  { id: "harris", name: "Harris", marriedIn: true },
  { id: "ransi", name: "Ransi", marriedIn: true },
  { id: "sonu", name: "Sonu", parent: "shanu" },
  { id: "ichu", name: "Ichu", parent: "shanu" },
  { id: "shejina_1", name: "", parent: "shejina" },
  { id: "shejina_2", name: "", parent: "shejina" },
  { id: "shejina_3", name: "", parent: "shejina" },
  { id: "shajeer_1", name: "", parent: "shajeer" },
  { id: "fatima_s", name: "Fatima", parent: "shajeer" },
  { id: "zayan", name: "Zayan", parent: "shajeer" },

  // ── Attika Beevi's family ──
  { id: "thasmila", name: "Thasmila", parent: "attika", spouse: "ziyad" },
  { id: "thanzil", name: "Thanzil", parent: "attika", spouse: "nisha" },
  { id: "ziyad", name: "Ziyad", marriedIn: true },
  { id: "nisha", name: "Nisha", marriedIn: true },
  { id: "jannath", name: "Jannath", parent: "thasmila" },
  { id: "shaji", name: "Shaji", parent: "thasmila" },
  { id: "issa", name: "Issa", parent: "thasmila" },
  { id: "rivaan", name: "Rivaan", parent: "thanzil" },
  { id: "zidan", name: "Zidan", parent: "thanzil" },

  // ── J H Lathief's family ──
  { id: "anjum", name: "Anjum", parent: "lathief", spouse: "sajeed" },
  { id: "aneesa", name: "Aneesa", parent: "lathief", spouse: "rameez" },
  { id: "aaliya", name: "Aaliya", parent: "lathief" },
  { id: "sajeed", name: "Sajeed", marriedIn: true },
  { id: "rameez", name: "Rameez", marriedIn: true },
  { id: "omar", name: "Omar", parent: "anjum" },
  { id: "ammar", name: "Ammar", parent: "anjum" },
  { id: "sama", name: "Sama", parent: "anjum" },
  { id: "rihaan_a", name: "Rihaan", parent: "aneesa" },
  { id: "arsh", name: "Arsh", parent: "aneesa" },

  // ── Nadeera's family ──
  { id: "suttu", name: "Suttu", parent: "nadeera", spouse: "harish" },
  { id: "nazrin", name: "Nazrin", parent: "nadeera", spouse: "anfal" },
  { id: "noufin", name: "Noufin", parent: "nadeera", spouse: "riyaz" },
  { id: "harish", name: "Harish", marriedIn: true },
  { id: "anfal", name: "Anfal", marriedIn: true },
  { id: "riyaz", name: "Riyaz", marriedIn: true },
  { id: "rihaan_s", name: "Rihaan", parent: "suttu" },
  { id: "suttu_2", name: "", parent: "suttu" },
  { id: "jazza", name: "Jazza", parent: "nazrin" },
  { id: "khalif", name: "Khalif", parent: "nazrin" },
  { id: "piya", name: "Piya", parent: "noufin" },

  // ── J H Navas's family ──
  { id: "zebah", name: "Zebah", parent: "navas", spouse: "hans" },
  { id: "naeem", name: "Naeem", parent: "navas" },
  { id: "hyder", name: "Hyder", parent: "navas" },
  { id: "hans", name: "Hans", marriedIn: true },
  { id: "irik", name: "Irik", parent: "zebah" },
];
