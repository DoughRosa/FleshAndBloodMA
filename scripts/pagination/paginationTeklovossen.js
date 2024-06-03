let latestLastPageTeklovossen = Math.ceil(
  videoTeklovossen.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageTeklovossen = Math.ceil(
  videoTeklovossen.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageTeklovossen = Math.ceil(
  videoTeklovossen.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageTeklovossen = Math.ceil(
  videoTeklovossen.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageTeklovossen = Math.ceil(
  videoTeklovossen.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageTeklovossen = Math.ceil(
  videoTeklovossen.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageTeklovossen = Math.ceil(
  videoTeklovossen.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsTeklovossen() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageTeklovossen;
  latestLastPageBtn.disabled = pageLatest === latestLastPageTeklovossen;
}

function firstPageLatestTeklovossen() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageTeklovossen();
  pageLatestBtnsTeklovossen();
}

function prevPageLatestTeklovossen() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageTeklovossen();
  pageLatestBtnsTeklovossen();
}

function nextPageLatestTeklovossen() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageTeklovossen();
  pageLatestBtnsTeklovossen();
}

function lastPageLatestTeklovossen() {
  pageLatest = Math.ceil(videoTeklovossen.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageTeklovossen();
  pageLatestBtnsTeklovossen();
}

function pageWorldsBtnsTeklovossen(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageTeklovossen;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageTeklovossen;
}

function firstPageWorldsTeklovossen() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageTeklovossen();
  pageWorldsBtnsTeklovossen();
}

function prevPageWorldsTeklovossen() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageTeklovossen();
  pageWorldsBtnsTeklovossen();
}

function nextPageWorldsTeklovossen() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageTeklovossen();
  pageWorldsBtnsTeklovossen();
}

function lastPageWorldsTeklovossen() {
  pageWorlds = Math.ceil(videoTeklovossen.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageTeklovossen();
  pageWorldsBtnsTeklovossen();
}

function pageProtourBtnsTeklovossen(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageTeklovossen;
  protourLastPageBtn.disabled = pageProtour === protourLastPageTeklovossen;
}

function firstPageProtourTeklovossen() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageTeklovossen();
  pageProtourBtnsTeklovossen();
}

function prevPageProtourTeklovossen() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageTeklovossen();
  pageProtourBtnsTeklovossen();
}

function nextPageProtourTeklovossen() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageTeklovossen();
  pageProtourBtnsTeklovossen();
}

function lastPageProtourTeklovossen() {
  pageProtour = Math.ceil(videoTeklovossen.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageTeklovossen();
  pageProtourBtnsTeklovossen();
}

function pageCallingBtnsTeklovossen(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageTeklovossen;
  callingLastPageBtn.disabled = pageCalling === callingLastPageTeklovossen;
}

function firstPageCallingTeklovossen() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageTeklovossen();
  pageCallingBtnsTeklovossen();
}

function prevPageCallingTeklovossen() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageTeklovossen();
  pageCallingBtnsTeklovossen();
}

function nextPageCallingTeklovossen() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageTeklovossen();
  pageCallingBtnsTeklovossen();
}

function lastPageCallingTeklovossen() {
  pageCalling = Math.ceil(videoTeklovossen.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoTeklovossen.length)

  printPageTeklovossen();
  pageCallingBtnsTeklovossen();
  console.log(videoTeklovossen.length)
}

function pageBhBtnsTeklovossen(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageTeklovossen;
  bhLastPageBtn.disabled = pageBh === bhLastPageTeklovossen;
}

function firstPageBhTeklovossen() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageTeklovossen();
  pageBhBtnsTeklovossen();
}

function prevPageBhTeklovossen() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageTeklovossen();
  pageBhBtnsTeklovossen();
}

function nextPageBhTeklovossen() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageTeklovossen();
  pageBhBtnsTeklovossen();
}

function lastPageBhTeklovossen() {
  pageBh = Math.ceil(videoTeklovossen.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageTeklovossen();
  pageBhBtnsTeklovossen();
}

function pagePqBtnsTeklovossen(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageTeklovossen;
  pqLastPageBtn.disabled = pagePq === pqLastPageTeklovossen;
}

function firstPagePqTeklovossen() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageTeklovossen();
  pagePqBtnsTeklovossen();
}

function prevPagePqTeklovossen() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageTeklovossen();
  pagePqBtnsTeklovossen();
}

function nextPagePqTeklovossen() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageTeklovossen();
  pagePqBtnsTeklovossen();
}

function lastPagePqTeklovossen() {
  pagePq = Math.ceil(videoTeklovossen.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageTeklovossen();
  pagePqBtnsTeklovossen();
}

function pageAgeBtnsTeklovossen(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageTeklovossen;
  ageLastPageBtn.disabled = pageAge === ageLastPageTeklovossen;
}

function firstPageAgeTeklovossen() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageTeklovossen();
  pageAgeBtnsTeklovossen();
}

function prevPageAgeTeklovossen() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageTeklovossen();
  pageAgeBtnsTeklovossen();
}

function nextPageAgeTeklovossen() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageTeklovossen();
  pageAgeBtnsTeklovossen();
}

function lastPageAgeTeklovossen() {
  pageAge = Math.ceil(videoTeklovossen.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageTeklovossen();
  pageAgeBtnsTeklovossen();
}