let latestLastPageEnigma = Math.ceil(
  videoEnigma.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageEnigma = Math.ceil(
  videoEnigma.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageEnigma = Math.ceil(
  videoEnigma.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageEnigma = Math.ceil(
  videoEnigma.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageEnigma = Math.ceil(
  videoEnigma.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageEnigma = Math.ceil(
  videoEnigma.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageEnigma = Math.ceil(
  videoEnigma.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsEnigma() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageEnigma;
  latestLastPageBtn.disabled = pageLatest === latestLastPageEnigma;
}

function firstPageLatestEnigma() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageEnigma();
  pageLatestBtnsEnigma();
}

function prevPageLatestEnigma() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageEnigma();
  pageLatestBtnsEnigma();
}

function nextPageLatestEnigma() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageEnigma();
  pageLatestBtnsEnigma();
}

function lastPageLatestEnigma() {
  pageLatest = Math.ceil(videoEnigma.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageEnigma();
  pageLatestBtnsEnigma();
}

function pageWorldsBtnsEnigma(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageEnigma;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageEnigma;
}

function firstPageWorldsEnigma() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageEnigma();
  pageWorldsBtnsEnigma();
}

function prevPageWorldsEnigma() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageEnigma();
  pageWorldsBtnsEnigma();
}

function nextPageWorldsEnigma() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageEnigma();
  pageWorldsBtnsEnigma();
}

function lastPageWorldsEnigma() {
  pageWorlds = Math.ceil(videoEnigma.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageEnigma();
  pageWorldsBtnsEnigma();
}

function pageProtourBtnsEnigma(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageEnigma;
  protourLastPageBtn.disabled = pageProtour === protourLastPageEnigma;
}

function firstPageProtourEnigma() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageEnigma();
  pageProtourBtnsEnigma();
}

function prevPageProtourEnigma() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageEnigma();
  pageProtourBtnsEnigma();
}

function nextPageProtourEnigma() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageEnigma();
  pageProtourBtnsEnigma();
}

function lastPageProtourEnigma() {
  pageProtour = Math.ceil(videoEnigma.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageEnigma();
  pageProtourBtnsEnigma();
}

function pageCallingBtnsEnigma(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageEnigma;
  callingLastPageBtn.disabled = pageCalling === callingLastPageEnigma;
}

function firstPageCallingEnigma() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageEnigma();
  pageCallingBtnsEnigma();
}

function prevPageCallingEnigma() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageEnigma();
  pageCallingBtnsEnigma();
}

function nextPageCallingEnigma() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageEnigma();
  pageCallingBtnsEnigma();
}

function lastPageCallingEnigma() {
  pageCalling = Math.ceil(videoEnigma.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoEnigma.length)

  printPageEnigma();
  pageCallingBtnsEnigma();
  console.log(videoEnigma.length)
}

function pageBhBtnsEnigma(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageEnigma;
  bhLastPageBtn.disabled = pageBh === bhLastPageEnigma;
}

function firstPageBhEnigma() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageEnigma();
  pageBhBtnsEnigma();
}

function prevPageBhEnigma() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageEnigma();
  pageBhBtnsEnigma();
}

function nextPageBhEnigma() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageEnigma();
  pageBhBtnsEnigma();
}

function lastPageBhEnigma() {
  pageBh = Math.ceil(videoEnigma.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageEnigma();
  pageBhBtnsEnigma();
}

function pagePqBtnsEnigma(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageEnigma;
  pqLastPageBtn.disabled = pagePq === pqLastPageEnigma;
}

function firstPagePqEnigma() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageEnigma();
  pagePqBtnsEnigma();
}

function prevPagePqEnigma() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageEnigma();
  pagePqBtnsEnigma();
}

function nextPagePqEnigma() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageEnigma();
  pagePqBtnsEnigma();
}

function lastPagePqEnigma() {
  pagePq = Math.ceil(videoEnigma.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageEnigma();
  pagePqBtnsEnigma();
}

function pageAgeBtnsEnigma(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageEnigma;
  ageLastPageBtn.disabled = pageAge === ageLastPageEnigma;
}

function firstPageAgeEnigma() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageEnigma();
  pageAgeBtnsEnigma();
}

function prevPageAgeEnigma() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageEnigma();
  pageAgeBtnsEnigma();
}

function nextPageAgeEnigma() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageEnigma();
  pageAgeBtnsEnigma();
}

function lastPageAgeEnigma() {
  pageAge = Math.ceil(videoEnigma.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageEnigma();
  pageAgeBtnsEnigma();
}