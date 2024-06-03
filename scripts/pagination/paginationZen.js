let latestLastPageZen = Math.ceil(
  videoZen.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageZen = Math.ceil(
  videoZen.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageZen = Math.ceil(
  videoZen.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageZen = Math.ceil(
  videoZen.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageZen = Math.ceil(
  videoZen.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageZen = Math.ceil(
  videoZen.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageZen = Math.ceil(
  videoZen.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsZen() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageZen;
  latestLastPageBtn.disabled = pageLatest === latestLastPageZen;
}

function firstPageLatestZen() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageZen();
  pageLatestBtnsZen();
}

function prevPageLatestZen() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageZen();
  pageLatestBtnsZen();
}

function nextPageLatestZen() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageZen();
  pageLatestBtnsZen();
}

function lastPageLatestZen() {
  pageLatest = Math.ceil(videoZen.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageZen();
  pageLatestBtnsZen();
}

function pageWorldsBtnsZen(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageZen;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageZen;
}

function firstPageWorldsZen() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageZen();
  pageWorldsBtnsZen();
}

function prevPageWorldsZen() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageZen();
  pageWorldsBtnsZen();
}

function nextPageWorldsZen() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageZen();
  pageWorldsBtnsZen();
}

function lastPageWorldsZen() {
  pageWorlds = Math.ceil(videoZen.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageZen();
  pageWorldsBtnsZen();
}

function pageProtourBtnsZen(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageZen;
  protourLastPageBtn.disabled = pageProtour === protourLastPageZen;
}

function firstPageProtourZen() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageZen();
  pageProtourBtnsZen();
}

function prevPageProtourZen() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageZen();
  pageProtourBtnsZen();
}

function nextPageProtourZen() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageZen();
  pageProtourBtnsZen();
}

function lastPageProtourZen() {
  pageProtour = Math.ceil(videoZen.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageZen();
  pageProtourBtnsZen();
}

function pageCallingBtnsZen(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageZen;
  callingLastPageBtn.disabled = pageCalling === callingLastPageZen;
}

function firstPageCallingZen() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageZen();
  pageCallingBtnsZen();
}

function prevPageCallingZen() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageZen();
  pageCallingBtnsZen();
}

function nextPageCallingZen() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageZen();
  pageCallingBtnsZen();
}

function lastPageCallingZen() {
  pageCalling = Math.ceil(videoZen.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoZen.length)

  printPageZen();
  pageCallingBtnsZen();
  console.log(videoZen.length)
}

function pageBhBtnsZen(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageZen;
  bhLastPageBtn.disabled = pageBh === bhLastPageZen;
}

function firstPageBhZen() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageZen();
  pageBhBtnsZen();
}

function prevPageBhZen() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageZen();
  pageBhBtnsZen();
}

function nextPageBhZen() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageZen();
  pageBhBtnsZen();
}

function lastPageBhZen() {
  pageBh = Math.ceil(videoZen.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageZen();
  pageBhBtnsZen();
}

function pagePqBtnsZen(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageZen;
  pqLastPageBtn.disabled = pagePq === pqLastPageZen;
}

function firstPagePqZen() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageZen();
  pagePqBtnsZen();
}

function prevPagePqZen() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageZen();
  pagePqBtnsZen();
}

function nextPagePqZen() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageZen();
  pagePqBtnsZen();
}

function lastPagePqZen() {
  pagePq = Math.ceil(videoZen.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageZen();
  pagePqBtnsZen();
}

function pageAgeBtnsZen(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageZen;
  ageLastPageBtn.disabled = pageAge === ageLastPageZen;
}

function firstPageAgeZen() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageZen();
  pageAgeBtnsZen();
}

function prevPageAgeZen() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageZen();
  pageAgeBtnsZen();
}

function nextPageAgeZen() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageZen();
  pageAgeBtnsZen();
}

function lastPageAgeZen() {
  pageAge = Math.ceil(videoZen.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageZen();
  pageAgeBtnsZen();
}