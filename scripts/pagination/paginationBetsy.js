let latestLastPageBetsy = Math.ceil(
  videoBetsy.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageBetsy = Math.ceil(
  videoBetsy.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageBetsy = Math.ceil(
  videoBetsy.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageBetsy = Math.ceil(
  videoBetsy.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageBetsy = Math.ceil(
  videoBetsy.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageBetsy = Math.ceil(
  videoBetsy.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageBetsy = Math.ceil(
  videoBetsy.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsBetsy() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageBetsy;
  latestLastPageBtn.disabled = pageLatest === latestLastPageBetsy;
}

function firstPageLatestBetsy() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageBetsy();
  pageLatestBtnsBetsy();
}

function prevPageLatestBetsy() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageBetsy();
  pageLatestBtnsBetsy();
}

function nextPageLatestBetsy() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageBetsy();
  pageLatestBtnsBetsy();
}

function lastPageLatestBetsy() {
  pageLatest = Math.ceil(videoBetsy.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageBetsy();
  pageLatestBtnsBetsy();
}

function pageWorldsBtnsBetsy(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageBetsy;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageBetsy;
}

function firstPageWorldsBetsy() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageBetsy();
  pageWorldsBtnsBetsy();
}

function prevPageWorldsBetsy() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageBetsy();
  pageWorldsBtnsBetsy();
}

function nextPageWorldsBetsy() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageBetsy();
  pageWorldsBtnsBetsy();
}

function lastPageWorldsBetsy() {
  pageWorlds = Math.ceil(videoBetsy.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageBetsy();
  pageWorldsBtnsBetsy();
}

function pageProtourBtnsBetsy(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageBetsy;
  protourLastPageBtn.disabled = pageProtour === protourLastPageBetsy;
}

function firstPageProtourBetsy() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageBetsy();
  pageProtourBtnsBetsy();
}

function prevPageProtourBetsy() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageBetsy();
  pageProtourBtnsBetsy();
}

function nextPageProtourBetsy() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageBetsy();
  pageProtourBtnsBetsy();
}

function lastPageProtourBetsy() {
  pageProtour = Math.ceil(videoBetsy.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageBetsy();
  pageProtourBtnsBetsy();
}

function pageCallingBtnsBetsy(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageBetsy;
  callingLastPageBtn.disabled = pageCalling === callingLastPageBetsy;
}

function firstPageCallingBetsy() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageBetsy();
  pageCallingBtnsBetsy();
}

function prevPageCallingBetsy() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageBetsy();
  pageCallingBtnsBetsy();
}

function nextPageCallingBetsy() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageBetsy();
  pageCallingBtnsBetsy();
}

function lastPageCallingBetsy() {
  pageCalling = Math.ceil(videoBetsy.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoBetsy.length)

  printPageBetsy();
  pageCallingBtnsBetsy();
  console.log(videoBetsy.length)
}

function pageBhBtnsBetsy(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageBetsy;
  bhLastPageBtn.disabled = pageBh === bhLastPageBetsy;
}

function firstPageBhBetsy() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageBetsy();
  pageBhBtnsBetsy();
}

function prevPageBhBetsy() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageBetsy();
  pageBhBtnsBetsy();
}

function nextPageBhBetsy() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageBetsy();
  pageBhBtnsBetsy();
}

function lastPageBhBetsy() {
  pageBh = Math.ceil(videoBetsy.filter(videoCategories[6].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageBetsy();
  pageBhBtnsBetsy();
}

function pagePqBtnsBetsy(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageBetsy;
  pqLastPageBtn.disabled = pagePq === pqLastPageBetsy;
}

function firstPagePqBetsy() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageBetsy();
  pagePqBtnsBetsy();
}

function prevPagePqBetsy() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageBetsy();
  pagePqBtnsBetsy();
}

function nextPagePqBetsy() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageBetsy();
  pagePqBtnsBetsy();
}

function lastPagePqBetsy() {
  pagePq = Math.ceil(videoBetsy.filter(videoCategories[4].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageBetsy();
  pagePqBtnsBetsy();
}

function pageAgeBtnsBetsy(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageBetsy;
  ageLastPageBtn.disabled = pageAge === ageLastPageBetsy;
}

function firstPageAgeBetsy() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageBetsy();
  pageAgeBtnsBetsy();
}

function prevPageAgeBetsy() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageBetsy();
  pageAgeBtnsBetsy();
}

function nextPageAgeBetsy() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageBetsy();
  pageAgeBtnsBetsy();
}

function lastPageAgeBetsy() {
  pageAge = Math.ceil(videoBetsy.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageBetsy();
  pageAgeBtnsBetsy();
}