const animals = {
  tango: {
    name: "Tango",
    species: "Red Panda (Ailurus fulgens styani)",
    sex: "Male",
    age: "10",
    birthday: "July 30, 2015",
    arrived: "Born at EVZ",
    about: "Tango is the uncontested king of the channel, preferring a quiet life of frequent naps, biscuits, and tax collection. Hard to impress but impossible to ignore, Tango may grant his approval to viewers who pay tribute through channel point and donation offerings (aka the 'Tango Tax') made in his honour. He has played an important role in the Red Panda Species Survival Plan (SSP), most recently siring Fred and George, with partner Kiki at the Edmonton Valley Zoo. He previously fathered five additional cubs (Tanvi, Little Red, Suva, Crimson, and Mambo) with Sachi during his time at Assiniboine Park Zoo.",
    identifiers: "Round face and oval-shaped eyebrows",
    status: "Endangered",
    conservation: "Red pandas face growing threats from habitat loss, fragmentation, and human pressures that continue to reduce and isolate wild populations, with estimates suggesting there may be as few as 2,500 remaining in the wild. Through the Red Panda Network, we're proud to support critical conservation work in Nepal, including the establishment of a biological corridor that reconnects fragmented habitat and supports a more resilient future for red pandas in the wild."
  },

  kiki: {
    name: "Kiki",
    species: "Red panda (Ailurus fulgens styani)",
    sex: "Female",
    age: "6",
    birthday: "June 07, 2019",
    arrived: "2021",
    about: "Kiki is a curious and confident red panda, always happy to participate in training sessions or investigate new enrichments, especially when something new catches her attention. She is the proud mother of Fred and George, her first-ever cubs, born at the Edmonton Valley Zoo.",
    identifiers: "Downturned ears and light coloration",
    status: "Endangered",
    conservation: "Red pandas face growing threats from habitat loss, fragmentation, and human pressures that continue to reduce and isolate wild populations, with estimates suggesting there may be as few as 2,500 remaining in the wild. Through the Red Panda Network, we're proud to support critical conservation work in Nepal, including the establishment of a biological corridor that reconnects fragmented habitat and supports a more resilient future for red pandas in the wild."
  },

  fred: {
    name: "Fred",
    species: "Red panda (Ailurus fulgens styani)",
    sex: "Male",
    age: "1",
    birthday: "July 07, 2024",
    arrived: "Born at EVZ",
    about: "Fred personality info",
    identifiers: "Lighter markings under eyes, thinner dark stripes around snout, more pointed face",
    status: "Endangered",
    conservation: "Red pandas face growing threats from habitat loss, fragmentation, and human pressures that continue to reduce and isolate wild populations, with estimates suggesting there may be as few as 2,500 remaining in the wild. Through the Red Panda Network, we're proud to support critical conservation work in Nepal, including the establishment of a biological corridor that reconnects fragmented habitat and supports a more resilient future for red pandas in the wild."
  },

  george: {
    name: "George",
    species: "Red panda (Ailurus fulgens styani)",
    sex: "Male",
    age: "1",
    birthday: "July 07, 2024",
    arrived: "Born at EVZ",
    about: "George personality info",
    identifiers: "Lighter markings under eyes, thinner dark stripes around snout, more pointed face",
    status: "Endangered",
    conservation: "Red pandas face growing threats from habitat loss, fragmentation, and human pressures that continue to reduce and isolate wild populations, with estimates suggesting there may be as few as 2,500 remaining in the wild. Through the Red Panda Network, we're proud to support critical conservation work in Nepal, including the establishment of a biological corridor that reconnects fragmented habitat and supports a more resilient future for red pandas in the wild."
  },

  hula: {
    name: "Hula",
    species: "Harbour seal (Phoca vitulina)",
    sex: "Female",
    age: "19",
    birthday: "est. between May 15 - July 15, 2006",
    arrived: "2007",
    about: "Personality information to be added",
    identifiers: "Largest harbour seal at EVZ, most gray/mottled in colour, forked tongue",
    status: "Least Concern",
    conservation: "Conservation info"
  },

  sushi: {
    name: "Sushi",
    species: "Harbour seal (Phoca vitulina)",
    sex: "Female",
    age: "21",
    birthday: "est. between June 10 - 14, 2004",
    arrived: "2017",
    about: "Personality information to be added",
    identifiers: "Has a toonie sized light grey patch on the back left side of her head, more grey than Wasabi",
    status: "Least Concern",
    conservation: "Conservation info"
  },

  wasabi: {
    name: "Wasabi",
    species: "Harbour seal (Phoca vitulina)",
    sex: "Female",
    age: "20",
    birthday: "est. between June 04 - 06, 2005",
    arrived: "2007",
    about: "Personality information to be added",
    identifiers: "Smallest harbour seal at EVZ, has the darkest face with the least number of spots",
    status: "Least Concern",
    conservation: "Conservation info"
  },

  sophia: {
    name: "Sophia",
    species: "Northern fur seal (Callorhinus ursinus)",
    sex: "Female",
    age: "~15",
    birthday: "est. between June 15, 2009 - June 15, 2011",
    arrived: "2012",
    about: "Personality information to be added",
    identifiers: "Info",
    status: "Vulnerable",
    conservation: "Conservation info"
  },

  mischa: {
    name: "Mischa",
    species: "Northern fur seal (Callorhinus ursinus)",
    sex: "Female",
    age: "~15",
    birthday: "est. between June 15, 2009 - June 15, 2011",
    arrived: "2012",
    about: "Personality information to be added",
    identifiers: "Info",
    status: "Vulnerable",
    conservation: "Conservation info"
  },

  isadora: {
    name: "Isadora",
    species: "Northern fur seal (Callorhinus ursinus)",
    sex: "Female",
    age: "~15",
    birthday: "est. between June 15, 2009 - June 15, 2011",
    arrived: "2012",
    about: "Personality information to be added",
    identifiers: "Info",
    status: "Vulnerable",
    conservation: "Conservation info"
  },

  nika: {
    name: "Nika",
    species: "Northern fur seal (Callorhinus ursinus)",
    sex: "Female",
    age: "13",
    birthday: "July 20, 2012",
    arrived: "Born at EVZ",
    about: "Personality information to be added",
    identifiers: "Info",
    status: "Vulnerable",
    conservation: "Conservation info"
  },
  
};

function showAnimal(key) {
  const a = animals[key];

  document.getElementById("name").innerText = a.name;
  document.getElementById("species").innerText = a.species;
  document.getElementById("sex").innerText = a.sex;
  document.getElementById("age").innerText = a.age;
  document.getElementById("birthday").innerText = a.birthday;
  document.getElementById("arrived").innerText = a.arrived;
  document.getElementById("about").innerText = a.about;
  document.getElementById("identifiers").innerText = a.identifiers;
  document.getElementById("status").innerText = a.status;
  document.getElementById("conservation").innerText = a.conservation;
  var lightBox = document.getElementById("lightbox");
  lightBox.style.pointerEvents = "auto";
  lightBox.style.opacity = 1;
}

function hideCard() {
  var lightBox = document.getElementById("lightbox");
  lightBox.style.pointerEvents = "none";
  lightBox.style.opacity = 0;
}
 
