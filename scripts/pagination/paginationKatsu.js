let latestLastPageKatsu = Math.ceil(
  videoKatsu.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageKatsu = Math.ceil(
  videoKatsu.filter(videoCategories[1].filter).length / displayCount
);

let protourLastPageKatsu = Math.ceil(
  videoKatsu.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageKatsu = Math.ceil(
  videoKatsu.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageKatsu = Math.ceil(
  videoKatsu.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageKatsu = Math.ceil(
  videoKatsu.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageKatsu = Math.ceil(
  videoKatsu.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsKatsu() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageKatsu;
  latestLastPageBtn.disabled = pageLatest === latestLastPageKatsu;
}

function firstPageLatestKatsu() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageKatsu();
  pageLatestBtnsKatsu();
}

function prevPageLatestKatsu() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageKatsu();
  pageLatestBtnsKatsu();
}

function nextPageLatestKatsu() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageKatsu();
  pageLatestBtnsKatsu();
}

function lastPageLatestKatsu() {
  pageLatest = Math.ceil(videoKatsu.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageKatsu();
  pageLatestBtnsKatsu();
}

function pageWorldsBtnsKatsu(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageKatsu;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageKatsu;
}

function firstPageWorldsKatsu() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageKatsu();
  pageWorldsBtnsKatsu();
}

function prevPageWorldsKatsu() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageKatsu();
  pageWorldsBtnsKatsu();
}

function nextPageWorldsKatsu() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageKatsu();
  pageWorldsBtnsKatsu();
}

function lastPageWorldsKatsu() {
  pageWorlds = Math.ceil(videoKatsu.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageKatsu();
  pageWorldsBtnsKatsu();
}

function pageProtourBtnsKatsu(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageKatsu;
  protourLastPageBtn.disabled = pageProtour === protourLastPageKatsu;
}

function firstPageProtourKatsu() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageKatsu();
  pageProtourBtnsKatsu();
}

function prevPageProtourKatsu() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageKatsu();
  pageProtourBtnsKatsu();
}

function nextPageProtourKatsu() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageKatsu();
  pageProtourBtnsKatsu();
}

function lastPageProtourKatsu() {
  pageProtour = Math.ceil(videoKatsu.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageKatsu();
  pageProtourBtnsKatsu();
}

function pageCallingBtnsKatsu(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageKatsu;
  callingLastPageBtn.disabled = pageCalling === callingLastPageKatsu;
}

function firstPageCallingKatsu() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageKatsu();
  pageCallingBtnsKatsu();
}

function prevPageCallingKatsu() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageKatsu();
  pageCallingBtnsKatsu();
}

function nextPageCallingKatsu() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageKatsu();
  pageCallingBtnsKatsu();
}

function lastPageCallingKatsu() {
  pageCalling = Math.ceil(videoKatsu.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;

  printPageKatsu();
  pageCallingBtnsKatsu();
}

function pageBhBtnsKatsu(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageKatsu;
  bhLastPageBtn.disabled = pageBh === bhLastPageKatsu;
}

function firstPageBhKatsu() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageKatsu();
  pageBhBtnsKatsu();
}

function prevPageBhKatsu() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageKatsu();
  pageBhBtnsKatsu();
}

function nextPageBhKatsu() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageKatsu();
  pageBhBtnsKatsu();
}

function lastPageBhKatsu() {
  pageBh = Math.ceil(videoKatsu.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageKatsu();
  pageBhBtnsKatsu();
}

function pagePqBtnsKatsu(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageKatsu;
  pqLastPageBtn.disabled = pagePq === pqLastPageKatsu;
}

function firstPagePqKatsu() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageKatsu();
  pagePqBtnsKatsu();
}

function prevPagePqKatsu() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageKatsu();
  pagePqBtnsKatsu();
}

function nextPagePqKatsu() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageKatsu();
  pagePqBtnsKatsu();
}

function lastPagePqKatsu() {
  pagePq = Math.ceil(videoKatsu.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageKatsu();
  pagePqBtnsKatsu();
}

function pageAgeBtnsKatsu(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageKatsu;
  ageLastPageBtn.disabled = pageAge === ageLastPageKatsu;
}

function firstPageAgeKatsu() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageKatsu();
  pageAgeBtnsKatsu();
}

function prevPageAgeKatsu() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageKatsu();
  pageAgeBtnsKatsu();
}

function nextPageAgeKatsu() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageKatsu();
  pageAgeBtnsKatsu();
}

function lastPageAgeKatsu() {
  pageAge = Math.ceil(videoKatsu.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageKatsu();
  pageAgeBtnsKatsu();
}