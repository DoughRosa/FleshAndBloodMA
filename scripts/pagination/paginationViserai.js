let latestLastPageViserai = Math.ceil(
  videoViserai.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageViserai = Math.ceil(
  videoViserai.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageViserai = Math.ceil(
  videoViserai.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageViserai = Math.ceil(
  videoViserai.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageViserai = Math.ceil(
  videoViserai.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageViserai = Math.ceil(
  videoViserai.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageViserai = Math.ceil(
  videoViserai.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsViserai() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageViserai;
  latestLastPageBtn.disabled = pageLatest === latestLastPageViserai;
}

function firstPageLatestViserai() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageViserai();
  pageLatestBtnsViserai();
}

function prevPageLatestViserai() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageViserai();
  pageLatestBtnsViserai();
}

function nextPageLatestViserai() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageViserai();
  pageLatestBtnsViserai();
}

function lastPageLatestViserai() {
  pageLatest = Math.ceil(videoViserai.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageViserai();
  pageLatestBtnsViserai();
}

function pageWorldsBtnsViserai(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageViserai;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageViserai;
}

function firstPageWorldsViserai() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageViserai();
  pageWorldsBtnsViserai();
}

function prevPageWorldsViserai() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageViserai();
  pageWorldsBtnsViserai();
}

function nextPageWorldsViserai() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageViserai();
  pageWorldsBtnsViserai();
}

function lastPageWorldsViserai() {
  pageWorlds = Math.ceil(videoViserai.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageViserai();
  pageWorldsBtnsViserai();
}

function pageProtourBtnsViserai(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageViserai;
  protourLastPageBtn.disabled = pageProtour === protourLastPageViserai;
}

function firstPageProtourViserai() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageViserai();
  pageProtourBtnsViserai();
}

function prevPageProtourViserai() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageViserai();
  pageProtourBtnsViserai();
}

function nextPageProtourViserai() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageViserai();
  pageProtourBtnsViserai();
}

function lastPageProtourViserai() {
  pageProtour = Math.ceil(videoViserai.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageViserai();
  pageProtourBtnsViserai();
}

function pageCallingBtnsViserai(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageViserai;
  callingLastPageBtn.disabled = pageCalling === callingLastPageViserai;
}

function firstPageCallingViserai() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageViserai();
  pageCallingBtnsViserai();
}

function prevPageCallingViserai() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageViserai();
  pageCallingBtnsViserai();
}

function nextPageCallingViserai() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageViserai();
  pageCallingBtnsViserai();
}

function lastPageCallingViserai() {
  pageCalling = Math.ceil(videoViserai.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoViserai.length)

  printPageViserai();
  pageCallingBtnsViserai();
  console.log(videoViserai.length)
}

function pageBhBtnsViserai(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageViserai;
  bhLastPageBtn.disabled = pageBh === bhLastPageViserai;
}

function firstPageBhViserai() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageViserai();
  pageBhBtnsViserai();
}

function prevPageBhViserai() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageViserai();
  pageBhBtnsViserai();
}

function nextPageBhViserai() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageViserai();
  pageBhBtnsViserai();
}

function lastPageBhViserai() {
  pageBh = Math.ceil(videoViserai.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageViserai();
  pageBhBtnsViserai();
}

function pagePqBtnsViserai(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageViserai;
  pqLastPageBtn.disabled = pagePq === pqLastPageViserai;
}

function firstPagePqViserai() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageViserai();
  pagePqBtnsViserai();
}

function prevPagePqViserai() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageViserai();
  pagePqBtnsViserai();
}

function nextPagePqViserai() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageViserai();
  pagePqBtnsViserai();
}

function lastPagePqViserai() {
  pagePq = Math.ceil(videoViserai.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageViserai();
  pagePqBtnsViserai();
}

function pageAgeBtnsViserai(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageViserai;
  ageLastPageBtn.disabled = pageAge === ageLastPageViserai;
}

function firstPageAgeViserai() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageViserai();
  pageAgeBtnsViserai();
}

function prevPageAgeViserai() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageViserai();
  pageAgeBtnsViserai();
}

function nextPageAgeViserai() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageViserai();
  pageAgeBtnsViserai();
}

function lastPageAgeViserai() {
  pageAge = Math.ceil(videoViserai.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageViserai();
  pageAgeBtnsViserai();
}