let latestLastPageMaxx = Math.ceil(
  videoMaxx.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageMaxx = Math.ceil(
  videoMaxx.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageMaxx = Math.ceil(
  videoMaxx.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageMaxx = Math.ceil(
  videoMaxx.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageMaxx = Math.ceil(
  videoMaxx.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageMaxx = Math.ceil(
  videoMaxx.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageMaxx = Math.ceil(
  videoMaxx.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsMaxx() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageMaxx;
  latestLastPageBtn.disabled = pageLatest === latestLastPageMaxx;
}

function firstPageLatestMaxx() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageMaxx();
  pageLatestBtnsMaxx();
}

function prevPageLatestMaxx() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageMaxx();
  pageLatestBtnsMaxx();
}

function nextPageLatestMaxx() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageMaxx();
  pageLatestBtnsMaxx();
}

function lastPageLatestMaxx() {
  pageLatest = Math.ceil(videoMaxx.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageMaxx();
  pageLatestBtnsMaxx();
}

function pageWorldsBtnsMaxx(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageMaxx;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageMaxx;
}

function firstPageWorldsMaxx() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageMaxx();
  pageWorldsBtnsMaxx();
}

function prevPageWorldsMaxx() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageMaxx();
  pageWorldsBtnsMaxx();
}

function nextPageWorldsMaxx() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageMaxx();
  pageWorldsBtnsMaxx();
}

function lastPageWorldsMaxx() {
  pageWorlds = Math.ceil(videoMaxx.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageMaxx();
  pageWorldsBtnsMaxx();
}

function pageProtourBtnsMaxx(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageMaxx;
  protourLastPageBtn.disabled = pageProtour === protourLastPageMaxx;
}

function firstPageProtourMaxx() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageMaxx();
  pageProtourBtnsMaxx();
}

function prevPageProtourMaxx() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageMaxx();
  pageProtourBtnsMaxx();
}

function nextPageProtourMaxx() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageMaxx();
  pageProtourBtnsMaxx();
}

function lastPageProtourMaxx() {
  pageProtour = Math.ceil(videoMaxx.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageMaxx();
  pageProtourBtnsMaxx();
}

function pageCallingBtnsMaxx(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageMaxx;
  callingLastPageBtn.disabled = pageCalling === callingLastPageMaxx;
}

function firstPageCallingMaxx() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageMaxx();
  pageCallingBtnsMaxx();
}

function prevPageCallingMaxx() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageMaxx();
  pageCallingBtnsMaxx();
}

function nextPageCallingMaxx() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageMaxx();
  pageCallingBtnsMaxx();
}

function lastPageCallingMaxx() {
  pageCalling = Math.ceil(videoMaxx.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoMaxx.length)

  printPageMaxx();
  pageCallingBtnsMaxx();
  console.log(videoMaxx.length)
}

function pageBhBtnsMaxx(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageMaxx;
  bhLastPageBtn.disabled = pageBh === bhLastPageMaxx;
}

function firstPageBhMaxx() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageMaxx();
  pageBhBtnsMaxx();
}

function prevPageBhMaxx() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageMaxx();
  pageBhBtnsMaxx();
}

function nextPageBhMaxx() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageMaxx();
  pageBhBtnsMaxx();
}

function lastPageBhMaxx() {
  pageBh = Math.ceil(videoMaxx.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageMaxx();
  pageBhBtnsMaxx();
}

function pagePqBtnsMaxx(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageMaxx;
  pqLastPageBtn.disabled = pagePq === pqLastPageMaxx;
}

function firstPagePqMaxx() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageMaxx();
  pagePqBtnsMaxx();
}

function prevPagePqMaxx() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageMaxx();
  pagePqBtnsMaxx();
}

function nextPagePqMaxx() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageMaxx();
  pagePqBtnsMaxx();
}

function lastPagePqMaxx() {
  pagePq = Math.ceil(videoMaxx.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageMaxx();
  pagePqBtnsMaxx();
}

function pageAgeBtnsMaxx(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageMaxx;
  ageLastPageBtn.disabled = pageAge === ageLastPageMaxx;
}

function firstPageAgeMaxx() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageMaxx();
  pageAgeBtnsMaxx();
}

function prevPageAgeMaxx() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageMaxx();
  pageAgeBtnsMaxx();
}

function nextPageAgeMaxx() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageMaxx();
  pageAgeBtnsMaxx();
}

function lastPageAgeMaxx() {
  pageAge = Math.ceil(videoMaxx.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageMaxx();
  pageAgeBtnsMaxx();
}