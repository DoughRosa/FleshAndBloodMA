let latestLastPagePrism = Math.ceil(
  videoPrism.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPagePrism = Math.ceil(
  videoPrism.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPagePrism = Math.ceil(
  videoPrism.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPagePrism = Math.ceil(
  videoPrism.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPagePrism = Math.ceil(
  videoPrism.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPagePrism = Math.ceil(
  videoPrism.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPagePrism = Math.ceil(
  videoPrism.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsPrism() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPagePrism;
  latestLastPageBtn.disabled = pageLatest === latestLastPagePrism;
}

function firstPageLatestPrism() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPagePrism();
  pageLatestBtnsPrism();
}

function prevPageLatestPrism() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPagePrism();
  pageLatestBtnsPrism();
}

function nextPageLatestPrism() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPagePrism();
  pageLatestBtnsPrism();
}

function lastPageLatestPrism() {
  pageLatest = Math.ceil(videoPrism.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPagePrism();
  pageLatestBtnsPrism();
}

function pageWorldsBtnsPrism(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPagePrism;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPagePrism;
}

function firstPageWorldsPrism() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPagePrism();
  pageWorldsBtnsPrism();
}

function prevPageWorldsPrism() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPagePrism();
  pageWorldsBtnsPrism();
}

function nextPageWorldsPrism() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPagePrism();
  pageWorldsBtnsPrism();
}

function lastPageWorldsPrism() {
  pageWorlds = Math.ceil(videoPrism.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPagePrism();
  pageWorldsBtnsPrism();
}

function pageProtourBtnsPrism(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPagePrism;
  protourLastPageBtn.disabled = pageProtour === protourLastPagePrism;
}

function firstPageProtourPrism() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPagePrism();
  pageProtourBtnsPrism();
}

function prevPageProtourPrism() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPagePrism();
  pageProtourBtnsPrism();
}

function nextPageProtourPrism() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPagePrism();
  pageProtourBtnsPrism();
}

function lastPageProtourPrism() {
  pageProtour = Math.ceil(videoPrism.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPagePrism();
  pageProtourBtnsPrism();
}

function pageCallingBtnsPrism(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPagePrism;
  callingLastPageBtn.disabled = pageCalling === callingLastPagePrism;
}

function firstPageCallingPrism() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPagePrism();
  pageCallingBtnsPrism();
}

function prevPageCallingPrism() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPagePrism();
  pageCallingBtnsPrism();
}

function nextPageCallingPrism() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPagePrism();
  pageCallingBtnsPrism();
}

function lastPageCallingPrism() {
  pageCalling = Math.ceil(videoPrism.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoPrism.length)

  printPagePrism();
  pageCallingBtnsPrism();
  console.log(videoPrism.length)
}

function pageBhBtnsPrism(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPagePrism;
  bhLastPageBtn.disabled = pageBh === bhLastPagePrism;
}

function firstPageBhPrism() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPagePrism();
  pageBhBtnsPrism();
}

function prevPageBhPrism() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPagePrism();
  pageBhBtnsPrism();
}

function nextPageBhPrism() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPagePrism();
  pageBhBtnsPrism();
}

function lastPageBhPrism() {
  pageBh = Math.ceil(videoPrism.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPagePrism();
  pageBhBtnsPrism();
}

function pagePqBtnsPrism(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPagePrism;
  pqLastPageBtn.disabled = pagePq === pqLastPagePrism;
}

function firstPagePqPrism() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPagePrism();
  pagePqBtnsPrism();
}

function prevPagePqPrism() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPagePrism();
  pagePqBtnsPrism();
}

function nextPagePqPrism() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPagePrism();
  pagePqBtnsPrism();
}

function lastPagePqPrism() {
  pagePq = Math.ceil(videoPrism.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPagePrism();
  pagePqBtnsPrism();
}

function pageAgeBtnsPrism(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPagePrism;
  ageLastPageBtn.disabled = pageAge === ageLastPagePrism;
}

function firstPageAgePrism() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPagePrism();
  pageAgeBtnsPrism();
}

function prevPageAgePrism() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPagePrism();
  pageAgeBtnsPrism();
}

function nextPageAgePrism() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPagePrism();
  pageAgeBtnsPrism();
}

function lastPageAgePrism() {
  pageAge = Math.ceil(videoPrism.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPagePrism();
  pageAgeBtnsPrism();
}