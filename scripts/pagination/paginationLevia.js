let latestLastPageLevia = Math.ceil(
  videoLevia.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageLevia = Math.ceil(
  videoLevia.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageLevia = Math.ceil(
  videoLevia.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageLevia = Math.ceil(
  videoLevia.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageLevia = Math.ceil(
  videoLevia.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageLevia = Math.ceil(
  videoLevia.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageLevia = Math.ceil(
  videoLevia.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsLevia() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageLevia;
  latestLastPageBtn.disabled = pageLatest === latestLastPageLevia;
}

function firstPageLatestLevia() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageLevia();
  pageLatestBtnsLevia();
}

function prevPageLatestLevia() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageLevia();
  pageLatestBtnsLevia();
}

function nextPageLatestLevia() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageLevia();
  pageLatestBtnsLevia();
}

function lastPageLatestLevia() {
  pageLatest = Math.ceil(videoLevia.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageLevia();
  pageLatestBtnsLevia();
}

function pageWorldsBtnsLevia(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageLevia;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageLevia;
}

function firstPageWorldsLevia() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageLevia();
  pageWorldsBtnsLevia();
}

function prevPageWorldsLevia() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageLevia();
  pageWorldsBtnsLevia();
}

function nextPageWorldsLevia() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageLevia();
  pageWorldsBtnsLevia();
}

function lastPageWorldsLevia() {
  pageWorlds = Math.ceil(videoLevia.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageLevia();
  pageWorldsBtnsLevia();
}

function pageProtourBtnsLevia(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageLevia;
  protourLastPageBtn.disabled = pageProtour === protourLastPageLevia;
}

function firstPageProtourLevia() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageLevia();
  pageProtourBtnsLevia();
}

function prevPageProtourLevia() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageLevia();
  pageProtourBtnsLevia();
}

function nextPageProtourLevia() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageLevia();
  pageProtourBtnsLevia();
}

function lastPageProtourLevia() {
  pageProtour = Math.ceil(videoLevia.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageLevia();
  pageProtourBtnsLevia();
}

function pageCallingBtnsLevia(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageLevia;
  callingLastPageBtn.disabled = pageCalling === callingLastPageLevia;
}

function firstPageCallingLevia() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageLevia();
  pageCallingBtnsLevia();
}

function prevPageCallingLevia() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageLevia();
  pageCallingBtnsLevia();
}

function nextPageCallingLevia() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageLevia();
  pageCallingBtnsLevia();
}

function lastPageCallingLevia() {
  pageCalling = Math.ceil(videoLevia.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoLevia.length)

  printPageLevia();
  pageCallingBtnsLevia();
  console.log(videoLevia.length)
}

function pageBhBtnsLevia(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageLevia;
  bhLastPageBtn.disabled = pageBh === bhLastPageLevia;
}

function firstPageBhLevia() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageLevia();
  pageBhBtnsLevia();
}

function prevPageBhLevia() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageLevia();
  pageBhBtnsLevia();
}

function nextPageBhLevia() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageLevia();
  pageBhBtnsLevia();
}

function lastPageBhLevia() {
  pageBh = Math.ceil(videoLevia.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageLevia();
  pageBhBtnsLevia();
}

function pagePqBtnsLevia(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageLevia;
  pqLastPageBtn.disabled = pagePq === pqLastPageLevia;
}

function firstPagePqLevia() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageLevia();
  pagePqBtnsLevia();
}

function prevPagePqLevia() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageLevia();
  pagePqBtnsLevia();
}

function nextPagePqLevia() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageLevia();
  pagePqBtnsLevia();
}

function lastPagePqLevia() {
  pagePq = Math.ceil(videoLevia.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageLevia();
  pagePqBtnsLevia();
}

function pageAgeBtnsLevia(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageLevia;
  ageLastPageBtn.disabled = pageAge === ageLastPageLevia;
}

function firstPageAgeLevia() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageLevia();
  pageAgeBtnsLevia();
}

function prevPageAgeLevia() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageLevia();
  pageAgeBtnsLevia();
}

function nextPageAgeLevia() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageLevia();
  pageAgeBtnsLevia();
}

function lastPageAgeLevia() {
  pageAge = Math.ceil(videoLevia.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageLevia();
  pageAgeBtnsLevia();
}