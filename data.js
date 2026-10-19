/*
  JEMMA PARAMBIL FAMILY DATA
  ──────────────────────────
  One line per person. To add someone, copy a line and change it.

  id        short unique label, no spaces (never change it once set)
  name      full name ("" if not known yet)
  nickname  what the family calls them
  parent    id of their parent from this family
  spouse    id of their husband/wife
  marriedIn true for people who married into the family
  photo     e.g. "photos/naeem.jpg"  (put the image in the photos folder)
  born      year only for living people, e.g. "1998"; full date for those who have passed
            (full birth dates of living people are kept privately, not here)
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
  { id: "hamza", name: "J A Hamza", nickname: "Upaapa", spouse: "fatima", died: "18 Feb 1997", livedIn: "Karuvelippady, Kochi" },
  { id: "fatima", name: "Fathima Beevi", nickname: "Ummumma", marriedIn: true, died: "11 Aug 2026", livedIn: "Karuvelippady, Kochi" },

  // ── Generation 2: the six children ──
  { id: "yousef", name: "J H Yousuf", parent: "hamza", spouse: "zainaba", born: "10 Dec 1953", died: "27 May 2020", livedIn: "Kazhuthumutt, Kochi" },
  { id: "najumma", name: "Najumma J H", parent: "hamza", spouse: "shamsudheen", born: "5 Apr 1957", died: "8 Aug 2026", livedIn: "Palluruthy, Kochi" },
  { id: "attika", name: "Attika Beevi", parent: "hamza", spouse: "gafoor", born: "1958" },
  { id: "lathief", name: "J H Lathif", parent: "hamza", spouse: "zareena", born: "1961" },
  { id: "nadeera", name: "Nadheera J H", parent: "hamza", spouse: "ashraf" },
  { id: "navas", name: "J H Navas", parent: "hamza", spouse: "shafeena", born: "1969" },

  { id: "zainaba", name: "Sainaba Yousuf", marriedIn: true, born: "22 Feb 1960", died: "20 Aug 2026", livedIn: "Kazhuthumutt, Kochi" },
  { id: "shamsudheen", name: "Shamsudheen", marriedIn: true },
  { id: "gafoor", name: "Abdul Gafoor", marriedIn: true },
  { id: "zareena", name: "Zareena Lathif", marriedIn: true, born: "1961" },
  { id: "ashraf", name: "Muhammad Ashraf", marriedIn: true },
  { id: "shafeena", name: "Shafeena Navas", marriedIn: true, born: "1974" },

  // ── J H Yousuf's family ──
  { id: "niyas", name: "Niyas J Y", parent: "yousef", spouse: "annath", born: "6 May 1978", died: "19 Jun 2025", livedIn: "Kazhuthumutt, Kochi" },
  { id: "thachi", name: "Thasni Ziad", nickname: "Thachi", parent: "yousef", spouse: "siyad", born: "1980" },
  { id: "nizad", name: "Nizad J Y", parent: "yousef", spouse: "siya", born: "1983" },
  { id: "annath", name: "Annath M A", marriedIn: true, born: "1984" },
  { id: "siyad", name: "Ziad Mohammed", marriedIn: true, born: "1975" },
  { id: "siya", name: "Fousiyamol T A", nickname: "Siya", marriedIn: true, born: "1987" },
  { id: "nadeem", name: "Nadeem J N", parent: "niyas", born: "2007" },
  { id: "naira", name: "Naira J N", parent: "niyas", born: "2010" },
  { id: "farah", name: "Farah Ziad", parent: "thachi", born: "2005" },
  { id: "farhan", name: "Farhan Ziyad", parent: "thachi", born: "2008" },
  { id: "thachi_3", name: "Amrin Ziyad", parent: "thachi", born: "2013" },
  { id: "amal", name: "Amaal Ziyad", parent: "thachi", born: "2015" },
  { id: "ishal", name: "Eshal Anam Nizad", parent: "nizad", born: "2020" },

  // ── Najumma's family ──
  { id: "shanu", name: "Shanuja Ubaid", nickname: "Shanu", parent: "najumma", spouse: "ubaid", born: "1975" },
  { id: "shejina", name: "Shajina Harris", parent: "najumma", spouse: "harris", born: "1977" },
  { id: "shajeer", name: "Shajeer Shamsudheen", parent: "najumma", spouse: "ransi", born: "1979" },
  { id: "ubaid", name: "Ubaid", marriedIn: true },
  { id: "harris", name: "Harris", marriedIn: true },
  { id: "ransi", name: "Rancy Shajeer", marriedIn: true, born: "1992" },
  { id: "ichu", name: "Sahal Ubaid", nickname: "Ichu", parent: "shanu", born: "1999" },
  { id: "sonu", name: "Suhana Ubaid", nickname: "Sonu", parent: "shanu", born: "2002" },
  { id: "shejina_1", name: "Alim Harris", parent: "shejina", born: "2005" },
  { id: "shejina_2", name: "Aman Harris", parent: "shejina", born: "2008" },
  { id: "shejina_3", name: "Ayaana Harris", parent: "shejina", born: "2015" },
  { id: "shajeer_1", name: "Zayan Shajeer", parent: "shajeer", born: "2012" },
  { id: "fatima_s", name: "Zehra Fatima", parent: "shajeer", born: "2018" },
  { id: "zayan", name: "Zinan Shajeer", parent: "shajeer", born: "2020" },

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

  // ── J H Lathif's family ──
  { id: "anjum", name: "Anjum Sajeeth", parent: "lathief", spouse: "sajeed", born: "1987" },
  { id: "aneesa", name: "Aneesa Rameez", parent: "lathief", spouse: "rameez", born: "1992" },
  { id: "aaliya", name: "Aaliya JL", parent: "lathief", born: "1997" },
  { id: "sajeed", name: "Mohammed Sajeeth", marriedIn: true, born: "1981" },
  { id: "rameez", name: "Ramees AK", marriedIn: true, born: "1988" },
  { id: "omar", name: "Omar Muhammed", parent: "anjum", born: "2010" },
  { id: "ammar", name: "Ammar Muhammed", parent: "anjum", born: "2013" },
  { id: "sama", name: "Samah Mohammed Sajeeth", parent: "anjum", born: "2015" },
  { id: "rihaan_a", name: "Rayyan Ramees", parent: "aneesa", born: "2016" },
  { id: "arsh", name: "Arsh Rameez", parent: "aneesa", born: "2019" },

  // ── Nadheera's family ──
  { id: "suttu", name: "Nishana Ashraf", nickname: "Suttu", parent: "nadeera", spouse: "harish" },
  { id: "nazrin", name: "Nazrin Ashraf", parent: "nadeera", spouse: "anfal" },
  { id: "noufin", name: "Noufin Ashraf", parent: "nadeera", spouse: "riyaz" },
  { id: "harish", name: "Harish Hameed", marriedIn: true },
  { id: "anfal", name: "Anfal Salim", marriedIn: true },
  { id: "riyaz", name: "Muhammad Riyas", marriedIn: true },
  { id: "rihaan_s", name: "Rihan Harish", parent: "suttu" },
  { id: "suttu_2", name: "Haroon Harish", parent: "suttu" },
  { id: "jazza", name: "Jaza Anfal", parent: "nazrin" },
  { id: "khalif", name: "Khaleef Anfal", parent: "nazrin" },
  { id: "piya", name: "Fiya Fathima Riyas", parent: "noufin" },

  // ── J H Navas's family ──
  { id: "zebah", name: "Zebah Navas", parent: "navas", spouse: "hans", born: "1995" },
  { id: "naeem", name: "Mohamed Naeem Navas", parent: "navas", born: "2000" },
  { id: "hyder", name: "Mohamed Hyder Navas", parent: "navas", born: "2006" },
  { id: "hans", name: "Hans M H", marriedIn: true, born: "1988" },
  { id: "irik", name: "Irik Wiem Zehn", parent: "zebah", born: "2024" },
];
