let latestLastPageRiptide = Math.ceil(
  videoRiptide.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageRiptide = Math.ceil(
  videoRiptide.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageRiptide = Math.ceil(
  videoRiptide.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageRiptide = Math.ceil(
  videoRiptide.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageRiptide = Math.ceil(
  videoRiptide.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageRiptide = Math.ceil(
  videoRiptide.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageRiptide = Math.ceil(
  videoRiptide.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsRiptide() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageRiptide;
  latestLastPageBtn.disabled = pageLatest === latestLastPageRiptide;
}

function firstPageLatestRiptide() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageRiptide();
  pageLatestBtnsRiptide();
}

function prevPageLatestRiptide() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageRiptide();
  pageLatestBtnsRiptide();
}

function nextPageLatestRiptide() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageRiptide();
  pageLatestBtnsRiptide();
}

function lastPageLatestRiptide() {
  pageLatest = Math.ceil(videoRiptide.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageRiptide();
  pageLatestBtnsRiptide();
}

function pageWorldsBtnsRiptide(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageRiptide;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageRiptide;
}

function firstPageWorldsRiptide() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageRiptide();
  pageWorldsBtnsRiptide();
}

function prevPageWorldsRiptide() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageRiptide();
  pageWorldsBtnsRiptide();
}

function nextPageWorldsRiptide() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageRiptide();
  pageWorldsBtnsRiptide();
}

function lastPageWorldsRiptide() {
  pageWorlds = Math.ceil(videoRiptide.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageRiptide();
  pageWorldsBtnsRiptide();
}

function pageProtourBtnsRiptide(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageRiptide;
  protourLastPageBtn.disabled = pageProtour === protourLastPageRiptide;
}

function firstPageProtourRiptide() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageRiptide();
  pageProtourBtnsRiptide();
}

function prevPageProtourRiptide() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageRiptide();
  pageProtourBtnsRiptide();
}

function nextPageProtourRiptide() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageRiptide();
  pageProtourBtnsRiptide();
}

function lastPageProtourRiptide() {
  pageProtour = Math.ceil(videoRiptide.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageRiptide();
  pageProtourBtnsRiptide();
}

function pageCallingBtnsRiptide(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageRiptide;
  callingLastPageBtn.disabled = pageCalling === callingLastPageRiptide;
}

function firstPageCallingRiptide() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageRiptide();
  pageCallingBtnsRiptide();
}

function prevPageCallingRiptide() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageRiptide();
  pageCallingBtnsRiptide();
}

function nextPageCallingRiptide() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageRiptide();
  pageCallingBtnsRiptide();
}

function lastPageCallingRiptide() {
  pageCalling = Math.ceil(videoRiptide.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoRiptide.length)

  printPageRiptide();
  pageCallingBtnsRiptide();
  console.log(videoRiptide.length)
}

function pageBhBtnsRiptide(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageRiptide;
  bhLastPageBtn.disabled = pageBh === bhLastPageRiptide;
}

function firstPageBhRiptide() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageRiptide();
  pageBhBtnsRiptide();
}

function prevPageBhRiptide() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageRiptide();
  pageBhBtnsRiptide();
}

function nextPageBhRiptide() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageRiptide();
  pageBhBtnsRiptide();
}

function lastPageBhRiptide() {
  pageBh = Math.ceil(videoRiptide.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageRiptide();
  pageBhBtnsRiptide();
}

function pagePqBtnsRiptide(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageRiptide;
  pqLastPageBtn.disabled = pagePq === pqLastPageRiptide;
}

function firstPagePqRiptide() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageRiptide();
  pagePqBtnsRiptide();
}

function prevPagePqRiptide() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageRiptide();
  pagePqBtnsRiptide();
}

function nextPagePqRiptide() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageRiptide();
  pagePqBtnsRiptide();
}

function lastPagePqRiptide() {
  pagePq = Math.ceil(videoRiptide.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageRiptide();
  pagePqBtnsRiptide();
}


function pageAgeBtnsRiptide(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageRiptide;
  ageLastPageBtn.disabled = pageAge === ageLastPageRiptide;
}

function firstPageAgeRiptide() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageRiptide();
  pageAgeBtnsRiptide();
}

function prevPageAgeRiptide() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageRiptide();
  pageAgeBtnsRiptide();
}

function nextPageAgeRiptide() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageRiptide();
  pageAgeBtnsRiptide();
}

function lastPageAgeRiptide() {
  pageAge = Math.ceil(videoRiptide.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageRiptide();
  pageAgeBtnsRiptide();
}