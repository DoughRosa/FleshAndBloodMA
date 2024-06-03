let latestLastPageUzuri = Math.ceil(
  videoUzuri.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageUzuri = Math.ceil(
  videoUzuri.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageUzuri = Math.ceil(
  videoUzuri.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageUzuri = Math.ceil(
  videoUzuri.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageUzuri = Math.ceil(
  videoUzuri.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageUzuri = Math.ceil(
  videoUzuri.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageUzuri = Math.ceil(
  videoUzuri.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsUzuri() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageUzuri;
  latestLastPageBtn.disabled = pageLatest === latestLastPageUzuri;
}

function firstPageLatestUzuri() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageUzuri();
  pageLatestBtnsUzuri();
}

function prevPageLatestUzuri() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageUzuri();
  pageLatestBtnsUzuri();
}

function nextPageLatestUzuri() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageUzuri();
  pageLatestBtnsUzuri();
}

function lastPageLatestUzuri() {
  pageLatest = Math.ceil(videoUzuri.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageUzuri();
  pageLatestBtnsUzuri();
}

function pageWorldsBtnsUzuri(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageUzuri;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageUzuri;
}

function firstPageWorldsUzuri() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageUzuri();
  pageWorldsBtnsUzuri();
}

function prevPageWorldsUzuri() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageUzuri();
  pageWorldsBtnsUzuri();
}

function nextPageWorldsUzuri() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageUzuri();
  pageWorldsBtnsUzuri();
}

function lastPageWorldsUzuri() {
  pageWorlds = Math.ceil(videoUzuri.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageUzuri();
  pageWorldsBtnsUzuri();
}

function pageProtourBtnsUzuri(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageUzuri;
  protourLastPageBtn.disabled = pageProtour === protourLastPageUzuri;
}

function firstPageProtourUzuri() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageUzuri();
  pageProtourBtnsUzuri();
}

function prevPageProtourUzuri() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageUzuri();
  pageProtourBtnsUzuri();
}

function nextPageProtourUzuri() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageUzuri();
  pageProtourBtnsUzuri();
}

function lastPageProtourUzuri() {
  pageProtour = Math.ceil(videoUzuri.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageUzuri();
  pageProtourBtnsUzuri();
}

function pageCallingBtnsUzuri(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageUzuri;
  callingLastPageBtn.disabled = pageCalling === callingLastPageUzuri;
}

function firstPageCallingUzuri() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageUzuri();
  pageCallingBtnsUzuri();
}

function prevPageCallingUzuri() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageUzuri();
  pageCallingBtnsUzuri();
}

function nextPageCallingUzuri() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageUzuri();
  pageCallingBtnsUzuri();
}

function lastPageCallingUzuri() {
  pageCalling = Math.ceil(videoUzuri.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoUzuri.length)

  printPageUzuri();
  pageCallingBtnsUzuri();
  console.log(videoUzuri.length)
}

function pageBhBtnsUzuri(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageUzuri;
  bhLastPageBtn.disabled = pageBh === bhLastPageUzuri;
}

function firstPageBhUzuri() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageUzuri();
  pageBhBtnsUzuri();
}

function prevPageBhUzuri() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageUzuri();
  pageBhBtnsUzuri();
}

function nextPageBhUzuri() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageUzuri();
  pageBhBtnsUzuri();
}

function lastPageBhUzuri() {
  pageBh = Math.ceil(videoUzuri.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageUzuri();
  pageBhBtnsUzuri();
}

function pagePqBtnsUzuri(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageUzuri;
  pqLastPageBtn.disabled = pagePq === pqLastPageUzuri;
}

function firstPagePqUzuri() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageUzuri();
  pagePqBtnsUzuri();
}

function prevPagePqUzuri() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageUzuri();
  pagePqBtnsUzuri();
}

function nextPagePqUzuri() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageUzuri();
  pagePqBtnsUzuri();
}

function lastPagePqUzuri() {
  pagePq = Math.ceil(videoUzuri.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageUzuri();
  pagePqBtnsUzuri();
}

function pageAgeBtnsUzuri(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageUzuri;
  ageLastPageBtn.disabled = pageAge === ageLastPageUzuri;
}

function firstPageAgeUzuri() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageUzuri();
  pageAgeBtnsUzuri();
}

function prevPageAgeUzuri() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageUzuri();
  pageAgeBtnsUzuri();
}

function nextPageAgeUzuri() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageUzuri();
  pageAgeBtnsUzuri();
}

function lastPageAgeUzuri() {
  pageAge = Math.ceil(videoUzuri.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageUzuri();
  pageAgeBtnsUzuri();
}