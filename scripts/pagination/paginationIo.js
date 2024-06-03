let latestLastPageIo = Math.ceil(
  videoIo.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageIo = Math.ceil(
  videoIo.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageIo = Math.ceil(
  videoIo.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageIo = Math.ceil(
  videoIo.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageIo = Math.ceil(
  videoIo.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageIo = Math.ceil(
  videoIo.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageIo = Math.ceil(
  videoIo.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsIo() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageIo;
  latestLastPageBtn.disabled = pageLatest === latestLastPageIo;
}

function firstPageLatestIo() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageIo();
  pageLatestBtnsIo();
}

function prevPageLatestIo() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageIo();
  pageLatestBtnsIo();
}

function nextPageLatestIo() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageIo();
  pageLatestBtnsIo();
}

function lastPageLatestIo() {
  pageLatest = Math.ceil(videoIo.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageIo();
  pageLatestBtnsIo();
}

function pageWorldsBtnsIo(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageIo;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageIo;
}

function firstPageWorldsIo() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageIo();
  pageWorldsBtnsIo();
}

function prevPageWorldsIo() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageIo();
  pageWorldsBtnsIo();
}

function nextPageWorldsIo() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageIo();
  pageWorldsBtnsIo();
}

function lastPageWorldsIo() {
  pageWorlds = Math.ceil(videoIo.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageIo();
  pageWorldsBtnsIo();
}

function pageProtourBtnsIo(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageIo;
  protourLastPageBtn.disabled = pageProtour === protourLastPageIo;
}

function firstPageProtourIo() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageIo();
  pageProtourBtnsIo();
}

function prevPageProtourIo() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageIo();
  pageProtourBtnsIo();
}

function nextPageProtourIo() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageIo();
  pageProtourBtnsIo();
}

function lastPageProtourIo() {
  pageProtour = Math.ceil(videoIo.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageIo();
  pageProtourBtnsIo();
}

function pageCallingBtnsIo(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageIo;
  callingLastPageBtn.disabled = pageCalling === callingLastPageIo;
}

function firstPageCallingIo() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageIo();
  pageCallingBtnsIo();
}

function prevPageCallingIo() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageIo();
  pageCallingBtnsIo();
}

function nextPageCallingIo() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageIo();
  pageCallingBtnsIo();
}

function lastPageCallingIo() {
  pageCalling = Math.ceil(videoIo.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoIo.length)

  printPageIo();
  pageCallingBtnsIo();
  console.log(videoIo.length)
}

function pageBhBtnsIo(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageIo;
  bhLastPageBtn.disabled = pageBh === bhLastPageIo;
}

function firstPageBhIo() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageIo();
  pageBhBtnsIo();
}

function prevPageBhIo() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageIo();
  pageBhBtnsIo();
}

function nextPageBhIo() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageIo();
  pageBhBtnsIo();
}

function lastPageBhIo() {
  pageBh = Math.ceil(videoIo.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageIo();
  pageBhBtnsIo();
}

function pagePqBtnsIo(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageIo;
  pqLastPageBtn.disabled = pagePq === pqLastPageIo;
}

function firstPagePqIo() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageIo();
  pagePqBtnsIo();
}

function prevPagePqIo() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageIo();
  pagePqBtnsIo();
}

function nextPagePqIo() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageIo();
  pagePqBtnsIo();
}

function lastPagePqIo() {
  pagePq = Math.ceil(videoIo.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageIo();
  pagePqBtnsIo();
}
function pageAgeBtnsIo(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageIo;
  ageLastPageBtn.disabled = pageAge === ageLastPageIo;
}

function firstPageAgeIo() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageIo();
  pageAgeBtnsIo();
}

function prevPageAgeIo() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageIo();
  pageAgeBtnsIo();
}

function nextPageAgeIo() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageIo();
  pageAgeBtnsIo();
}

function lastPageAgeIo() {
  pageAge = Math.ceil(videoIo.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageIo();
  pageAgeBtnsIo();
}