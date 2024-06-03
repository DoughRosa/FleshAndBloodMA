let latestLastPageNuu = Math.ceil(
  videoNuu.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageNuu = Math.ceil(
  videoNuu.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageNuu = Math.ceil(
  videoNuu.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageNuu = Math.ceil(
  videoNuu.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageNuu = Math.ceil(
  videoNuu.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageNuu = Math.ceil(
  videoNuu.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageNuu = Math.ceil(
  videoNuu.filter(videoCategories[6].filter).length / displayCount
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

function pageLatestBtnsNuu() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageNuu;
  latestLastPageBtn.disabled = pageLatest === latestLastPageNuu;
}

function firstPageLatestNuu() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageNuu();
  pageLatestBtnsNuu();
}

function prevPageLatestNuu() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageNuu();
  pageLatestBtnsNuu();
}

function nextPageLatestNuu() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageNuu();
  pageLatestBtnsNuu();
}

function lastPageLatestNuu() {
  pageLatest = Math.ceil(videoNuu.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageNuu();
  pageLatestBtnsNuu();
}

function pageWorldsBtnsNuu(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageNuu;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageNuu;
}

function firstPageWorldsNuu() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageNuu();
  pageWorldsBtnsNuu();
}

function prevPageWorldsNuu() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageNuu();
  pageWorldsBtnsNuu();
}

function nextPageWorldsNuu() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageNuu();
  pageWorldsBtnsNuu();
}

function lastPageWorldsNuu() {
  pageWorlds = Math.ceil(videoNuu.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageNuu();
  pageWorldsBtnsNuu();
}

function pageProtourBtnsNuu(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageNuu;
  protourLastPageBtn.disabled = pageProtour === protourLastPageNuu;
}

function firstPageProtourNuu() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageNuu();
  pageProtourBtnsNuu();
}

function prevPageProtourNuu() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageNuu();
  pageProtourBtnsNuu();
}

function nextPageProtourNuu() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageNuu();
  pageProtourBtnsNuu();
}

function lastPageProtourNuu() {
  pageProtour = Math.ceil(videoNuu.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageNuu();
  pageProtourBtnsNuu();
}

function pageCallingBtnsNuu(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageNuu;
  callingLastPageBtn.disabled = pageCalling === callingLastPageNuu;
}

function firstPageCallingNuu() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageNuu();
  pageCallingBtnsNuu();
}

function prevPageCallingNuu() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageNuu();
  pageCallingBtnsNuu();
}

function nextPageCallingNuu() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageNuu();
  pageCallingBtnsNuu();
}

function lastPageCallingNuu() {
  pageCalling = Math.ceil(videoNuu.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoNuu.length)

  printPageNuu();
  pageCallingBtnsNuu();
  console.log(videoNuu.length)
}

function pageBhBtnsNuu(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageNuu;
  bhLastPageBtn.disabled = pageBh === bhLastPageNuu;
}

function firstPageBhNuu() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageNuu();
  pageBhBtnsNuu();
}

function prevPageBhNuu() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageNuu();
  pageBhBtnsNuu();
}

function nextPageBhNuu() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageNuu();
  pageBhBtnsNuu();
}

function lastPageBhNuu() {
  pageBh = Math.ceil(videoNuu.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageNuu();
  pageBhBtnsNuu();
}

function pagePqBtnsNuu(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageNuu;
  pqLastPageBtn.disabled = pagePq === pqLastPageNuu;
}

function firstPagePqNuu() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageNuu();
  pagePqBtnsNuu();
}

function prevPagePqNuu() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageNuu();
  pagePqBtnsNuu();
}

function nextPagePqNuu() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageNuu();
  pagePqBtnsNuu();
}

function lastPagePqNuu() {
  pagePq = Math.ceil(videoNuu.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageNuu();
  pagePqBtnsNuu();
}

function pageAgeBtnsNuu(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageNuu;
  ageLastPageBtn.disabled = pageAge === ageLastPageNuu;
}

function firstPageAgeNuu() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageNuu();
  pageAgeBtnsNuu();
}

function prevPageAgeNuu() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageNuu();
  pageAgeBtnsNuu();
}

function nextPageAgeNuu() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageNuu();
  pageAgeBtnsNuu();
}

function lastPageAgeNuu() {
  pageAge = Math.ceil(videoNuu.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageNuu();
  pageAgeBtnsNuu();
}