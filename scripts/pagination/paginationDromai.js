let latestLastPageDromai = Math.ceil(
  videoDromai.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageDromai = Math.ceil(
  videoDromai.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageDromai = Math.ceil(
  videoDromai.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageDromai = Math.ceil(
  videoDromai.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageDromai = Math.ceil(
  videoDromai.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageDromai = Math.ceil(
  videoDromai.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageDromai = Math.ceil(
  videoDromai.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsDromai() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageDromai;
  latestLastPageBtn.disabled = pageLatest === latestLastPageDromai;
}

function firstPageLatestDromai() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageDromai();
  pageLatestBtnsDromai();
}

function prevPageLatestDromai() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageDromai();
  pageLatestBtnsDromai();
}

function nextPageLatestDromai() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageDromai();
  pageLatestBtnsDromai();
}

function lastPageLatestDromai() {
  pageLatest = Math.ceil(videoDromai.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageDromai();
  pageLatestBtnsDromai();
}

function pageWorldsBtnsDromai(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageDromai;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageDromai;
}

function firstPageWorldsDromai() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageDromai();
  pageWorldsBtnsDromai();
}

function prevPageWorldsDromai() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageDromai();
  pageWorldsBtnsDromai();
}

function nextPageWorldsDromai() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageDromai();
  pageWorldsBtnsDromai();
}

function lastPageWorldsDromai() {
  pageWorlds = Math.ceil(videoDromai.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageDromai();
  pageWorldsBtnsDromai();
}

function pageProtourBtnsDromai(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageDromai;
  protourLastPageBtn.disabled = pageProtour === protourLastPageDromai;
}

function firstPageProtourDromai() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageDromai();
  pageProtourBtnsDromai();
}

function prevPageProtourDromai() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageDromai();
  pageProtourBtnsDromai();
}

function nextPageProtourDromai() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageDromai();
  pageProtourBtnsDromai();
}

function lastPageProtourDromai() {
  pageProtour = Math.ceil(videoDromai.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageDromai();
  pageProtourBtnsDromai();
}

function pageCallingBtnsDromai(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageDromai;
  callingLastPageBtn.disabled = pageCalling === callingLastPageDromai;
}

function firstPageCallingDromai() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageDromai();
  pageCallingBtnsDromai();
}

function prevPageCallingDromai() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageDromai();
  pageCallingBtnsDromai();
}

function nextPageCallingDromai() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageDromai();
  pageCallingBtnsDromai();
}

function lastPageCallingDromai() {
  pageCalling = Math.ceil(videoDromai.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoDromai.length)

  printPageDromai();
  pageCallingBtnsDromai();
  console.log(videoDromai.length)
}

function pageBhBtnsDromai(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageDromai;
  bhLastPageBtn.disabled = pageBh === bhLastPageDromai;
}

function firstPageBhDromai() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageDromai();
  pageBhBtnsDromai();
}

function prevPageBhDromai() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageDromai();
  pageBhBtnsDromai();
}

function nextPageBhDromai() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageDromai();
  pageBhBtnsDromai();
}

function lastPageBhDromai() {
  pageBh = Math.ceil(videoDromai.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageDromai();
  pageBhBtnsDromai();
}

function pagePqBtnsDromai(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageDromai;
  pqLastPageBtn.disabled = pagePq === pqLastPageDromai;
}

function firstPagePqDromai() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageDromai();
  pagePqBtnsDromai();
}

function prevPagePqDromai() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageDromai();
  pagePqBtnsDromai();
}

function nextPagePqDromai() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageDromai();
  pagePqBtnsDromai();
}

function lastPagePqDromai() {
  pagePq = Math.ceil(videoDromai.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageDromai();
  pagePqBtnsDromai();
}

function pageAgeBtnsDromai(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageDromai;
  ageLastPageBtn.disabled = pageAge === ageLastPageDromai;
}

function firstPageAgeDromai() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageDromai();
  pageAgeBtnsDromai();
}

function prevPageAgeDromai() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageDromai();
  pageAgeBtnsDromai();
}

function nextPageAgeDromai() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageDromai();
  pageAgeBtnsDromai();
}

function lastPageAgeDromai() {
  pageAge = Math.ceil(videoDromai.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageDromai();
  pageAgeBtnsDromai();
}