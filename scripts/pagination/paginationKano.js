let latestLastPageKano = Math.ceil(
  videoKano.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageKano = Math.ceil(
  videoKano.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageKano = Math.ceil(
  videoKano.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageKano = Math.ceil(
  videoKano.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageKano = Math.ceil(
  videoKano.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageKano = Math.ceil(
  videoKano.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageKano = Math.ceil(
  videoKano.filter(videoCategories[6].filter).length / displayCount
);

const latestFirstPageBtn = document.getElementById("latestFirstPageBtn");
const latestPrevPageBtn = document.getElementById("latestPrevPageBtn");
const latestNextPageBtn = document.getElementById("latestNextPageBtn");
const latestLastPageBtn = document.getElementById("latestLastPageBtn");

const worldsFirstPageBtn = document.getElementById("worldsFirstPageBtn");
const worldsPrevPageBtn = document.getElementById("worldsPrevPageBtn");
const worldsNextPageBtn = document.getElementById("worldsNextPageBtn");
const worldsLastPageBtn = document.getElementById("worldsLastPageBtn");

const protourFirstPageBtn = document.getElementById("protourFirstPageBtn");
const protourPrevPageBtn = document.getElementById("protourPrevPageBtn");
const protourNextPageBtn = document.getElementById("protourNextPageBtn");
const protourLastPageBtn = document.getElementById("protourLastPageBtn");

const callingFirstPageBtn = document.getElementById("callingFirstPageBtn");
const callingPrevPageBtn = document.getElementById("callingPrevPageBtn");
const callingNextPageBtn = document.getElementById("callingNextPageBtn");
const callingLastPageBtn = document.getElementById("callingLastPageBtn");

const bhFirstPageBtn = document.getElementById("bhFirstPageBtn");
const bhPrevPageBtn = document.getElementById("bhPrevPageBtn");
const bhNextPageBtn = document.getElementById("bhNextPageBtn");
const bhLastPageBtn = document.getElementById("bhLastPageBtn");

const pqFirstPageBtn = document.getElementById("pqFirstPageBtn");
const pqPrevPageBtn = document.getElementById("pqPrevPageBtn");
const pqNextPageBtn = document.getElementById("pqNextPageBtn");
const pqLastPageBtn = document.getElementById("pqLastPageBtn");

const ageFirstPageBtn = document.getElementById("ageFirstPageBtn");
const agePrevPageBtn = document.getElementById("agePrevPageBtn");
const ageNextPageBtn = document.getElementById("ageNextPageBtn");
const ageLastPageBtn = document.getElementById("ageLastPageBtn");



function pageLatestBtnsKano() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageKano;
  latestLastPageBtn.disabled = pageLatest === latestLastPageKano;
}

function firstPageLatestKano() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageKano();
  pageLatestBtnsKano();
}

function prevPageLatestKano() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageKano();
  pageLatestBtnsKano();
}

function nextPageLatestKano() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageKano();
  pageLatestBtnsKano();
}

function lastPageLatestKano() {
  pageLatest = Math.ceil(videoKano.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageKano();
  pageLatestBtnsKano();
}

function pageWorldsBtnsKano(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageKano;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageKano;
}

function firstPageWorldsKano() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageKano();
  pageWorldsBtnsKano();
}

function prevPageWorldsKano() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageKano();
  pageWorldsBtnsKano();
}

function nextPageWorldsKano() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageKano();
  pageWorldsBtnsKano();
}

function lastPageWorldsKano() {
  pageWorlds = Math.ceil(videoKano.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageKano();
  pageWorldsBtnsKano();
}

function pageProtourBtnsKano(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageKano;
  protourLastPageBtn.disabled = pageProtour === protourLastPageKano;
}

function firstPageProtourKano() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageKano();
  pageProtourBtnsKano();
}

function prevPageProtourKano() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageKano();
  pageProtourBtnsKano();
}

function nextPageProtourKano() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageKano();
  pageProtourBtnsKano();
}

function lastPageProtourKano() {
  pageProtour = Math.ceil(videoKano.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageKano();
  pageProtourBtnsKano();
}

function pageCallingBtnsKano(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageKano;
  callingLastPageBtn.disabled = pageCalling === callingLastPageKano;
}

function firstPageCallingKano() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageKano();
  pageCallingBtnsKano();
}

function prevPageCallingKano() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageKano();
  pageCallingBtnsKano();
}

function nextPageCallingKano() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageKano();
  pageCallingBtnsKano();
}

function lastPageCallingKano() {
  pageCalling = Math.ceil(videoKano.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoKano.length)

  printPageKano();
  pageCallingBtnsKano();
  console.log(videoKano.length)
}

function pageBhBtnsKano(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageKano;
  bhLastPageBtn.disabled = pageBh === bhLastPageKano;
}

function firstPageBhKano() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageKano();
  pageBhBtnsKano();
}

function prevPageBhKano() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageKano();
  pageBhBtnsKano();
}

function nextPageBhKano() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageKano();
  pageBhBtnsKano();
}

function lastPageBhKano() {
  pageBh = Math.ceil(videoKano.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageKano();
  pageBhBtnsKano();
}

function pagePqBtnsKano(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageKano;
  pqLastPageBtn.disabled = pagePq === pqLastPageKano;
}

function firstPagePqKano() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageKano();
  pagePqBtnsKano();
}

function prevPagePqKano() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageKano();
  pagePqBtnsKano();
}

function nextPagePqKano() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageKano();
  pagePqBtnsKano();
}

function lastPagePqKano() {
  pagePq = Math.ceil(videoKano.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageKano();
  pagePqBtnsKano();
}

function pageAgeBtnsKano(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageKano;
  ageLastPageBtn.disabled = pageAge === ageLastPageKano;
}

function firstPageAgeKano() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageKano();
  pageAgeBtnsKano();
}

function prevPageAgeKano() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageKano();
  pageAgeBtnsKano();
}

function nextPageAgeKano() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageKano();
  pageAgeBtnsKano();
}

function lastPageAgeKano() {
  pageAge = Math.ceil(videoKano.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageKano();
  pageAgeBtnsKano();
}