let latestLastPageFai = Math.ceil(
  videoFai.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageFai = Math.ceil(
  videoFai.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageFai = Math.ceil(
  videoFai.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageFai = Math.ceil(
  videoFai.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageFai = Math.ceil(
  videoFai.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageFai = Math.ceil(
  videoFai.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageFai = Math.ceil(
  videoFai.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsFai() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageFai;
  latestLastPageBtn.disabled = pageLatest === latestLastPageFai;
}

function firstPageLatestFai() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageFai();
  pageLatestBtnsFai();
}

function prevPageLatestFai() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageFai();
  pageLatestBtnsFai();
}

function nextPageLatestFai() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageFai();
  pageLatestBtnsFai();
}

function lastPageLatestFai() {
  pageLatest = Math.ceil(videoFai.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageFai();
  pageLatestBtnsFai();
}

function pageWorldsBtnsFai(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageFai;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageFai;
}

function firstPageWorldsFai() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageFai();
  pageWorldsBtnsFai();
}

function prevPageWorldsFai() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageFai();
  pageWorldsBtnsFai();
}

function nextPageWorldsFai() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageFai();
  pageWorldsBtnsFai();
}

function lastPageWorldsFai() {
  pageWorlds = Math.ceil(videoFai.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageFai();
  pageWorldsBtnsFai();
}

function pageProtourBtnsFai(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageFai;
  protourLastPageBtn.disabled = pageProtour === protourLastPageFai;
}

function firstPageProtourFai() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageFai();
  pageProtourBtnsFai();
}

function prevPageProtourFai() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageFai();
  pageProtourBtnsFai();
}

function nextPageProtourFai() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageFai();
  pageProtourBtnsFai();
}

function lastPageProtourFai() {
  pageProtour = Math.ceil(videoFai.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageFai();
  pageProtourBtnsFai();
}

function pageCallingBtnsFai(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageFai;
  callingLastPageBtn.disabled = pageCalling === callingLastPageFai;
}

function firstPageCallingFai() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageFai();
  pageCallingBtnsFai();
}

function prevPageCallingFai() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageFai();
  pageCallingBtnsFai();
}

function nextPageCallingFai() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageFai();
  pageCallingBtnsFai();
}

function lastPageCallingFai() {
  pageCalling = Math.ceil(videoFai.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoFai.length)

  printPageFai();
  pageCallingBtnsFai();
  console.log(videoFai.length)
}

function pageBhBtnsFai(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageFai;
  bhLastPageBtn.disabled = pageBh === bhLastPageFai;
}

function firstPageBhFai() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageFai();
  pageBhBtnsFai();
}

function prevPageBhFai() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageFai();
  pageBhBtnsFai();
}

function nextPageBhFai() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageFai();
  pageBhBtnsFai();
}

function lastPageBhFai() {
  pageBh = Math.ceil(videoFai.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageFai();
  pageBhBtnsFai();
}

function pagePqBtnsFai(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageFai;
  pqLastPageBtn.disabled = pagePq === pqLastPageFai;
}

function firstPagePqFai() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageFai();
  pagePqBtnsFai();
}

function prevPagePqFai() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageFai();
  pagePqBtnsFai();
}

function nextPagePqFai() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageFai();
  pagePqBtnsFai();
}

function lastPagePqFai() {
  pagePq = Math.ceil(videoFai.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageFai();
  pagePqBtnsFai();
}

function pageAgeBtnsFai(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageFai;
  ageLastPageBtn.disabled = pageAge === ageLastPageFai;
}

function firstPageAgeFai() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageFai();
  pageAgeBtnsFai();
}

function prevPageAgeFai() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageFai();
  pageAgeBtnsFai();
}

function nextPageAgeFai() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageFai();
  pageAgeBtnsFai();
}

function lastPageAgeFai() {
  pageAge = Math.ceil(videoFai.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageFai();
  pageAgeBtnsFai();
}