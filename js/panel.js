const animals = {
  tango: {
    name: "Tango",
    species: "Red Panda (Ailurus fulgens)",
    sex: "Male",
    age: "10",
    birthday: "July 30, 2015",
    arrived: "Born at EVZ",
    about: "Tango is the uncontested king of the channel, preferring a quiet life of frequent naps, biscuits, and tax collection. Hard to impress but impossible to ignore, Tango may grant his approval to viewers who pay tribute through channel point and donation offerings (aka the "Tango Tax") made in his honour.
He has played an important role in the Red Panda Species Survival Plan (SSP), most recently siring Fred and George, with partner Kiki at the Edmonton Valley Zoo. He previously fathered five additional cubs (Tanvi, Little Red, Suva, Crimson, and Mambo) with Sachi during his time at Assiniboine Park Zoo.",
    identifiers: "Round face and oval-shaped eyebrows",
    status: "Endangered",
    conservation: "Red pandas face growing threats..."
  },

  kiki: {
    name: "Kiki",
    species: "Red panda (Ailurus fulgens)",
    sex: "Female",
    age: "6",
    birthday: "June 7, 2019",
    arrived: "2021",
    about: "Kiki is a curious and confident red panda...",
    identifiers: "Downturned ears and light coloration",
    status: "Endangered",
    conservation: "Red pandas face growing threats..."
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
}

showAnimal("tango");
