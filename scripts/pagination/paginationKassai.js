let latestLastPageKassai = Math.ceil(
  videoKassai.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageKassai = Math.ceil(
  videoKassai.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageKassai = Math.ceil(
  videoKassai.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageKassai = Math.ceil(
  videoKassai.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageKassai = Math.ceil(
  videoKassai.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageKassai = Math.ceil(
  videoKassai.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageKassai = Math.ceil(
  videoKassai.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsKassai() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageKassai;
  latestLastPageBtn.disabled = pageLatest === latestLastPageKassai;
}

function firstPageLatestKassai() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageKassai();
  pageLatestBtnsKassai();
}

function prevPageLatestKassai() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageKassai();
  pageLatestBtnsKassai();
}

function nextPageLatestKassai() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageKassai();
  pageLatestBtnsKassai();
}

function lastPageLatestKassai() {
  pageLatest = Math.ceil(videoKassai.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageKassai();
  pageLatestBtnsKassai();
}

function pageWorldsBtnsKassai(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageKassai;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageKassai;
}

function firstPageWorldsKassai() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageKassai();
  pageWorldsBtnsKassai();
}

function prevPageWorldsKassai() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageKassai();
  pageWorldsBtnsKassai();
}

function nextPageWorldsKassai() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageKassai();
  pageWorldsBtnsKassai();
}

function lastPageWorldsKassai() {
  pageWorlds = Math.ceil(videoKassai.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageKassai();
  pageWorldsBtnsKassai();
}

function pageProtourBtnsKassai(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageKassai;
  protourLastPageBtn.disabled = pageProtour === protourLastPageKassai;
}

function firstPageProtourKassai() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageKassai();
  pageProtourBtnsKassai();
}

function prevPageProtourKassai() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageKassai();
  pageProtourBtnsKassai();
}

function nextPageProtourKassai() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageKassai();
  pageProtourBtnsKassai();
}

function lastPageProtourKassai() {
  pageProtour = Math.ceil(videoKassai.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageKassai();
  pageProtourBtnsKassai();
}

function pageCallingBtnsKassai(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageKassai;
  callingLastPageBtn.disabled = pageCalling === callingLastPageKassai;
}

function firstPageCallingKassai() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageKassai();
  pageCallingBtnsKassai();
}

function prevPageCallingKassai() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageKassai();
  pageCallingBtnsKassai();
}

function nextPageCallingKassai() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageKassai();
  pageCallingBtnsKassai();
}

function lastPageCallingKassai() {
  pageCalling = Math.ceil(videoKassai.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoKassai.length)

  printPageKassai();
  pageCallingBtnsKassai();
  console.log(videoKassai.length)
}

function pageBhBtnsKassai(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageKassai;
  bhLastPageBtn.disabled = pageBh === bhLastPageKassai;
}

function firstPageBhKassai() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageKassai();
  pageBhBtnsKassai();
}

function prevPageBhKassai() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageKassai();
  pageBhBtnsKassai();
}

function nextPageBhKassai() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageKassai();
  pageBhBtnsKassai();
}

function lastPageBhKassai() {
  pageBh = Math.ceil(videoKassai.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageKassai();
  pageBhBtnsKassai();
}

function pagePqBtnsKassai(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageKassai;
  pqLastPageBtn.disabled = pagePq === pqLastPageKassai;
}

function firstPagePqKassai() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageKassai();
  pagePqBtnsKassai();
}

function prevPagePqKassai() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageKassai();
  pagePqBtnsKassai();
}

function nextPagePqKassai() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageKassai();
  pagePqBtnsKassai();
}

function lastPagePqKassai() {
  pagePq = Math.ceil(videoKassai.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageKassai();
  pagePqBtnsKassai();
}

function pageAgeBtnsKassai(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageKassai;
  ageLastPageBtn.disabled = pageAge === ageLastPageKassai;
}

function firstPageAgeKassai() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageKassai();
  pageAgeBtnsKassai();
}

function prevPageAgeKassai() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageKassai();
  pageAgeBtnsKassai();
}

function nextPageAgeKassai() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageKassai();
  pageAgeBtnsKassai();
}

function lastPageAgeKassai() {
  pageAge = Math.ceil(videoKassai.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageKassai();
  pageAgeBtnsKassai();
}