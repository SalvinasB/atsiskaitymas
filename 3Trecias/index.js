const knyga = {
  pav: "The Art of Star Wars: The Mandalorian",
  autorius: "Phil Szostak",
  puslapiu: 256,

  apibudinimas: function () {
    return `Knyga "${knyga.pav}", autorius ${knyga.autorius}, puslapiu ${knyga.puslapiu}`;
  },
};

console.log(knyga.apibudinimas());
