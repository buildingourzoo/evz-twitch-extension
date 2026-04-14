const animals = {
  tango: {
    name: "Tango",
    species: "Red Panda (Ailurus fulgens)",
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
    species: "Red panda (Ailurus fulgens)",
    sex: "Female",
    age: "6",
    birthday: "June 7, 2019",
    arrived: "2021",
    about: "Kiki is a curious and confident red panda, always happy to participate in training sessions or investigate new enrichments, especially when something new catches her attention. She is the proud mother of Fred and George, her first-ever cubs, born at the Edmonton Valley Zoo.",
    identifiers: "Downturned ears and light coloration",
    status: "Endangered",
    conservation: "Red pandas face growing threats from habitat loss, fragmentation, and human pressures that continue to reduce and isolate wild populations, with estimates suggesting there may be as few as 2,500 remaining in the wild. Through the Red Panda Network, we're proud to support critical conservation work in Nepal, including the establishment of a biological corridor that reconnects fragmented habitat and supports a more resilient future for red pandas in the wild."
  }
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
