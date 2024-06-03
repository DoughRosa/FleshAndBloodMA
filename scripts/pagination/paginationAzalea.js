let latestLastPageAzalea = Math.ceil(
  videoAzalea.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageAzalea = Math.ceil(
  videoAzalea.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageAzalea = Math.ceil(
  videoAzalea.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageAzalea = Math.ceil(
  videoAzalea.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageAzalea = Math.ceil(
  videoAzalea.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageAzalea = Math.ceil(
  videoAzalea.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageAzalea = Math.ceil(
  videoAzalea.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsAzalea() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageAzalea;
  latestLastPageBtn.disabled = pageLatest === latestLastPageAzalea;
}

function firstPageLatestAzalea() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageAzalea();
  pageLatestBtnsAzalea();
}

function prevPageLatestAzalea() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageAzalea();
  pageLatestBtnsAzalea();
}

function nextPageLatestAzalea() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageAzalea();
  pageLatestBtnsAzalea();
}

function lastPageLatestAzalea() {
  pageLatest = Math.ceil(videoAzalea.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageAzalea();
  pageLatestBtnsAzalea();
}

function pageWorldsBtnsAzalea(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageAzalea;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageAzalea;
}

function firstPageWorldsAzalea() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageAzalea();
  pageWorldsBtnsAzalea();
}

function prevPageWorldsAzalea() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageAzalea();
  pageWorldsBtnsAzalea();
}

function nextPageWorldsAzalea() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageAzalea();
  pageWorldsBtnsAzalea();
}

function lastPageWorldsAzalea() {
  pageWorlds = Math.ceil(videoAzalea.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageAzalea();
  pageWorldsBtnsAzalea();
}

function pageProtourBtnsAzalea(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageAzalea;
  protourLastPageBtn.disabled = pageProtour === protourLastPageAzalea;
}

function firstPageProtourAzalea() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageAzalea();
  pageProtourBtnsAzalea();
}

function prevPageProtourAzalea() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageAzalea();
  pageProtourBtnsAzalea();
}

function nextPageProtourAzalea() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageAzalea();
  pageProtourBtnsAzalea();
}

function lastPageProtourAzalea() {
  pageProtour = Math.ceil(videoAzalea.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageAzalea();
  pageProtourBtnsAzalea();
}

function pageCallingBtnsAzalea(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageAzalea;
  callingLastPageBtn.disabled = pageCalling === callingLastPageAzalea;
}

function firstPageCallingAzalea() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageAzalea();
  pageCallingBtnsAzalea();
}

function prevPageCallingAzalea() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageAzalea();
  pageCallingBtnsAzalea();
}

function nextPageCallingAzalea() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageAzalea();
  pageCallingBtnsAzalea();
}

function lastPageCallingAzalea() {
  pageCalling = Math.ceil(videoAzalea.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoAzalea.length)

  printPageAzalea();
  pageCallingBtnsAzalea();
  console.log(videoAzalea.length)
}

function pageBhBtnsAzalea(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageAzalea;
  bhLastPageBtn.disabled = pageBh === bhLastPageAzalea;
}

function firstPageBhAzalea() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageAzalea();
  pageBhBtnsAzalea();
}

function prevPageBhAzalea() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageAzalea();
  pageBhBtnsAzalea();
}

function nextPageBhAzalea() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageAzalea();
  pageBhBtnsAzalea();
}

function lastPageBhAzalea() {
  pageBh = Math.ceil(videoAzalea.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageAzalea();
  pageBhBtnsAzalea();
}

function pagePqBtnsAzalea(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageAzalea;
  pqLastPageBtn.disabled = pagePq === pqLastPageAzalea;
}

function firstPagePqAzalea() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageAzalea();
  pagePqBtnsAzalea();
}

function prevPagePqAzalea() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageAzalea();
  pagePqBtnsAzalea();
}

function nextPagePqAzalea() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageAzalea();
  pagePqBtnsAzalea();
}

function lastPagePqAzalea() {
  pagePq = Math.ceil(videoAzalea.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageAzalea();
  pagePqBtnsAzalea();
}

function pageAgeBtnsAzalea(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageAzalea;
  ageLastPageBtn.disabled = pageAge === ageLastPageAzalea;
}

function firstPageAgeAzalea() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageAzalea();
  pageAgeBtnsAzalea();
}

function prevPageAgeAzalea() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageAzalea();
  pageAgeBtnsAzalea();
}

function nextPageAgeAzalea() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageAzalea();
  pageAgeBtnsAzalea();
}

function lastPageAgeAzalea() {
  pageAge = Math.ceil(videoAzalea.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageAzalea();
  pageAgeBtnsAzalea();
}