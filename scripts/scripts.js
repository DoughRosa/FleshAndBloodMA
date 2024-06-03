const resultBox = document.querySelector(".result-box");
const searchInput = document.getElementById("searchInput");

let currentIndex = -1;

function navigateResults(key) {
  const results = document.querySelectorAll(".result-box li");

  if (key === "ArrowDown") {
    currentIndex = (currentIndex + 1) % results.length;
  } else if (key === "ArrowUp") {
    currentIndex = (currentIndex - 1 + results.length) % results.length;
  }

  results.forEach((result, index) => {
    result.classList.toggle("active", index === currentIndex);
  });

  if (results[currentIndex]){
    searchInput.value = results[currentIndex].innerHTML;
  }
}

searchInput.onkeyup = function (event) {
  let result = [];
  let input = searchInput.value.trim().toLowerCase();

  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    navigateResults(event.key);
    return;
  }

  if (input.length >= 3) {
    result = heroes.filter((hero) => {
      return hero.fullName.toLowerCase().includes(input);
    });

    displayResult(result);
  } else {
    resultBox.innerHTML = "";
    currentIndex = -1;
  }
};

function displayResult(result) {
  if (result.length) {
    const content = result.map((list) => {
      return `<li onclick="selectInput(this)">${list.fullName}</li>`;
    });
    resultBox.innerHTML = "<ul>" + content.join(``) + "</ul>";
  } else {
    resultBox.innerHTML = "";
  }
}

function selectInput(list) {
  searchInput.value = list.innerHTML;
  resultBox.innerHTML = "";
}

