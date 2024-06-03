let displayCount = 5;

const screenSize = window.innerWidth;

if(screenSize <= 600){
  displayCount = 1;
} else if (screenSize > 400 && screenSize <= 768){
  displayCount = 4;
} 

document.getElementById("searchButton").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>`

const modalMovie = new bootstrap.Modal("#modal-movie", {});
const bodyMovie = document.getElementById("modal-body-movie");
let currentVideoPlayer;

function openModalMovie(code) {
  bodyMovie.innerHTML = `
  <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/${code}"
              title="How to Embed a YouTube Video on Website Responsively with HTML &amp; CSS"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>`;
  modalMovie.show();

  currentVideoPlayer = bodyMovie.querySelector("iframe");
}

modalMovie._element.addEventListener("hide.bs.modal", function () {
  if (currentVideoPlayer) {
    currentVideoPlayer.src = ``;
  }
});

function addCard(hero, page) {
  const startIndex = (page - 1) * displayCount;
  const endIndex = startIndex + displayCount;

  console.log(displayCount)

  const showedVideos = hero.videos.slice(startIndex, endIndex);

  const rowCards = document.getElementById(`row_${hero.name.toLowerCase()}`);

  if (rowCards) {
    rowCards.innerHTML = "";

    showedVideos.forEach((video) => {
      const videoCard = `
      <div class="card-hero col-2 m-3 pb-3">
                  <img class="card-img" src="https://img.youtube.com/vi/${video.hash}/sddefault.jpg" alt="thumbnail">
                      <h3 class="card-title text-center ">${video.title}</h3>
                      <div class="card-body pb-4 text-light">
                          <p class="card-text">${video.description}</p>
                          <button
                            type="button"
                            class="btn btn-danger"
                            onclick="openModalMovie('${video.game}')"
                          >
                            Watch Now!
                          </button>
                        </div>
                      </div>`;

      rowCards.innerHTML += videoCard;
    });
  }

  updatePagination(hero)
}

function updatePagination(hero) {
  document.getElementById(
    `${hero.name.toLowerCase()}CurrentPage`
  ).innerHTML = `${hero.page}`;
  document.getElementById(`${hero.name.toLowerCase()}FirstPageBtn`).disabled =
    hero.page === 1;
  document.getElementById(`${hero.name.toLowerCase()}PrevPageBtn`).disabled =
    hero.page === 1;
  const pagesLength = Math.ceil(hero.videos.length / displayCount);
  document.getElementById(`${hero.name.toLowerCase()}NextPageBtn`).disabled =
    hero.page >= pagesLength;
  document.getElementById(`${hero.name.toLowerCase()}LastPageBtn`).disabled =
    hero.page >= pagesLength;
}

function firstPage(hero) {
  hero.page = 1;
  addCard(hero, hero.page);
  updatePagination(hero);
}

function lastPage(hero) {
  hero.page = Math.ceil(hero.videos.length / displayCount);
  addCard(hero, hero.page);
  updatePagination(hero);
}

function nextPage(hero) {
  const pagesLength = Math.ceil(hero.videos.length / displayCount);
  if (hero.page < pagesLength) {
    hero.page += 1;
    addCard(hero, hero.page);
    updatePagination(hero);
  }
}

function prevPage(hero) {
  if (hero.page > 1) {
    hero.page -= 1;
    addCard(hero, hero.page);
    updatePagination(hero);
  }
}

function heroiFiltrado(heroi) {
  const videoFiltrado = videos.filter((video) => video.hero.includes(heroi));
  const videoHeroiFiltrado = videoFiltrado.map((video) => {
    return {
      ...video,
      played: heroi,
    };
  });
  return videoHeroiFiltrado;
}


const videoArakni = heroiFiltrado("arakni");

const videoAzalea = heroiFiltrado("azalea");

const videoBetsy = heroiFiltrado("betsy");

const videoBravo = heroiFiltrado("bravo");

const videoDash = heroiFiltrado("dash");

const videoIo = heroiFiltrado("Io");

const videoDorinthea = heroiFiltrado("dorinthea");

const videoDromai = heroiFiltrado("dromai");

const videoEnigma = heroiFiltrado("enigma");

const videoFai = heroiFiltrado("fai");

const videoKano = heroiFiltrado("kano");

const videoKassai = heroiFiltrado("kassai");

const videoKatsu = heroiFiltrado("katsu");

const videoKayo = heroiFiltrado("kayo");

const videoLevia = heroiFiltrado("levia");

const videoMaxx = heroiFiltrado("maxx");

const videoNuu = heroiFiltrado("nuu");

const videoOlympia = heroiFiltrado("olympia");

const videoPrism = heroiFiltrado("prism");

const videoRhinar = heroiFiltrado("rhinar");

const videoRiptide = heroiFiltrado("riptide");

const videoBoltyn = heroiFiltrado("boltyn");

const videoTeklovossen = heroiFiltrado("teklovossen");

const videoUzuri = heroiFiltrado("uzuri");

const videoVictor = heroiFiltrado("victor");

const videoViserai = heroiFiltrado("viserai");

const videoVynnset = heroiFiltrado("vynnset");

const videoZen = heroiFiltrado("zen");

const heroes = [
  { name: "Arakni", 
    page: 1, 
    videos: videoArakni, 
    fullName: "Arakni Huntsman" 
  },
  {
    name: "Azalea",
    page: 1,
    videos: videoAzalea,
    fullName: "Azalea, Ace in the Hole",
  },
  {
    name: "Betsy",
    page: 1,
    videos: videoBetsy,
    fullName: "Betsy, Skin in the Game",
  },
  {
    name: "Bravo",
    page: 1,
    videos: videoBravo,
    fullName: "Bravo, Showstopper",
  },
  {
    name: "Dash",
    page: 1,
    videos: videoDash,
    fullName: "Dash, Inventor Extraordinare",
  },
  {
    name: "Dorinthea",
    page: 1,
    videos: videoDorinthea,
    fullName: "Dorinthea Ironsong",
  },
  {
    name: "Dromai",
    page: 1,
    videos: videoDromai,
    fullName: "Dromai, Ash Artist",
  },
  {
    name: "Enigma",
    page: 1,
    videos: videoEnigma,
    fullName: "Enigma, Ledger of Ancestry",
  },
  { name: "Fai", page: 1,
    videos: videoFai,
    fullName: "Fai, Rising Rebellion"
  },
  {
    name: "Kano",
    page: 1,
    videos: videoKano,
    fullName: "Kano, Dracai of Aether",
  },
  {
    name: "Kassai",
    page: 1,
    videos: videoKassai,
    fullName: "Kassai of the Golden Sand",
  },
  {
    name: "Katsu",
    page: 1,
    videos: videoKatsu,
    fullName: "Katsu, the Wanderer",
  },
  {
    name: "Kayo",
    page: 1,
    videos: videoKayo,
    fullName: "Kayo, Armed and Dangerous",
  },
  {
    name: "Levia",
    page: 1,
    videos: videoLevia,
    fullName: "Levia, Shadowborn Abomination",
  },
  { name: "Maxx", 
    page: 1, 
    videos: videoMaxx, 
    fullName: "Maxx The Hype Nitro" 
  },
  { name: "Nuu", 
    page: 1, 
    videos: videoNuu, 
    fullName: "Nuu, Alluring Desire" 
  },
  {
    name: "Olympia",
    page: 1,
    videos: videoOlympia,
    fullName: "Olympia, Prized Fighter",
  },
  {
    name: "Rhinar",
    page: 1,
    videos: videoRhinar,
    fullName: "Rhinar, Reckless Rampage",
  },
  {
    name: "Riptide",
    page: 1,
    videos: videoRiptide,
    fullName: "Riptide, Lurker of the Deep",
  },
  {
    name: "Boltyn",
    page: 1,
    videos: videoBoltyn,
    fullName: "Ser Boltyn, Breaker of Dawn",
  },
  {
    name: "Teklovossen",
    page: 1,
    videos: videoTeklovossen,
    fullName: "Teklovossen, Esteemed Magnate",
  },
  {
    name: "Uzuri",
    page: 1,
    videos: videoUzuri,
    fullName: "Uzuri, Switchblade",
  },
  {
    name: "Victor",
    page: 1,
    videos: videoVictor,
    fullName: "Victor Goldmane, High and Mighty",
  },
  {
    name: "Viserai",
    page: 1,
    videos: videoViserai,
    fullName: "Viserai, Rune Blood",
  },
  {
    name: "Vynnset",
    page: 1,
    videos: videoVynnset,
    fullName: "Vynnset, Iron Maiden",
  },
  { 
    name: "Zen",
    page: 1,
    videos: videoZen,
    fullName: "Zen, Tamer of Purpose" 
  },
  { 
    name: "Io", 
    page: 1, 
    videos: videoIo, 
    fullName: "Dash I/O" },
  {
    name: "Prism",
    page: 1,
    videos: videoPrism,
    fullName: "Prism, Awakener of Sol",
  },
];

heroes.forEach((hero) => addCard(hero, hero.page));

heroes.forEach((hero) => {
  document
    .getElementById(`${hero.name.toLowerCase()}FirstPageBtn`)
    .addEventListener("click", () => firstPage(hero));
  document
    .getElementById(`${hero.name.toLowerCase()}PrevPageBtn`)
    .addEventListener("click", () => prevPage(hero));
  document
    .getElementById(`${hero.name.toLowerCase()}NextPageBtn`)
    .addEventListener("click", () => nextPage(hero));
  document
    .getElementById(`${hero.name.toLowerCase()}LastPageBtn`)
    .addEventListener("click", () => lastPage(hero));
});