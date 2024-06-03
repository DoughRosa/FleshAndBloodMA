let latestLastPageArakni = Math.ceil(
  videoArakni.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageArakni = Math.ceil(
  videoArakni.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageArakni = Math.ceil(
  videoArakni.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageArakni = Math.ceil(
  videoArakni.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageArakni = Math.ceil(
  videoArakni.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageArakni = Math.ceil(
  videoArakni.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageArakni = Math.ceil(
  videoArakni.filter(videoCategories[6].filter).length / displayCount
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

const ageFirstPageBtn = document.getElementById("ageFirstPageBtn");
const agePrevPageBtn = document.getElementById("agePrevPageBtn");
const ageNextPageBtn = document.getElementById("ageNextPageBtn");
const ageLastPageBtn = document.getElementById("ageLastPageBtn");

const pqFirstPageBtn = document.getElementById("pqFirstPageBtn");
const pqPrevPageBtn = document.getElementById("pqPrevPageBtn");
const pqNextPageBtn = document.getElementById("pqNextPageBtn");
const pqLastPageBtn = document.getElementById("pqLastPageBtn");

function pageLatestBtnsArakni() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageArakni;
  latestLastPageBtn.disabled = pageLatest === latestLastPageArakni;
}

function firstPageLatestArakni() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageArakni();
  pageLatestBtnsArakni();
}

function prevPageLatestArakni() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageArakni();
  pageLatestBtnsArakni();
}

function nextPageLatestArakni() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageArakni();
  pageLatestBtnsArakni();
}

function lastPageLatestArakni() {
  pageLatest = Math.ceil(videoArakni.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageArakni();
  pageLatestBtnsArakni();
}

function pageWorldsBtnsArakni(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageArakni;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageArakni;
}

function firstPageWorldsArakni() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageArakni();
  pageWorldsBtnsArakni();
}

function prevPageWorldsArakni() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageArakni();
  pageWorldsBtnsArakni();
}

function nextPageWorldsArakni() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageArakni();
  pageWorldsBtnsArakni();
}

function lastPageWorldsArakni() {
  pageWorlds = Math.ceil(videoArakni.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageArakni();
  pageWorldsBtnsArakni();
}

function pageProtourBtnsArakni(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageArakni;
  protourLastPageBtn.disabled = pageProtour === protourLastPageArakni;
}

function firstPageProtourArakni() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageArakni();
  pageProtourBtnsArakni();
}

function prevPageProtourArakni() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageArakni();
  pageProtourBtnsArakni();
}

function nextPageProtourArakni() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageArakni();
  pageProtourBtnsArakni();
}

function lastPageProtourArakni() {
  pageProtour = Math.ceil(videoArakni.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageArakni();
  pageProtourBtnsArakni();
}

function pageCallingBtnsArakni(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageArakni;
  callingLastPageBtn.disabled = pageCalling === callingLastPageArakni;
}

function firstPageCallingArakni() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageArakni();
  pageCallingBtnsArakni();
}

function prevPageCallingArakni() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageArakni();
  pageCallingBtnsArakni();
}

function nextPageCallingArakni() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageArakni();
  pageCallingBtnsArakni();
}

function lastPageCallingArakni() {
  pageCalling = Math.ceil(videoArakni.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoArakni.length)

  printPageArakni();
  pageCallingBtnsArakni();
  console.log(videoArakni.length)
}

function pageBhBtnsArakni(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageArakni;
  bhLastPageBtn.disabled = pageBh === bhLastPageArakni;
}

function firstPageBhArakni() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageArakni();
  pageBhBtnsArakni();
}

function prevPageBhArakni() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageArakni();
  pageBhBtnsArakni();
}

function nextPageBhArakni() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageArakni();
  pageBhBtnsArakni();
}

function lastPageBhArakni() {
  pageBh = Math.ceil(videoArakni.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageArakni();
  pageBhBtnsArakni();
}

function pagePqBtnsArakni(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageArakni;
  pqLastPageBtn.disabled = pagePq === pqLastPageArakni;
}

function firstPagePqArakni() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageArakni();
  pagePqBtnsArakni();
}

function prevPagePqArakni() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageArakni();
  pagePqBtnsArakni();
}

function nextPagePqArakni() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageArakni();
  pagePqBtnsArakni();
}

function lastPagePqArakni() {
  pagePq = Math.ceil(videoArakni.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageArakni();
  pagePqBtnsArakni();
}

function pageAgeBtnsArakni(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageArakni;
  ageLastPageBtn.disabled = pageAge === ageLastPageArakni;
}

function firstPageAgeArakni() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageArakni();
  pageAgeBtnsArakni();
}

function prevPageAgeArakni() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageArakni();
  pageAgeBtnsArakni();
}

function nextPageAgeArakni() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageArakni();
  pageAgeBtnsArakni();
}

function lastPageAgeArakni() {
  pageAge = Math.ceil(videoArakni.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageArakni();
  pageAgeBtnsArakni();
}