function searchHero() {
  const searchInputValue = document
    .getElementById("searchInput")
    .value;

  const filteredHeroes = heroes.filter((hero) => {
    return hero.fullName.toLowerCase().includes(searchInputValue.toLowerCase());
  });

  if (searchInputValue == "Arakni Huntsman") {
    localStorage.setItem('printPage', 'printPageArakni');
    window.location.href = "heroArakni.html";
  }
  if (searchInputValue == "Azalea, Ace in the Hole") {
    localStorage.setItem('printPage', 'printPageAzalea');
    window.location.href = "heroAzalea.html";
  }
  if (searchInputValue == "Betsy, Skin in the Game") {
    localStorage.setItem('printPage', 'printPageBetsy');
    window.location.href = "heroBetsy.html";
  }
  if (searchInputValue == "Bravo, Showstopper") {
    localStorage.setItem('printPage', 'printPageBravo');
    window.location.href = "heroBravo.html";
  }
  if (searchInputValue == "Dash, Inventor Extraordinare") {
    localStorage.setItem('printPage', 'printPageDash');
    window.location.href = "heroDash.html";
  }
  if (searchInputValue == "Dorinthea Ironsong") {
    localStorage.setItem('printPage', 'printPageDorinthea');
    window.location.href = "heroDorinthea.html";
  }
  if (searchInputValue == "Dromai, Ash Artist") {
    localStorage.setItem('printPage', 'printPageDromai');
    window.location.href = "heroDromai.html";
  }
  if (searchInputValue == "Enigma, Ledger of Ancestry") {
    localStorage.setItem('printPage', 'printPageEnigma');
    window.location.href = "heroEnigma.html";
  }
  if (searchInputValue == "Fai, Rising Rebellion") {
    localStorage.setItem('printPage', 'printPageFai');
    window.location.href = "heroFai.html";
  }
  if (searchInputValue == "Kano, Dracai of Aether") {
    localStorage.setItem('printPage', 'printPageKano');
    window.location.href = "heroKano.html";
  }
  if (searchInputValue == "Kassai of the Golden Sand") {
    localStorage.setItem('printPage', 'printPageKassai');
    window.location.href = "heroKassai.html";
  }
  if (searchInputValue == "Katsu, the Wanderer") {
    localStorage.setItem('printPage', 'printPageKatsu');
    window.location.href = "heroKatsu.html";
  }
  if (searchInputValue == "Kayo, Armed and Dangerous") {
    localStorage.setItem('printPage', 'printPageKayo');
    window.location.href = "heroKayo.html";
  }
  if (searchInputValue == "Levia, Shadowborn Abomination") {
    localStorage.setItem('printPage', 'printPageLevia');
    window.location.href = "heroLevia.html";
  }
  if (searchInputValue == "Maxx The Hype Nitro") {
    localStorage.setItem('printPage', 'printPageMaxx');
    window.location.href = "heroMaxx.html";
  }
  if (searchInputValue == "Nuu, Alluring Desire") {
    localStorage.setItem('printPage', 'printPageNuu');
    window.location.href = "heroNuu.html";
  }
  if (searchInputValue == "Olympia, Prized Fighter") {
    localStorage.setItem('printPage', 'printPageOlympia');
    window.location.href = "heroOlympia.html";
  }
  if (searchInputValue == "Rhinar, Reckless Rampage") {
    localStorage.setItem('printPage', 'printPageRhinar');
    window.location.href = "heroRhinar.html";
  }
  if (searchInputValue == "Riptide, Lurker of the Deep") {
    localStorage.setItem('printPage', 'printPageRiptide');
    window.location.href = "heroRiptide.html";
  }
  if (searchInputValue == "Ser Boltyn, Breaker of Dawn") {
    localStorage.setItem('printPage', 'printPageBoltyn');
    window.location.href = "heroBoltyn.html";
  }
  if (searchInputValue == "Teklovossen, Esteemed Magnate") {
    localStorage.setItem('printPage', 'printPageTeklovossen');
    window.location.href = "heroTeklovossen.html";
  }
  if (searchInputValue == "Uzuri, Switchblade") {
    localStorage.setItem('printPage', 'printPageUzuri');
    window.location.href = "heroUzuri.html";
  }
  if (searchInputValue == "Victor Goldmane, High and Mighty") {
    localStorage.setItem('printPage', 'printPageVictor');
    window.location.href = "heroVictor.html";
  }
  if (searchInputValue == "Viserai, Rune Blood") {
    localStorage.setItem('printPage', 'printPageViserai');
    window.location.href = "heroViserai.html";
  }
  if (searchInputValue == "Vynnset, Iron Maiden") {
    localStorage.setItem('printPage', 'printPageVynnset');
    window.location.href = "heroVynnset.html";
  }
  if (searchInputValue == "Zen, Tamer of Purpose") {
    localStorage.setItem('printPage', 'printPageZen');
    window.location.href = "heroZen.html";
  }
  if (searchInputValue == "Dash I/O") {
    localStorage.setItem('printPage', 'printPageIo');
    window.location.href = "heroIo.html";
  }
  if (searchInputValue == "Prism, Awakener of Sol") {
    localStorage.setItem('printPage', 'printPagePrism');
    window.location.href = "heroPrism.html";
  }
  else if (filteredHeroes.length === 0) {
    const siteContent = document.getElementById("site-content");

    siteContent.innerHTML = ``;

    siteContent.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-12 d-flex justify-content-center align-items-center ops">
                <h1><span style="color: black; font-weight: bolder;">Ops!</span> There is no hero named "${searchInput.value}"!</h1>
            </div>
        </div>
      `;
  }
}

const classes = [
  {
    class: "Latest",
  },
  {
    class: "Worlds",
  },
  {
    class: "Protour",
  },
  {
    class: "Calling",
  },
  {
    class: "Bh",
  },
  {
    class: "Pq"
  },
  {
    class: "Age",
  }
];

const rowLatest = document.getElementById(`row_latest`);
const rowWorlds = document.getElementById(`row_worlds`);
const rowProtour = document.getElementById(`row_protour`);
const rowCalling = document.getElementById(`row_calling`);
const rowBh = document.getElementById(`row_bh`);
const rowPq = document.getElementById(`row_pq`);
const rowAge = document.getElementById(`row_age`);

const currentPageLatest = document.getElementById(`latestCurrentPage`);
const currentPageWorlds = document.getElementById(`worldsCurrentPage`);
const currentPageProtour = document.getElementById(`protourCurrentPage`);
const currentPageCalling = document.getElementById(`callingCurrentPage`);
const currentPageBh = document.getElementById(`bhCurrentPage`);
const currentPagePq = document.getElementById(`pqCurrentPage`);
const currentPageAge = document.getElementById(`ageCurrentPage`);

const videoCategories = [
  { row: rowLatest,
    filter: () => true, page: 1 },
  {
    row: rowWorlds,
    filter: (video) => video.class.includes("worlds"),
    page: 1,
  },
  {
    row: rowProtour,
    filter: (video) => video.class.includes("protour"),
    page: 1,
  },
  {
    row: rowCalling,
    filter: (video) => video.class.includes("calling"),
    page: 1,
  },
  {
    row: rowBh,
    filter: (video) => video.class.includes("battlehardned"),
    page: 1,
  },
  { row: rowAge, 
    filter: (video) => video.class.includes("age"), 
    page: 1 
  },
  {
    row: rowPq,
    filter: (video) => video.class.includes("pq"),
    page: 1,
  },

];

let pageLatest = videoCategories[0].page;
let pageWorlds = videoCategories[1].page;
let pageProtour = videoCategories[2].page;
let pageCalling = videoCategories[3].page;
let pageBh = videoCategories[4].page;
let pageAge = videoCategories[5].page;
let pagePq = videoCategories[6].page;