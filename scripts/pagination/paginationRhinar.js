let latestLastPageRhinar = Math.ceil(
  videoRhinar.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageRhinar = Math.ceil(
  videoRhinar.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageRhinar = Math.ceil(
  videoRhinar.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageRhinar = Math.ceil(
  videoRhinar.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageRhinar = Math.ceil(
  videoRhinar.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageRhinar = Math.ceil(
  videoRhinar.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageRhinar = Math.ceil(
  videoRhinar.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsRhinar() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageRhinar;
  latestLastPageBtn.disabled = pageLatest === latestLastPageRhinar;
}

function firstPageLatestRhinar() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageRhinar();
  pageLatestBtnsRhinar();
}

function prevPageLatestRhinar() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageRhinar();
  pageLatestBtnsRhinar();
}

function nextPageLatestRhinar() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageRhinar();
  pageLatestBtnsRhinar();
}

function lastPageLatestRhinar() {
  pageLatest = Math.ceil(videoRhinar.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageRhinar();
  pageLatestBtnsRhinar();
}

function pageWorldsBtnsRhinar(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageRhinar;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageRhinar;
}

function firstPageWorldsRhinar() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageRhinar();
  pageWorldsBtnsRhinar();
}

function prevPageWorldsRhinar() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageRhinar();
  pageWorldsBtnsRhinar();
}

function nextPageWorldsRhinar() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageRhinar();
  pageWorldsBtnsRhinar();
}

function lastPageWorldsRhinar() {
  pageWorlds = Math.ceil(videoRhinar.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageRhinar();
  pageWorldsBtnsRhinar();
}

function pageProtourBtnsRhinar(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageRhinar;
  protourLastPageBtn.disabled = pageProtour === protourLastPageRhinar;
}

function firstPageProtourRhinar() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageRhinar();
  pageProtourBtnsRhinar();
}

function prevPageProtourRhinar() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageRhinar();
  pageProtourBtnsRhinar();
}

function nextPageProtourRhinar() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageRhinar();
  pageProtourBtnsRhinar();
}

function lastPageProtourRhinar() {
  pageProtour = Math.ceil(videoRhinar.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageRhinar();
  pageProtourBtnsRhinar();
}

function pageCallingBtnsRhinar(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageRhinar;
  callingLastPageBtn.disabled = pageCalling === callingLastPageRhinar;
}

function firstPageCallingRhinar() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageRhinar();
  pageCallingBtnsRhinar();
}

function prevPageCallingRhinar() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageRhinar();
  pageCallingBtnsRhinar();
}

function nextPageCallingRhinar() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageRhinar();
  pageCallingBtnsRhinar();
}

function lastPageCallingRhinar() {
  pageCalling = Math.ceil(videoRhinar.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoRhinar.length)

  printPageRhinar();
  pageCallingBtnsRhinar();
  console.log(videoRhinar.length)
}

function pageBhBtnsRhinar(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageRhinar;
  bhLastPageBtn.disabled = pageBh === bhLastPageRhinar;
}

function firstPageBhRhinar() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageRhinar();
  pageBhBtnsRhinar();
}

function prevPageBhRhinar() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageRhinar();
  pageBhBtnsRhinar();
}

function nextPageBhRhinar() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageRhinar();
  pageBhBtnsRhinar();
}

function lastPageBhRhinar() {
  pageBh = Math.ceil(videoRhinar.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageRhinar();
  pageBhBtnsRhinar();
}

function pagePqBtnsRhinar(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageRhinar;
  pqLastPageBtn.disabled = pagePq === pqLastPageRhinar;
}

function firstPagePqRhinar() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageRhinar();
  pagePqBtnsRhinar();
}

function prevPagePqRhinar() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageRhinar();
  pagePqBtnsRhinar();
}

function nextPagePqRhinar() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageRhinar();
  pagePqBtnsRhinar();
}

function lastPagePqRhinar() {
  pagePq = Math.ceil(videoRhinar.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageRhinar();
  pagePqBtnsRhinar();
}

function pageAgeBtnsRhinar(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageRhinar;
  ageLastPageBtn.disabled = pageAge === ageLastPageRhinar;
}

function firstPageAgeRhinar() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageRhinar();
  pageAgeBtnsRhinar();
}

function prevPageAgeRhinar() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageRhinar();
  pageAgeBtnsRhinar();
}

function nextPageAgeRhinar() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageRhinar();
  pageAgeBtnsRhinar();
}

function lastPageAgeRhinar() {
  pageAge = Math.ceil(videoRhinar.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageRhinar();
  pageAgeBtnsRhinar();
}