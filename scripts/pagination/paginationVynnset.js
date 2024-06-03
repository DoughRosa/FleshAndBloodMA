let latestLastPageVynnset = Math.ceil(
  videoVynnset.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageVynnset = Math.ceil(
  videoVynnset.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageVynnset = Math.ceil(
  videoVynnset.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageVynnset = Math.ceil(
  videoVynnset.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageVynnset = Math.ceil(
  videoVynnset.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageVynnset = Math.ceil(
  videoVynnset.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageVynnset = Math.ceil(
  videoVynnset.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsVynnset() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageVynnset;
  latestLastPageBtn.disabled = pageLatest === latestLastPageVynnset;
}

function firstPageLatestVynnset() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageVynnset();
  pageLatestBtnsVynnset();
}

function prevPageLatestVynnset() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageVynnset();
  pageLatestBtnsVynnset();
}

function nextPageLatestVynnset() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageVynnset();
  pageLatestBtnsVynnset();
}

function lastPageLatestVynnset() {
  pageLatest = Math.ceil(videoVynnset.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageVynnset();
  pageLatestBtnsVynnset();
}

function pageWorldsBtnsVynnset(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageVynnset;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageVynnset;
}

function firstPageWorldsVynnset() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageVynnset();
  pageWorldsBtnsVynnset();
}

function prevPageWorldsVynnset() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageVynnset();
  pageWorldsBtnsVynnset();
}

function nextPageWorldsVynnset() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageVynnset();
  pageWorldsBtnsVynnset();
}

function lastPageWorldsVynnset() {
  pageWorlds = Math.ceil(videoVynnset.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageVynnset();
  pageWorldsBtnsVynnset();
}

function pageProtourBtnsVynnset(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageVynnset;
  protourLastPageBtn.disabled = pageProtour === protourLastPageVynnset;
}

function firstPageProtourVynnset() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageVynnset();
  pageProtourBtnsVynnset();
}

function prevPageProtourVynnset() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageVynnset();
  pageProtourBtnsVynnset();
}

function nextPageProtourVynnset() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageVynnset();
  pageProtourBtnsVynnset();
}

function lastPageProtourVynnset() {
  pageProtour = Math.ceil(videoVynnset.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageVynnset();
  pageProtourBtnsVynnset();
}

function pageCallingBtnsVynnset(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageVynnset;
  callingLastPageBtn.disabled = pageCalling === callingLastPageVynnset;
}

function firstPageCallingVynnset() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageVynnset();
  pageCallingBtnsVynnset();
}

function prevPageCallingVynnset() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageVynnset();
  pageCallingBtnsVynnset();
}

function nextPageCallingVynnset() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageVynnset();
  pageCallingBtnsVynnset();
}

function lastPageCallingVynnset() {
  pageCalling = Math.ceil(videoVynnset.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoVynnset.length)

  printPageVynnset();
  pageCallingBtnsVynnset();
  console.log(videoVynnset.length)
}

function pageBhBtnsVynnset(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageVynnset;
  bhLastPageBtn.disabled = pageBh === bhLastPageVynnset;
}

function firstPageBhVynnset() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageVynnset();
  pageBhBtnsVynnset();
}

function prevPageBhVynnset() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageVynnset();
  pageBhBtnsVynnset();
}

function nextPageBhVynnset() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageVynnset();
  pageBhBtnsVynnset();
}

function lastPageBhVynnset() {
  pageBh = Math.ceil(videoVynnset.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageVynnset();
  pageBhBtnsVynnset();
}

function pagePqBtnsVynnset(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageVynnset;
  pqLastPageBtn.disabled = pagePq === pqLastPageVynnset;
}

function firstPagePqVynnset() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageVynnset();
  pagePqBtnsVynnset();
}

function prevPagePqVynnset() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageVynnset();
  pagePqBtnsVynnset();
}

function nextPagePqVynnset() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageVynnset();
  pagePqBtnsVynnset();
}

function lastPagePqVynnset() {
  pagePq = Math.ceil(videoVynnset.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageVynnset();
  pagePqBtnsVynnset();
}

function pageAgeBtnsVynnset(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageVynnset;
  ageLastPageBtn.disabled = pageAge === ageLastPageVynnset;
}

function firstPageAgeVynnset() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageVynnset();
  pageAgeBtnsVynnset();
}

function prevPageAgeVynnset() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageVynnset();
  pageAgeBtnsVynnset();
}

function nextPageAgeVynnset() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageVynnset();
  pageAgeBtnsVynnset();
}

function lastPageAgeVynnset() {
  pageAge = Math.ceil(videoVynnset.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageVynnset();
  pageAgeBtnsVynnset();
}